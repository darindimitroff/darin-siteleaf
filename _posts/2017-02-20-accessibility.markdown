---
title: Thoughts on accessibility
date: 2017-02-20 22:04:00 +02:00
tags:
- accessibility
- design
- development
- web
- product
- front-end
---

I listened to the [latest episode of Twenty Thousand Heartz](http://pca.st/episode/5ce6d650-cf86-0134-ebcf-4114446340cb) earlier today. Like most things related to accesibility, it affected me in a way that might not be uncommon among product people.

<!--More-->

I've shipped delibverables that didn't have stellar accessibility. Earlier in my work, I've designed websites with tiny fonts and extremely poor contrast ratings. Even more so, I've shipped front-end code that hinders accessibility, sometimes severely. Going through old work, it seems like I've done most of the bad stuff: unfocusable "buttons", modals without tab-indexes, all sorts of falacies with the DOM using jQuery, you name it.

Nowadays this is quite different as we've built a great internal library of accessible and easily customizable code snippets. I'm currently adapting it for React too. Even though things have been better, they still aren't perfect, especially in projects with unrealistically tight deadlines. It sounds bad, but most of us have been at a place where we have to pick between superb accessibility or not having a bunch of features at all. It's not that accessible front-end is harder or slower, it's that it requires better planning and understanding of what you are building at the grand level.

I don't thing the main enemy of accessibility are JavaScript frameworks. All they do is output HTML, so almost anything a static site can do in terms of accessibility can be done. The main enemy of accessibility is organisations that don't give a damn.

Living in THE EU, sometimes (read always) I wish there was some sort of software accessibility regulator. We have that for public spaces and buildings, you can't just build something if it's not physycally accessible, so accessibility is guaranteed to everyone. Of course, we can't have that on the web or practically anywhere in the cyber world, but we can try to be more aware. In recent projects, I've pushed clients into caring more about accesibility, sometimes quite honestly, while other times in more deceptive ways like:
- proper alt tags are great for SEO (they are, afaik)
- {{any technology}} is great for SEO
- proper use of H tags in your CMS makes your articles work better in Instapaper and Pockst (also true)

I keep having anxiety about past projects and some aspects of current projects too. Sometimes I want to take a month off and just go through all my past work and fix all the accesibility problems. I feel guilty for having spent hours in fine jewelry like SVG animations, easing and transitions while accesibility was suffering.