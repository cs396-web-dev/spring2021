---
layout: assignment-two-column
title: Configure Your Software Stack
type: lab
abbreviation: Lab 1
draft: 0
num: 1
due_date: 2021-04-02
---

{:.callout}
> ## Background Readings
> These are for your reference, if you want to read more about the technologies we're using.
> * <a href="https://www.w3schools.com/js/js_mistakes.asp">JavaScript Tutorial</a>
>      * JavaScript is a multi-paradigm, weakly-typed programming language that borrows a lot of its syntax from other languages you may have used in the past. It may be useful to skim this resource to get a feel for how JavaScript handles some common semantics.
>      * You may find the tutorials in the _JS Objects_, _JS Functions_, and _JS Async_ useful. Ignore the "JS Events" and everything in the _JS HTML DOM_ section for now.
> * <a href="https://expressjs.com/en/starter/hello-world.html">Express.js Hello World</a>
> * <a href="https://guides.github.com/activities/hello-world/">GitHub Tutorial</a> and <a href="https://www.git-tower.com/blog/git-cheat-sheet/" target="_blank">Git Cheat Sheet</a>
> * Deploying to Heroku: <a href="https://scotch.io/tutorials/how-to-deploy-a-node-js-app-to-heroku" target="_blank">Step-by-Step Guide</a>.

The goal of today's lab is to set up all of the necessary technologies you'll need to complete Homework 1. If one of the steps isn't working, let your Peer Mentor know so we can make sure you're able to progress.

## Part 1: Install Node.js

{:.callout}
> Note: If you have any issues installing Node.js, contact your assigned peer mentor. You are also welcome to attend any of the course office hours to get help.

Traditionally, JavaScript code runs in the browser in order to interact with and manipulate web pages. In this class, we will also be writing API servers, which run as standalone services. To do this, we will use Node.js, a runtime environment which enables JavaScript to be run outside the browser.

Download the latest version of Node here: [https://nodejs.org/en/](https://nodejs.org/en/)

To check that Node installed correctly, type `npm --version` into a new terminal window. You should see the version of Node you installed print to the console:

```bash
$ npm --version
7.4.0
```

## Part 2: Install Visual Studio Code (Optional, but Strongly Recommended)

Visual Studio Code (VSCode) is a modern text editor with extensive support for debugging, git, and custom extensions. We strongly recommend using it for web development in this course, as we'll be giving tutorials with the editor and recommending extensions that align with the class material.

Download the latest version of VSCode here: [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download).

## Part 3: Set Up Git and GitHub

We will be using git to manage versions of your code and to interact with GitHub (and later Heroku).

### Install / Register
If you haven't already:
1. Install git on your computer: <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git" target="_blank">https://git-scm.com/book/en/v2/Getting-Started-Installing-Git</a>
2. Register for GitHub: <a href="https://github.com/join" target="_blank">https://github.com/join</a>

### Configure Your GitHub Repository

Many of you already have a process for doing this, so feel free to do your own thing here. That said, if you're relatively new to this, here are some instructions:

In your web browser, navigate to GitHub and create a new repository (see tutorial above if you don't know how). Please make sure that you mark your repo "public." When you're done, download `cs396_api.zip` and unzip it. Open your command line (on your local computer) and navigate to your `cs396_api` directory.

<a class="nu-button" href="/spring2021/course-files/assignments/cs396_api.zip">cs396_api.zip<i class="fas fa-download" aria-hidden="true"></i></a>

Then,
1. Initialize a brand new git repo: `git init`
2. Connect your local repo to your GitHub repo: `git remote add origin <address-of-repo-on-github>`
3. Add all of your files to your local repo: `git add .`
4. Type `git status`, which will show you all of the files that your git repo is currently tracking.
5. Commit all of them: `git commit -am 'My first commit'`. Committing them is like "saving" them to a version (if you ever needed to later revert to a previous version of your code).
6. Push them to GitHub: `git push origin master`. "Pushing" transfers all of your committed files to your GitHub repo (on the cloud).

For code changes that you would like to save and track on GitHub, you should repeat steps 3-6 of the above process.

## Part 3: Set up Homework 1

You can download external libraries to use in Node.js projects via the [Node Package Manager](https://www.npmjs.com/), or npm for short. Before we can start installing packages, we need to set up our project to use npm. Open `cs396_api` in VSCode using `File -> Open Folder`. Select `Terminal -> New Terminal` to open a new terminal window in VSCode and type `npm install`. If this works, a `node_modules` folder should be created in the `cs396_api` directory.

You should now be able to run the program by typing `npm start` into your terminal window (if you get the message `Application listening on PORT: 8081`, it's working):

```bash
$ npm start
Application listening on PORT: 8081
Trying to connect to database...
Could not connect to database.
```

Visit [http://localhost:8081](localhost:8081) in a browser window; you should see a message that the app is running.

<img class="large frame" src="/spring2021/assets/images/lab01/img1.png"/>

## Part 4: Deploying the API

For the first few assignments in this class, we will be using Heroku, a lightweight hosting service, to deploy our applications to the cloud. Heroku is generally meant for smaller prototype applications, and as such is not acceptable for building large-scale applications (see AWS and friends for that). However, it's perfect for our use case.

### Create a Heroku App

[Sign up](https://signup.heroku.com/identity) for a Heroku account and indicate your primary development language as Node.js.

Click 'Create a new app' and give the app a name on the Heroku website. You will be brought to a dashboard where you can manage your application.

### Connect Heroku to GitHub

In the "Deploy" tab of your Heroku dashboard, switch your app's deployment method from the Heroku CLI to GitHub. Then, click the "Connect to Github" button and search for the repository you created earlier. Press the "connect" button to have Heroku track changes on the main branch of your repository.

<img class="large frame" src="/spring2021/assets/images/lab01/img2.png"/>

Now, all you have to do to deploy your app is to hit the "Deploy Branch" button with "main" selected. Now, if you open your Heroku app, you should see a message indicating that your app is running!

## What to Submit

Once you're done, submit the following to Canvas:

- A link to your _public_ GitHub repository
- A link to your Heroku app
