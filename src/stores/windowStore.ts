import { create } from "zustand";

export interface WindowState {
  id: string;
  appId: string;
  title: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  contentId?: string; // For opening specific posts/work items
}

interface WindowStore {
  windows: WindowState[];
  activeWindowId: string | null;
  nextZIndex: number;

  // Actions
  openWindow: (
    appId: string,
    title: string,
    options?: {
      contentId?: string;
      size?: { width: number; height: number };
      position?: { x: number; y: number };
    }
  ) => string;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  restoreWindow: (id: string) => void;
  maximizeWindow: (id: string) => void;
  moveWindow: (id: string, position: { x: number; y: number }) => void;
  resizeWindow: (id: string, size: { width: number; height: number }) => void;
  bringToFront: (id: string) => void;
}

const DEFAULT_WINDOW_SIZE = { width: 400, height: 300 };
const WINDOW_OFFSET = 30; // Cascade offset for new windows

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  activeWindowId: null,
  nextZIndex: 1,

  openWindow: (appId, title, options = {}) => {
    const { windows, nextZIndex } = get();

    // Check if window with same appId and contentId already exists
    const existingWindow = windows.find(
      (w) => w.appId === appId && w.contentId === options.contentId && !w.isMinimized
    );

    if (existingWindow) {
      // Focus existing window instead of opening new one
      get().focusWindow(existingWindow.id);
      return existingWindow.id;
    }

    const id = `${appId}-${Date.now()}`;
    const windowCount = windows.filter((w) => !w.isMinimized).length;

    // Calculate cascaded position
    const defaultPosition = {
      x: 50 + (windowCount % 10) * WINDOW_OFFSET,
      y: 50 + (windowCount % 10) * WINDOW_OFFSET,
    };

    const newWindow: WindowState = {
      id,
      appId,
      title,
      position: options.position || defaultPosition,
      size: options.size || DEFAULT_WINDOW_SIZE,
      isMinimized: false,
      isMaximized: false,
      zIndex: nextZIndex,
      contentId: options.contentId,
    };

    set({
      windows: [...windows, newWindow],
      activeWindowId: id,
      nextZIndex: nextZIndex + 1,
    });

    return id;
  },

  closeWindow: (id) => {
    const { windows, activeWindowId } = get();
    const newWindows = windows.filter((w) => w.id !== id);

    // If closing active window, activate the topmost remaining window
    let newActiveId = activeWindowId;
    if (activeWindowId === id) {
      const visibleWindows = newWindows.filter((w) => !w.isMinimized);
      if (visibleWindows.length > 0) {
        const topWindow = visibleWindows.reduce((a, b) =>
          a.zIndex > b.zIndex ? a : b
        );
        newActiveId = topWindow.id;
      } else {
        newActiveId = null;
      }
    }

    set({
      windows: newWindows,
      activeWindowId: newActiveId,
    });
  },

  focusWindow: (id) => {
    const { windows, nextZIndex } = get();

    set({
      windows: windows.map((w) =>
        w.id === id ? { ...w, zIndex: nextZIndex, isMinimized: false } : w
      ),
      activeWindowId: id,
      nextZIndex: nextZIndex + 1,
    });
  },

  minimizeWindow: (id) => {
    const { windows, activeWindowId } = get();

    const newWindows = windows.map((w) =>
      w.id === id ? { ...w, isMinimized: true } : w
    );

    // If minimizing active window, activate the topmost visible window
    let newActiveId = activeWindowId;
    if (activeWindowId === id) {
      const visibleWindows = newWindows.filter((w) => !w.isMinimized);
      if (visibleWindows.length > 0) {
        const topWindow = visibleWindows.reduce((a, b) =>
          a.zIndex > b.zIndex ? a : b
        );
        newActiveId = topWindow.id;
      } else {
        newActiveId = null;
      }
    }

    set({
      windows: newWindows,
      activeWindowId: newActiveId,
    });
  },

  restoreWindow: (id) => {
    get().focusWindow(id);
  },

  maximizeWindow: (id) => {
    const { windows } = get();

    set({
      windows: windows.map((w) =>
        w.id === id
          ? {
              ...w,
              isMaximized: !w.isMaximized,
              // Store original size/position for restore, or restore to original
            }
          : w
      ),
    });
  },

  moveWindow: (id, position) => {
    const { windows } = get();

    set({
      windows: windows.map((w) =>
        w.id === id ? { ...w, position } : w
      ),
    });
  },

  resizeWindow: (id, size) => {
    const { windows } = get();

    set({
      windows: windows.map((w) =>
        w.id === id ? { ...w, size } : w
      ),
    });
  },

  bringToFront: (id) => {
    get().focusWindow(id);
  },
}));

// Selectors
export const selectWindowById = (id: string) => (state: WindowStore) =>
  state.windows.find((w) => w.id === id);

export const selectVisibleWindows = (state: WindowStore) =>
  state.windows.filter((w) => !w.isMinimized);

export const selectMinimizedWindows = (state: WindowStore) =>
  state.windows.filter((w) => w.isMinimized);
