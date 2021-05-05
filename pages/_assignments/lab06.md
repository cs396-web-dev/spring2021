---
layout: assignment-two-column
title: Cookies
type: lab
abbreviation: Lab 6
draft: 0
num: 6
points: 5
description: |
    Practice with cookies and session storage
due_date: 2021-05-07
---

## Background
Things to cover here:

1. Server-side templates. For interfaces that aren't super dynamic. Usually login / logout / registration screens.
2. Hashing passwords.
3. JWT workflow.
4. Middleware.

### Helpers
In Visual Studio Code, install "REST Client"

...and the make a request...

```bash
GET http://localhost:8081/tasks
```

## Prep
1. Create a bunch of users in the DB with hashed passwords.
2. TODO list by user

## Exercise 1: Login
The user tries to log into the system using one of the usernames provided. A POST request is issued to the `/login` endpoint.
* Query DB for user
* Check to see if the user is indeed in the system and their stored hashed password is equal to the hashed password they just posted.

### Success Case
If the user has sent valid credentials:
1. Server sends a JWT 
2. Client stores the JWT as a cookie.

### Failure Case
If user sends bad credentials, the server should send a failure code.


## Exercise 2: Data Protection Using Middleware
Build some middleware that checks if the server is logged in.

### Success Case
If a JWT is supplied during the `GET` request, show just their TODOs. Do this by:
* Decrypting the Bearer token, figures out what user they are, and gives them their data.
* Figuring out who they are
* Giving them their data

### Failure Case
Client tries to access some data and doesn't sent the JWT.
    * denied
2. Client tries to access some data with the JWT (pulling it from cookies)
    * Server decrypts Bearer token, figures out what user they are, and gives them their data.

## Exercise 3
Refresh token. Make the JWT expire, then use the refresh token to send the user a new JWT.