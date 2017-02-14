---
title: A reasonable hamburger menu replacement with Flexbox
date: 2016-03-25 21:38:00 +02:00
tags:
- flexbox
- css
- web
- layout
- interaction
- responsive
---

![](https://cdn-images-1.medium.com/max/1600/1*OgAThF0hrKCtiGs4r_UUvg@2x.jpeg)

*Originally published at
*[www.improved.design](http://www.improved.design/2016/03/25/resonable-hamburger-replacemet.html)*
on March 25, 2016.*

Hamburger menus are the prevalent way to access the majority of a site’s
navigation these days. Last year, I believe it’s become clear that the hamburger
is a subpar approach that screams desktop first. The reasoning is pretty simple:
we create large, unnecessarily complex navigations for desktops and try to fit
them on screens with far less real estate. Thus, the junk drawer is born, hiding
even the primary navigation from the user.

Looking back, I’ve used hamburger menus more than a few times and I feel bad
about it. Even the current version of [our
website](http://www.improved.design/2016/03/25/thecrazyones.agency) features one
(it’s old and bad, new site is in the works). I try not to use hamburgers
anymore as I try to think of more adaptive and contextual navigation patterns.
The problem with a lot of anti-hamburger articles these days, however, is that
they don’t suggest alternatives.

Tab bars are great for apps, but look awkward in most websites. Regardless, they
force designers to prioritize, not allowing for more than five items in the
primary nav.

### Some help from Flexbox

I’ve been using variations of this concept in production for a few months now,
but I never considered writing about it. [This codepen by
chriscoyer](http://codepen.io/chriscoyier/pen/bppOVP/) and the Twitter reactions
it generated reminded me that I should do it.

I believe usability patterns are often inspired by the capabilities of certain
technologies. While working on a complete redesign of a web product for a client
a few months ago, I spent some time playing around with the different properties
of Flexbox. This was the second project where we used Flexbox in production and
I’m still amazed by it’s capabilities.

I had a chance to revisit the information architecture of the product, so we
designed a lean primary navigation with just four main items and three secondary
items: logo (home link), profile (sing in/up) and search. Everything else fit
into one of the four main categories, eliminating clutter.

As you can see, the four main items work similarly to a tab bar, with icons and
labels. This creates room for a larger tap area on touch devices and takes less
horizontal space. Moving to the desktop, we want to make use of the available
width, so we use Flexbox to move the icons to the left. The navbar is now
vertically thinner (we don’t need to optimize for touch anymore).

![](https://cdn-images-1.medium.com/max/1600/0*mG2Ub_GMRJZfnSbj.gif)

![](https://cdn-images-1.medium.com/max/1600/0*94tX4GJpWOAMFnpW.gif)

**Sorry for the blurring. It’s a client project.**

With a few lines of code, this could be transformed into a combination of
separate bottom tab bar and top side scrolling navigation.

Diving into the early days of the web, it’s easy to see how primary navigations
got more complex with the years. I’m not advocating for 4–5 items for all
websites and apps, but I’m trying to push this concept into my recent work. The
mysterious blurred project above is one of those: it features a secondary side
scrolling nav activated on click.

Suggesting a leaner navigational structure is always the best option, but there
are a lot of cases when we can’t really do that. It might not be a part of the
project’s scope or higher management might not be able to see the appeal. That’s
way I decided to build a prototype featuring a “normal” modern day navigation.
In case you are wondering, this is [The
Verge](http://www.improved.design/2016/03/25/theverge.com)’s primary nav.

### Benefits

* it’s a mobile-first approach
* 100% based on web standards (no JS required)
* works in all modern browsers
* allows for easy mode switching using media queries

<p data-height="265" data-theme-id="0" data-slug-hash="NNrorr" data-default-tab="css,result" data-user="deezel" data-embed-version="2" data-pen-title="Flexbox Hamburger Menu Alternative" class="codepen">See the Pen <a href="http://codepen.io/deezel/pen/NNrorr/">Flexbox Hamburger Menu Alternative</a> by Darin Dimitroff (<a href="http://codepen.io/deezel">@deezel</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>