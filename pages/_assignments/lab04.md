---
layout: assignment-two-column
title: Working with fetch API & the DOM
type: lab
abbreviation: Lab 4
draft: 1
num: 4
points: 5
due_date: 2021-04-23
---

<a href="/spring2021/course-files/labs/lab04.zip" class="nu-button">Download Tutorial Files <i class="fas fa-download"></i></a> 

In tutorial this week, we're going to practice using `for...of` loops and templates to create "data-driven" interfaces that are responsive to the user. Part 1 is recommended. Part 2 is optional (if you're interested in basic JavaScript animations), but kind of fun.

## Part 1: Required for Tutorial

### 01-list-of-strings
Using a for/of loop, print a greeting for each person in the names list.
<br><a href="/spring2021/course-files/labs/lab04/01-list-of-strings" target="_blank">starter</a>

### 02-photo-gallery
Use a for / of loop to generate a card for each photo in the list. You will also have to use a template variable.
<br><a href="/spring2021/course-files/labs/lab04/02-photo-gallery" target="_blank">starter</a>

### 03-list-of-objects-and-a-template
Using a for/of loop, render a card for each person in the list that displays their avatar, name, and score.
<br><a href="/spring2021/course-files/labs/lab04/03-list-of-objects-and-a-template" target="_blank">starter</a>

### 04-gallery-ajax
Study the index.js file and the way it "fetches" data from a remote server. Add comments to the file so that you understand what's happening.
<br><a href="/spring2021/course-files/labs/lab04/04-gallery-ajax" target="_blank">starter</a>

### 05-gallery-many-threads
Update the loadCars() and loadBikes() functions so that they loads photos from the cars and bikes data files (respectively).
<br><a href="/spring2021/course-files/labs/lab04/05-gallery-many-threads" target="_blank">starter</a>

## [Optional] Part 2: Indeterminate Loops
Indeterminate Loops are loops that can repeat any number of times (not constrained by the length of a list or collection). Please try and complete the following exercises (working from the starter files):

### 01-identical-icons
Using a while loop, print the message provided in `js/index.js` 100 times.
<br><a href="/spring2021/course-files/labs/lab04/optional/01-identical-icons" target="_blank">starter</a>

### 02-icon-variety
Using a **for...of loop**, iterate through the classNames list and output an icon that corresponds to each font awesome class. Note that these icons are drawing from the <a href="https://fontawesome.com/icons?d=gallery&m=free" target="_blank">FontAwesome icons</a>. Feel free to switch them out.
<br><a href="/spring2021/course-files/labs/lab04/optional/02-icon-variety" target="_blank">starter</a>

### 03-bubbles
Using a **while loop**, render 200 bubbles. Note: this code uses a third-party library called <a href="http://paperjs.org/" target="_blank">Paper.js</a>, which makes it easier to use the html5 `<canvas>` tag.
<br><a href="/spring2021/course-files/labs/lab04/optional/03-bubbles" target="_blank">starter</a>

### 04-different-color-bubbles
Using **any kind of loop**, render 200 bubbles, but make the bubbles different colors by selecting a random color from the colors array. Your solution should render bubbles with all 5 colors. Hint, you’ll need to figure out how to change the colors array index as you loop.
<br><a href="/spring2021/course-files/labs/lab04/optional/04-different-color-bubbles" target="_blank">starter</a>

### 05-fish-left-right
Modify the code inside the onFrame event handler (lines 70-76) so that all of the fish move — not just the first 3. One thing to note here is that you can use canvas to add some whimsical effects w/o animation being the main event. 
<br><a href="/spring2021/course-files/labs/lab04/optional/05-fish-left-right" target="_blank">starter</a>

If you want, you’re welcome to change the fish images, or to modify the number of fish that get created.

### 06-animated-bubbles
Similar code to the above. Please complete the following:
1. Modify the  createBubbles function so that it actually creates numBubbles bubbles (currently set to 100 bubbles).
2. Make all the bubbles move by modifying the code inside the onFrame event handler (lines 56-60) 

<a href="/spring2021/course-files/labs/lab04/optional/06-animated-bubbles" target="_blank">starter</a>

## Turn in your files via GitHub
1. Ensure that your `tutorial06` folder is inside of your repo folder.
2. Check the status of your repo:<br>`$ git status`<br>It should say that your tutorial06 files are “untracked”
3. Add all of your tutorial06 files to the list of files that are tracked by the repo:<br>`$ git add tutorial06`
4. Check the status of your repo again:<br>`$ git status`<br>It should now say that you tutorial06 files are being tracked.
5. Now, commit your new tutorial06 files to the repo:<br>`$ git commit -m "Adding my tutorial06 to the repo"`
6. Finally, “push” your files to GitHub:<br>`$ git push`
7. Paste a link to your GitHub repo and to your GitHub pages 
