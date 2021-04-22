---
layout: assignment-two-column
title: Event Handlers and the DOM
type: lab
abbreviation: Lab 4
draft: 0
num: 4
points: 5
due_date: 2021-04-23
---

<a href="/spring2021/course-files/labs/lab04.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a> 

In this week's lab, you will be manipulating the DOM using various event handlers. Before you begin, some notes:
* The CSS has been written for you. We will be delving into CSS in more detail next week, but for now, just take it as a given and ignore it (though you're welcome to play around with it).
* The photos in the photo carousel have been dynamically rendered from data using a template. Please take a look at the current `index.js` and note how the HTML of each "card" is rendered. Note also that the image is created using a div tag with an image background.

After inspecting the starter code, please complete the following tasks:

## Step 1: Thumbnail Click Event Handler

Create and attach an event handler (function) to each thumbnail in the bottom panel (each div element with the class of `.image`). When the thumbnail is clicked, the corresponding image should load into the div with the class "featured-image". 
  * If you need a hint to get started, take a look at `hints/index-hint-1.js`
  * Note also that you can only attach event handlers **after** they have been rendered in the DOM. In other words, you can't attach the event handlers until `initScreen()` has been invoked. Order matters.

## Step 2. Next and Previous Click Event Handler

When you're done with Step 1, implement the "next" and "previous" click event handlers:
* When the right arrow is clicked, the next image in the thumbnail list should be displayed as the `.featured-image`. When the last thumbnail is reached, it should cycle to the first (see video below).
* When the left arrow is clicked, the previous image in the thumbnail list should be displayed as the `.featured-image`. When the first thumbnail is reached, it should cycle to the last (see video below).

### Some tips
Consider using a global variable to track the indx position of the image that is currently being displayed. You can detect this by accessing the `data-index` attribute of the `.image`. See `hints/index-hint-2.js` if you want a hint.

## Step 3. Featured Image Click Event Handler
When the `.featured-image` is clicked, invoke the same function that is invoked when `.next` is clicked.

## Demo
<img src="/spring2021/assets/images/labs/lab04-gallery.gif" />

## What to turn in
Please zip your entire lab04 folder and submit to Canvas.


