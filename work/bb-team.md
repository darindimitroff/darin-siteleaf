---
title: BB-Team
layout: work
color: "#8bc541"
---

**Work**: product design, user flows, visual design, design systems, front-end<br>
**Team**: spacefarm + BB-Team<br>
**Tools & tech**: HTML, SCSS, JS, Sketch, Gulp, SVG, Handlebars, Fabricator, GitHub, Netlify, AWS

BB-Team is the leading health and fitness portal in Bulgaria. It’s been around since 1999, starting off as a message board and slowly turning into a multi-purpose product that now features a publication, online store, wiki-style knowledge base and fitness+food tracking capabilities.

![](/images/work/bb-team/bb11.png){: .big-image}

Apart from establishing a design system, we worked on an update adding the option to connect with a health, fitness and nutrition expert in real-life and even subscribe for a training plan. I’ve been a an active user of the product for a few years, so I was really excited to have an opportunity to work with the team behind it.

![](/images/work/bb-team/bb10.png)

Over a bunch of sprints and a few longer feedback cycles, we built a production-ready responsive atomic front-end design system featuring hundreds of components, interactions, helper classes and functions, documentation and full-blown examples for some key pages and user flows. I lead the design system/front-end aspect of the project, while my partner Kalina worked on establishing a visual system around branding and illustration.

<video width="100%" height="auto" controls="controls">
    <source src="/images/work/bb-team/bb2.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

Shipping code within a PHP-heavy organization was initially challenging as I’m much more experienced with JavaScript (specifically Node and React) codebases. I ended up re-creating some of React’s key logic using a combination of Handlebars and SCSS.

![](/images/work/bb-team/bb9.png){: .big-image}

By using many modules with open variables (simulation of passing styles as props in styled-components) and atomic classes similar to Tachyons, we managed to build a pretty flexible system with as much “composition over inheritance” as we managed to pull off without over-complicating what Handlebars can already do.

<video width="100%" height="auto" controls="controls">
    <source src="/images/work/bb-team/bb3.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

<video width="100%" height="auto" controls="controls">
    <source src="/images/work/bb-team/bb8.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

We kept working on the product after we launched the first public release of the update and we’re still actively working together. After the top priorities were tackled, we shipped a few smaller additions like a global night mode, a training and nutrition tracking calendar view, additional components and improved keyboard navigation styling.

<video width="100%" height="auto" controls="controls">
    <source src="/images/work/bb-team/bb6.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

PS: I normally translate showcases of local work into English, but I’ve been trying to keep them authentic during the last year. I should probably write a blog post on building UI with Cyrillic symbols. It can be quite challenging.

