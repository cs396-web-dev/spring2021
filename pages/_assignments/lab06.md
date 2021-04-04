---
layout: assignment-two-column
title: Cookies
type: lab
abbreviation: Lab 6
draft: 1
num: 6
points: 5
description: |
    Practice with cookies and session storage
due_date: 2021-05-07
---

Today, we will be using cookies to implement a non-copyrighted cookie creation game that, if anyone asks, has absolutely no resemblance in form or function to the popular browser game Cookie Clicker.

<img class="large frame" src="/spring2021/assets/images/lab06/img01.png" />

Our game will use absolutely no server-side or database storage. Instead, we will make use of cookies to store information about the game state that will persist between user sessions. Cookies are stored in the user's browser and hold string data received from external HTTP requests. These cookies are then sent in the header of every HTTP request made from the client. For example, if I make a request to purchase a robot, the server can look at the cookie information about the number of robots I own in the header and update that value, which in turn will update the value on the client side.

Generally, cookies are used for user authentication, session persistence, or client-side tracking (i.e. for tasks that aren't very write-heavy). In this lab, we're going to be using them instead for tracking game state (as well as the session persistence that comes along with them).

## Your Task

Download the assignment folder, run `npm install` to install dependencies, and run `npm start` to start the server. Instead of opening the HTML file directly in your browser, go to `localhost:8081`. In this application, the server running on localhost sends the client an HTML file to render in the browser. The reason we do this is because modern browsers do not allow cookies to be set via HTTP requests that are placed to a server running on a different domain than the client (this is part of a mechanism called [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)). If the server sends us an HTML file to render, then both are being served via localhost and we do not encounter this problem. For large-scale websites, this problem is often solved via a [proxy server](https://www.pcmag.com/encyclopedia/term/proxy-server), which you can learn more about in COMP_SCI 340.

You will be writing client and server-side code for this assignment. The client will send requests to the server whenever a button is pressed, the server will respond to requests by setting and updating cookies, and the client will use those cookies to update the UI.

### Server

// TODO

You will implement three routes:

- `PUT /cookie/:n`
- `PUT /robot`
- `PUT /factory`

### Client

// TODO

- updating UI counters
- starting timers for robots and factories

## Bonus: Handling Race Conditions

As was mentioned earlier, we don't usually use cookies for write-heavy operations like storing game state. One problem this can cause is _race conditions_, in which the delay in HTTP request completion causes overlapping requests to tell the server different and conflicting information. In the example below, a request to increase the cookie count by 1 occurs before the client receives the response for a request increasing the count by 10. In both cases, the initial count is 1, since the 10 request doesn't complete before the 1 request starts; since the 1 request is received second, the number of cookies is set (incorrectly) to 2 instead of 12.

<img class="large frame" src="/spring2021/assets/images/lab06/img02.png" />

There are many ways that applications handle race conditions. One simple way for our purposes is eliminate the use of HTTP requests from storing game state except to persist data through sessions. Rewrite the website and server code such that:

- Game buttons and timers update local client-side variables instead of making HTTP requests
- When the window is closed, send a single HTTP request to a route that sets all the cookies at once to the values they currently hold on the client

Only complete this task if you have extra time; this will involve removing the three main routes from the server, writing a single new one that sets the three cookies, and rewriting parts of the front end to use local variables. After you're done, there should be far less code _and_ the app will avoid race conditions.

## What to Turn In

When you're done, zip the completed folder and submit it to Canvas.
