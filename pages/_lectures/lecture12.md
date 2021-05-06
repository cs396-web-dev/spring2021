---
layout: module
title: User Authentication using JSON Web Tokens
type: lecture
draft: 0
show_schedule: 1
num: 12
due_date: 2021-05-05
videos: 
   - url: https://northwestern.zoom.us/rec/share/KohzlVjKpZfIyUBD_XjBZsziuVlSxIZ26y50gEqp_5WGHj9eTMS4dqske9cIKY0._PuuoE1ddV5GSFtW
     title: Recorded Lecture Video
     live: 1
     duration: "51:38"
slides:
   - url: https://docs.google.com/presentation/d/1bu8BZ5DQ6SyS-y8vl1h-YxsppislNvuCMWLVvS4QHHA/edit?usp=sharing
     title: Intro to JSON Web Tokens
readings:
   - title: "What Is JWT and Why Should You Use JWT"
     url: https://www.youtube.com/watch?v=7Q17ubqLfaM
     source: "Web Dev Simplified"
     author: Cook, Kyle
   - title: JWT Authentication Tutorial - Node.js
     url: https://www.youtube.com/watch?v=mbsmsi7l3r4
     source: "Web Dev Simplified"
     author: Cook, Kyle
     notes: "This is a nice Node.js code walkthrough of the key ideas of JWTs." 
   - title: Introduction to JSON Web Tokens
     url: https://jwt.io/introduction
     notes: This is a reference doc for learning more about the technical specification.

---

Today we're going to learn how to ensure that only authorized users are able to access your web resources. There are a couple of different steps associate wit this process:

1. Creating a way to register and store usernames and passwords. 
   * This will follow a very similar process to how we've been storing and retrieving doctors and companions.
2. Creating a method of figuring out whether a user requesting a resource is authenticated by your system. 
   * This will involve using JWTs (JavaScript Web Tokens) that require that a client embed a web token -- issued by the server -- in its request header. 
3. Creating a way to revoke access (by making it so the token times out).

<img class="medium frame" src="/spring2021/assets/images/lectures/jwt-diagram.png" />

The assigned videos are very instructive, and I highly recommend them (don't skip these readings -- they're important).
