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

Things to cover here:

## Prep
1. Create a bunch of users in the DB with hashed passwords.
2. Create a bunch of favorited doctors and companions

## Exercise 1 
### Failure Case
1. User enters bad credentials.
2. Server sends a failure code.

### Success Case
1. User Logs in as one of the usernames (pretend they've already registered).
2. Server sends a JWT 
3. Client stores the JWT as a cookie.

## Exercise 2
1. Client tries to access some data and doesn't sent the JWT.
    * denied
2. Client tries to access some data with the JWT (pulling it from cookies)
    * Server decrypts Bearer token, figures out what user they are, and gives them their data.

## Exercise 3
Refresh token. Make the JWT expire, then use the refresh token to send the user a new JWT.