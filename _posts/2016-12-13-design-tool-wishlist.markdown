---
title: Interface design tool wishlist
date: 2016-12-13 21:24:00 +02:00
tags:
- product
- design systems
- tools
---

This is a living document where I maintain a wishlist of things I’d like to have in a future product design tool.

<!--More-->

## 📐 Auto layout
It’s amazing that word processing software is better at some portions of layout than design software. For starters: it supports inline content behavior. This allows new bits to appear after older bits in our document without us positioning each one manually. I’m extremely frustrated with the fact that everything in Sketch and Figma is absolutely positioned and I’m not alone: I’m sure everyone who’s designed in the browser would agree.

It doesn’t make sense to have every new block be generated at a random place and even at a random size. How much time are we wasting moving components and smaller primitives from a random place on the canvas to their logical position? iOS, Android and the web use different, yet similar auto layout models. Design software should follow.

My ideal layout model includes something like Flexbox. Being able to apply massive layout changes just by targeting the parent, agnostic of children, is extremely powerful.

## ↔️ Responsive canvas
In a broader sense auto-layout already covers that. Designers should be able to stretch artboards to any size they want and content should reflow in a responsive manner. Most projects we work on today are based around multi-screen experiences and fluid UI, so it doesn’t make sense to keep working in three or four breakpoint-specific snapshots of our work.

## 📦 Box model
Space between objects is one of the most primitive things about design apps. It’s not owned by any component, doesn’t move with anything and makes designing and maintaining a larger design system based around margins and padding a pain. Real world scenario: when working on front-end design systems, components include certain margin-bottom, max-width and padding classes.

“Borderless” UI is extremely popular nowadays. It’s not too great for usability, but the absence of a concept around padding in Sketch results in billions of links and buttons with tiny touch areas. This is the result of front-end developers blindly copying from their designers’ files. You don’t see a border, so why would you need vertical and horizontal padding? Well, turns out you do, even if it remains invisible.

## 💾 Data features
Data is not a central concept in any design app. Although working with real data has improved massively over the last few years, no app has a data view. It could be primitive at first, working more or less like a JSON file you feed into the UI coupled with a simple GUI and integrated into Sketch or Figma. Just like you have Symbols for styled primitives and larger components, you might have Data for objects, strings, numbers and booleans you feed into your design.

What’s even more interesting is using a design app in a data-first manner. Imagine starting your new Sketch project by building the information architecture directly in the app and then using it to build components, layouts and templates. The same data view could be used to import data from API’s too.

## 🗺 Integrated flows
Importing hundreds of artboards into a lo-fi prototyping tools like InVision or Marvel is not a great experience. And don’t get me started on hotzones: a simple insertion of a new piece of content might break the whole page’s navigation. I’m actually trying to communicate user flows in static documents or simple multi-page static websites. Here’s a great Sketch plugin that integrates a similar concept. Each user flow node should be attached to a component. This way a copy of a button that calls a modal should call the same modal.

## ⌨️ Type scale
This one is much simpler than the rest. Designers should be able to pick a combination of root font size and type scale factor. This automatically generates a complete collection of all font-sizes we will be using throughout the project. Manipulating the type scale parameters reflows the whole document dynamically, just like adjusting the font-size on the root element of the DOM.

_Originally published on Medium_