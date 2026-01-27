// About content
export const aboutContent = {
  intro: {
    greeting: "Hey, I'm Darin",
    bio: "An inter-disciplinary digital designer living in Sofia. Currently working at spacefarm, a product design shop I co-founded with my partner Kalina.",
  },
  sections: [
    {
      name: "Currently working on",
      color: "yellow",
      items: [
        "a stealth cooking startup",
        "a new way to type (much) faster",
        "NDA client project",
      ],
    },
    {
      name: "Previously",
      color: "green",
      items: [
        "4 years at early Webflow (employee 50)",
        "design systems at Productboard",
        "community and mapping at Relive",
        "co-founder at Spacefarm",
      ],
    },
    {
      name: "Passionate about",
      color: "blue",
      items: [
        "design systems & design ops",
        "inventing new UI for LLMs",
        "adaptive typography",
        "designing with code",
        "microinteractions and delight",
        "atomic design concepts",
      ],
    },
    {
      name: "Reading",
      color: "purple",
      items: [
        "A Brief History of Information Networks from the Stone Age",
        "Look Me in the Eye – My Life with Asperger's",
      ],
    },
  ],
};

// Social links
export const socialLinks = [
  { name: "Twitter", url: "http://www.twitter.com/deezel" },
  { name: "Dribbble", url: "http://www.dribbble.com/deezel" },
  { name: "Medium", url: "http://www.medium.com/deezel" },
  { name: "Instagram", url: "https://www.instagram.com/ddimitrovd/" },
];

// Work/Portfolio items
export interface WorkItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
}

export const workItems: WorkItem[] = [
  {
    id: "webflow",
    title: "Webflow",
    excerpt:
      "I spent four years working on visual development tools at early Webflow. I worked on features such as Ecommerce, Interactions, Memberships, Annotations, the internal design system and many more.",
    content: `I joined Webflow as employee #50 when the company was still a small startup in San Francisco. Over four years, I had the privilege of working on some of the most impactful features of the platform.

## Key Projects

### Ecommerce
Helped design and ship Webflow's first ecommerce solution, enabling designers to build fully custom online stores without code.

### Interactions 2.0
Worked on the complete redesign of the interactions panel, making complex animations accessible to non-developers.

### Memberships
Contributed to the design of gated content and user authentication features.

### Design System
Built and maintained Webflow's internal design system, ensuring consistency across the product.

### Annotations
Designed the collaborative annotation feature for team feedback on designs.

This experience taught me how to ship design tools at scale while maintaining the delicate balance between power and simplicity.`,
  },
  {
    id: "productboard",
    title: "Productboard",
    excerpt:
      "As a design systems designer at Productboard, I helped build and scale their design system across mediums. I worked on core components, processes, accessibility, documentation and more.",
    content: `At Productboard, I focused on building and scaling their design system to support a rapidly growing product team.

## Contributions

### Core Components
Designed and documented foundational UI components used across all product surfaces.

### Accessibility
Led initiatives to improve WCAG compliance across the component library.

### Documentation
Created comprehensive design system documentation for designers and developers.

### Processes
Established contribution guidelines and governance for the design system.

The work here reinforced my belief that great design systems are products themselves, requiring the same care and iteration as user-facing features.`,
  },
  {
    id: "relive",
    title: "Relive",
    excerpt:
      "Relive is a platform for creating and sharing 3D videos of outdoor activities. I've worked with their team on design and development projects, focusing on user experience and interface design.",
    content: `Relive transforms GPS tracking data into beautiful 3D video stories. I collaborated with their team on various design and frontend projects.

## Focus Areas

### User Experience
Improved the core flow of creating and sharing activity videos.

### Interface Design
Designed new features for the web and mobile applications.

### Community Features
Worked on social features to help users connect over shared outdoor experiences.

Working with Relive showed me the joy of designing products that celebrate human achievement and outdoor adventure.`,
  },
  {
    id: "bb-team",
    title: "BB-Team",
    excerpt:
      "BB-Team is the leading health and fitness portal in Bulgaria. I led the process of building v1 of their design system while working on a visual redesign.",
    content: `BB-Team is Bulgaria's most popular fitness and health platform. I led the design system initiative during a major platform redesign.

## Project Scope

### Design System v1
Created the first structured design system for the platform, including:
- Typography scale
- Color system
- Component library
- Layout grid

### Visual Redesign
Modernized the visual language while respecting the existing brand.

### Pattern Library
Documented reusable patterns for common user flows.

This project demonstrated how design systems can transform legacy products.`,
  },
  {
    id: "proctest",
    title: "Proctest",
    excerpt:
      "Proctest is an industry-grade testing tool used by NATO and the US army. I've worked with their team on a number of projects over the course of more than an year.",
    content: `Proctest provides mission-critical testing solutions for defense organizations worldwide. I collaborated with their team over multiple projects.

## Work Done

### Interface Modernization
Updated legacy interfaces while maintaining strict usability requirements.

### Data Visualization
Designed dashboards for test result analysis.

### Documentation
Created user documentation and training materials.

Working on defense software taught me the importance of reliability and user safety in interface design.`,
  },
  {
    id: "netlify",
    title: "Netlify",
    excerpt:
      "I helped the fine folks at Netlify with the beta launch of their React-based static site CMS by designing and building the first small-business website template for the CMS. It's built in Hugo and completely open-source.",
    content: `For Netlify CMS's beta launch, I created one of the first official templates to showcase the platform's capabilities.

## The Template

### Small Business Focus
Designed specifically for small businesses needing a simple, professional web presence.

### Hugo Powered
Built with Hugo for blazing-fast static site generation.

### Open Source
Released under an open-source license for the community to use and modify.

### CMS Integration
Full Netlify CMS integration for easy content management.

This project showed how powerful the JAMstack approach could be for everyday websites.`,
  },
  {
    id: "sitepoint",
    title: "Sitepoint",
    excerpt:
      "I've done work as a technical editor helping Daniel Schwarz write two books for Sitepoint (distributed by O'Reilly in the US). I'm also a contributing author covering product design and design systems at Sitepoint.",
    content: `My work with Sitepoint spans technical editing and writing about design systems and product design.

## Contributions

### Technical Editing
Helped edit two books by Daniel Schwarz, ensuring technical accuracy and clarity.

### Writing
Published articles on:
- Design systems methodology
- Product design best practices
- Design-to-development workflows

### O'Reilly Distribution
Books were distributed through O'Reilly in the US market.

Writing and editing helped me articulate design thinking in ways that benefit the broader community.`,
  },
  {
    id: "improved",
    title: "Improved",
    excerpt:
      "Improved is a little website I use to explore digital product improvement ideas through writing and prototyping.",
    content: `Improved is my personal playground for exploring ideas about making digital products better.

## What It Is

### Writing
Essays and thoughts on product design, UX improvements, and interface patterns.

### Prototyping
Interactive prototypes exploring novel interaction patterns.

### Experiments
Small experiments in design and code.

It's where I think out loud about the craft of making software.`,
  },
  {
    id: "telepat",
    title: "Telepat",
    excerpt:
      "In 2016, I did some design sprints and hi-fi chatbot prototyping work for Telepat. I also helped the team with their brand identity and website.",
    content: `Telepat was building real-time backend infrastructure. I helped with various design initiatives in 2016.

## Projects

### Design Sprints
Facilitated design sprints to explore product directions.

### Chatbot Prototypes
Created high-fidelity prototypes for conversational interfaces.

### Brand Identity
Contributed to brand development and visual identity.

### Website
Designed and helped build their marketing website.

This was my first deep dive into designing for conversational AI.`,
  },
  {
    id: "time-heroes",
    title: "Time Heroes",
    excerpt:
      "Time Heroes is a platform for volunteering and doing good. In 2014 I helped them with some pro-bono work by designing and developing an awareness campaign website.",
    content: `Time Heroes connects volunteers with opportunities to make a difference. I contributed pro-bono design work to support their mission.

## The Project

### Awareness Campaign
Designed and developed a campaign website to promote volunteering.

### Pro-Bono Work
Contributed my skills to help a cause I believe in.

### Impact
Helped increase visibility for volunteer opportunities in Bulgaria.

Some of the most rewarding work is work that helps others.`,
  },
];

// Blog posts
export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: "hamburger-menu",
    title: "A Reasonable Hamburger Menu Replacement with Flexbox",
    date: "March 25, 2016",
    excerpt:
      "An exploration of alternative navigation patterns using modern CSS flexbox techniques.",
    content: `The hamburger menu has become ubiquitous in mobile design, but it's not always the best solution. Let's explore alternatives using flexbox.

## The Problem

Hamburger menus hide navigation, increasing cognitive load and reducing discoverability. Users often don't know what's available until they tap the icon.

## A Flexbox Solution

Using flexbox, we can create adaptive navigation that shows as many items as possible while gracefully handling overflow.

\`\`\`css
.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.nav-item {
  flex: 0 0 auto;
}
\`\`\`

## Benefits

1. More items visible by default
2. Natural priority ordering
3. Better for accessibility
4. Progressive enhancement friendly

Sometimes the best solution is the simplest one.`,
  },
  {
    id: "ios-10-control-center",
    title: "iOS 10 Control Center",
    date: "August 27, 2016",
    excerpt:
      "A detailed analysis of the redesigned Control Center in iOS 10 and its UX implications.",
    content: `iOS 10 brought significant changes to Control Center. Let's examine what works and what doesn't.

## What Changed

The new Control Center splits into multiple pages:
- Main controls
- Music
- HomeKit

## The Good

- More room for controls
- Dedicated music playback screen
- 3D Touch integration

## The Concerns

- Pagination adds friction
- Discoverability reduced
- Learning curve for existing users

## Conclusion

While the new design accommodates more features, it trades simplicity for capability. The best interfaces often do less, better.`,
  },
  {
    id: "design-tool-wishlist",
    title: "Design Tool Wishlist",
    date: "December 13, 2016",
    excerpt: "Features I wish modern design tools would implement.",
    content: `After years of using design tools professionally, here's my wishlist for features that would dramatically improve my workflow.

## 1. True Responsive Design

Not just artboard resizing, but actual responsive behavior like CSS media queries.

## 2. Real Data Integration

Connect to APIs and databases, not just placeholder text.

## 3. Version Control

Git-like branching and merging for design files.

## 4. Component States

First-class support for hover, active, disabled, and loading states.

## 5. Design Tokens

Native support for design tokens that export to code.

## 6. Collaborative Editing

Real-time collaboration that actually works well.

## 7. Code Export That Developers Want to Use

Export that produces idiomatic code, not machine-generated mess.

The tools are getting better, but there's still a long way to go.`,
  },
  {
    id: "accessibility",
    title: "Accessibility",
    date: "February 20, 2017",
    excerpt:
      "Why accessibility matters and how to make it a natural part of your design process.",
    content: `Accessibility isn't a feature—it's a fundamental aspect of good design.

## Why It Matters

- 15% of the world's population has some form of disability
- Accessible design benefits everyone
- It's often legally required
- It's simply the right thing to do

## Getting Started

### Color Contrast
Ensure text meets WCAG AA standards (4.5:1 for normal text).

### Keyboard Navigation
Everything clickable should be keyboard accessible.

### Screen Reader Support
Use semantic HTML and ARIA labels appropriately.

### Focus States
Make focus indicators visible and clear.

## Make It Habit

Don't treat accessibility as an afterthought. Build it into your process from day one.`,
  },
  {
    id: "vitosha-100",
    title: "Vitosha 100 XCM",
    date: "June 19, 2017",
    excerpt:
      "My experience completing the Vitosha 100km mountain bike race.",
    content: `This summer, I completed the Vitosha 100—a 100km cross-country mountain bike race around Sofia's Vitosha mountain.

## The Challenge

- 100 kilometers of trails
- 3000+ meters of elevation gain
- Technical single track
- Variable weather conditions

## Preparation

Months of training including:
- Long weekend rides
- Interval training
- Strength work
- Nutrition planning

## Race Day

Starting at dawn, the race took me through forests, alpine meadows, and rocky descents. The final climb to the finish nearly broke me.

## Lessons Learned

1. Pace yourself early
2. Nutrition is crucial
3. Mental strength matters as much as physical
4. Embrace the suffering

The finish line feeling made every difficult moment worth it.`,
  },
  {
    id: "android-wear-2",
    title: "Android Wear 2 First Impressions",
    date: "July 10, 2017",
    excerpt:
      "Initial thoughts on Google's updated wearable operating system.",
    content: `I've been using Android Wear 2 for a few weeks. Here are my first impressions.

## What's New

- Standalone apps
- New complications system
- On-watch Play Store
- Improved fitness tracking

## The Good

The complications system is genuinely useful, bringing watch face customization to a new level.

## The Not So Good

- Still laggy on most hardware
- Battery life remains poor
- App ecosystem is thin

## Verdict

Android Wear 2 is a step forward, but the platform still struggles to justify its existence beyond fitness tracking.`,
  },
  {
    id: "hci-videos",
    title: "My Favorite HCI Videos",
    date: "July 31, 2017",
    excerpt:
      "A curated collection of videos about human-computer interaction that have influenced my thinking.",
    content: `Human-computer interaction research has profoundly influenced how I think about design. Here are some videos I return to regularly.

## Bret Victor - Inventing on Principle

Perhaps the most influential talk in recent design history. Victor argues that creators need guiding principles.

## Alan Kay - Doing with Images Makes Symbols

The intellectual history of the graphical user interface, from someone who helped invent it.

## Doug Engelbart - The Mother of All Demos

The 1968 demo that introduced the mouse, hypertext, and collaborative computing.

## Bill Moggridge - Designing Interactions

IDEO's co-founder discusses the evolution of interaction design.

## Mark Weiser - The Computer for the 21st Century

Ubiquitous computing visionary on calm technology.

These videos remind me why this field matters.`,
  },
  {
    id: "death",
    title: "Death",
    date: "August 18, 2017",
    excerpt: "Reflections on mortality and what it means for how we live.",
    content: `This year I lost someone close to me. It's forced me to think about death in ways I'd previously avoided.

## The Unavoidable Truth

We all know we're going to die, but we rarely let that knowledge penetrate our daily existence. We live as if we have forever.

## What It Changes

Confronting mortality shifts priorities:
- Time becomes precious
- Relationships matter more
- Petty concerns fade
- Creating becomes urgent

## Living With Death

The Stoics practiced memento mori—remembering death—not to be morbid, but to live more fully.

## Moving Forward

I'm trying to carry this awareness without being paralyzed by it. To let the knowledge of death make life richer, not darker.

We get one shot at this.`,
  },
];
