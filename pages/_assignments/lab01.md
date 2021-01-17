---
layout: assignment-two-column
title: JavaScript
type: lab
abbreviation: Lab 1
draft: 0
num: 1
due_date: 2021-04-02
---

## Part 1: Install Node.js

{:.callout}
> Note: If you have any issues installing Node.js, contact your assigned peer mentor. You are also welcome to attend any of the course office hours to get help.

Traditionally, JavaScript code is run in the browser in order to interact with and manipulate DOM elements. In this class, we will also be writing JavaScript APIs, which run as standalone services outside the browser. To do this, we will use Node.js, a runtime environment which enables JavaScript to be run outside the browser.

Download the latest version of Node here: [https://nodejs.org/en/](https://nodejs.org/en/)

To check that Node installed correctly, type `npm --version` into a new terminal window.

```bash
$ npm --version
7.4.0
```

## Part 2: Install Visual Studio Code

Visual Studio Code (VSCode) is a modern text editor with extensive support for debugging, git, and custom extensions. We strongly recommend using it for web development in this course, as we'll be giving tutorials with the editor and recommending extensions that align with the class material.

Download the latest version of VSCode here: [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download).

<a class="nu-button" href="/spring2021/course-files/assignments/lab01.zip">lab01.zip<i class="fas fa-download" aria-hidden="true"></i></a>

Next, download the `lab01.zip` file and unzip it. Open VSCode and open the downloaded folder with `File -> Open Folder`.

Select `Terminal -> New Terminal` to open a new terminal window at the bottom of the screen. Type `node index.js` into the window to run the program.

```bash
$ node index.js
Hello, World!
```

## Part 3: JavaScript Practice

### 1. List Printing

Edit the function `listPrint` to print each element of a list to the console. Try using both a `for...of` and a `for...in` loop to produce the same output.

```javascript
$ listPrint(["line1", "line2", "line3"]);
line1
line2
line3
```

### 2. Fibonacci Sequence

The Fibonacci sequence is a famous mathematical sequence that starts `0, 1` and continues with each elements equalling the sum of the previous two elements. Edit the function `fibonacci` to print a list of the first `n` elements of the Fibonacci sequence.

```javascript
$ fibonacci(12);
[
   0,  1,  1,  2,  3,
   5,  8, 13, 21, 34,
  55, 89
]
```

## Part 4: Functional JavaScript

JavaScript is sometimes described as a _pseudo-functional_ language. This is because functions are considered first-class objects that can be passed around, modified, and used like other variables.

A __callback__ is a function that is passed into another function as an argument, which is then invoked or modified inside the outer function. 

An example of a function that takes a callback as an argument is the global method `setTimeout`, which waits a specified amount of time before invoking it. For example, `setTimeout(f, 1000)` will wait 1000ms (or 1 second) and then call `f`.

{:.callout}
> Note: After calling `setTimeout`, program execution continues while the function waits to be called in the background. The code placed on the line after the `setTimeout` call will likely run _before_ the function inside the call!
> ```javascript
> $ setTimeout(() => console.log("First"), 1000);
> $ console.log("Second");
> Second
> First
> ```
> If you're interested in learning why this happens (or have a general interest in operating systems), feel free to check out this great reading about the [Node.js Event Loop](https://nodejs.dev/learn/the-nodejs-event-loop)!

JavaScript has several examples of callback-based functions that operate on lists, such as `forEach`, `map`, `filter`, and `reduce`. In these exercises, you'll write your own implementations!

Complete the following exercises by editing the `index.js` file using VSCode.

### 1. foreach

Edit the function `foreach` to call the function `f` on each element of the list `arr`.

```javascript
$ foreach(["h", "e", "l", "l", "o"], c => console.log(c));
h
e
l
l
o
```

### 2. map

Edit the function `map` to apply the function `f` to each element of the list `arr` and return the new list.

```javascript
$ console.log(map([1, 2, 3, 4, 5], n => n + 2));
[ 3, 4, 5, 6, 7 ]
```

### 3. filter

Edit the function `filter` to return the elements of `arr` that return `true` when passed to `f`.

```javascript
$ console.log(filter([1, 2, 3, 4, 5], n => n < 3));
[ 1, 2 ]
```

### 4. reduce

Edit the function `reduce` to combine elements of `arr` pairwise (using the function `f`) until the list has been reduced to a single element. If the list is empty, return `null`. Assume that all elements of `arr` are numeric.

```javascript
$ console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b));
15
```

## What to Turn In

Please turn in a `lab01.zip` file containing the completed version of `index.js` (and `functional.js`, if done). Make sure to upload the .zip to Canvas by Wednesday night at midnight. Please be careful that you __don't just upload the original starter files__, but that your zip file includes __YOUR CODE__.
