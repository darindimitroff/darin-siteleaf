---
title: Telepat
layout: work
color: "#528bff"
---

**Work**:  product design, user flows, prototyping, visual design, front-end, animation, chatbot design<br>
**Team**: The Crazy Ones<br>
**Tools & tech**: HTML, SCSS, JS, Sketch, Framer, SVG, JS, GSAP, Jade/Pug, GitLab, Cactus, AWS

In the summer of 2016, my partner and I did some prototyping work for an app for rating things called Telepat (not to be confused with <a href="https://telepat.io/" target="_blank">Telepat</a>). We also helped the team with their brand identity and website.

<video width="100%" height="auto" controls="controls" class="vertical">
    <source src="/images/work/telepat/telepat1.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

<video width="100%" height="auto" controls="controls" class="vertical">
    <source src="/images/work/telepat/telepat2.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>

As usual with this type of blue-skies projects, we started with a design sprint based on Google Ventures’ model to narrow our focus and collect the whole team’s thoughts and ideas in one place. After two more weeks, we decided to use a conversational interface mixed with some traditional patterns, so we moved into character design, aiming for an abstract, spirit-like feeling similar to the way Siri and Cortana are represented.

![](/images/work/telepat/telepat5.jpg){: .vertical }

![](/images/work/telepat/telepat3.jpg)

Apart from UX and some light design systems work, I was mostly focused on building a high-fidelity prototype of how the chatbot should look and feel. I’m not a visual designer, but I do enjoy taking a break from systems-related work from time to time. Using GSAP, SVG and good old Cactus (still using it from time to time), I built hi-fi prototypes of the homepage, voting and profile pages, as well as a pattern library that served as an impromptu design system for the dev team. I ended up building a small API for the prototype, allowing everyone on the team to simulate different experiences using simple calls accessible through the browser’s console.

The “face” of the chatbot is also API-controllable. I built a morphing SVG template that allows developers to plug in any monochrome SVG (including text-only SVG for short messages) both client and server-side. Any changes made to the face’s content are morphed smoothly, regardless of the total amount of nodes.

As I mentioned, I also took part in designing and developing the marketing website for the company behind Telepat.

![](/images/work/telepat/telepat4.jpg)

Check out the live prototypes:
- <a href="http://telepatdemo.s3-website-us-east-1.amazonaws.com/" target="_blank">Homepage</a>
- <a href="http://telepatdemo.s3-website-us-east-1.amazonaws.com/vote.html" target="_blank">Voting interaction</a>
- <a href="http://telepatdemo.s3-website-us-east-1.amazonaws.com/profile.html" target="_blank">Profile view</a>
