---
layout: assignment-two-column
title: Mini Chat App
type: lab
abbreviation: Lab 7
draft: 0
num: 7
description: |
    Create a basic chat app using WebSockets
due_date: 2021-05-14
---

{:.callout}
> ## Background Readings
> * <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications" target="_blank">WebSocket tutorial</a>
> * <a href="https://www.ably.io/topic/websockets" target="_blank">A conceptual overview of WebSockets</a>

Before today, we used the HTTP protocol to send messages between a user's client at the server. Using HTTP, clients must initiate individual connections to the server in order to request and receive data.

<img class="large frame" src="/spring2021/assets/images/lab07/img1.png" />

However, there are examples in which it may be useful for the server to send data to the client without the client explicitly requesting it. WebSockets are useful for these cases, since each client establishes a persistent connection to the server over which the server can send messages.

<img class="large frame" src="/spring2021/assets/images/lab07/img2.png" />

Today, you will building a messaging app using WebSockets. This requires two components:

- A WebSocket server that handles incoming messages from each client
- A client that establishes a connection to the server and sends messages to the server whenever a user chats.

## Setup

<a class="nu-button" href="/spring2021/course-files/assignments/lab07.zip">lab07.zip<i class="fas fa-download" aria-hidden="true"></i></a>

Create a new GitHub repository for the lab (it can be named whatever you want). Download `lab07.zip`, unzip it, and add the repo as a remote for the project:

```bash
git init
git remote add origin <address-of-repo-on-github>
git add .
git commit -m "Initialize"
git push origin main
```

## Your Task

### 1. Server

Run the server locally using `npm start`. Then, open `server.js`. Your job is to implement the server to handle two different types of messages:

- Messages indicating a user has logged in to the server
- Messages indicating a user has disconnected from the server
- Messages indicating a message to be sent

These messages should be in JSON format with a `type` field that indicates the type of message being sent. For example, a user login message could be `{ type: "login", username: "not_a_chatbot" }`, a disconnect message `{ type: "disconnect", username: "not_a_chatbot" }`,  and a chat message `{ type: "chat", text: "is this working?", username: "not_a_chatbot" }`. You should check the type of the message and send data back to each connected client as a stringified JSON object with whatever structure you feel is appropriate, since you'll be writing the client that handles the data.

- When a user logs in, send them a JSON object containing a list of _all_ users that are currently connected (type "login"); you can store these in a list on the server.
- When a user disconnects, remove them from the list of connected users and send back a JSON object containing a list of _all_ users that are currently connected (type "disconnect").
- When a message is sent, broadcast the message and the sender to all connected users (type "chat").

Here's a quick example of sending a static message to each connected client:

```javascript
wss.on("connection", socket => {
    console.log("Client connected on PORT: " + port);
    socket.on("message", message => {
        const json = JSON.parse(message);
        wss.clients.forEach(client => {
            if (client.readyState === ws.OPEN) {
                // Replace the line below with the data you want to send
                client.send(JSON.stringify({ message: "hello, client!" }));
            }
        });
    });
});
```

If we were building this into a full application, we would store each user, conversation, and message in a database to load the appropriate chat history whenever the user opens the application. For now, messages will just be stored on the client and not be persisted between sessions.

### 2. Client

Open `index.html` in your browser. The interface is a simple chat interface that allows the user to select a chatroom (just localhost for now), set their name, and send messages to other users in the chatroom. Most of the UX is already implemented; you will implement the following:

- When the user logs in, send a JSON message with type "login" and the entered username to the server.
- When the user disconnects from the server, send a JSON message with type "disconnect" and the current username.
- When the user sends a chat, send a JSON message with the type "chat", the entered text, and the username of the sender
- Handle all 3 types of messages that the server can send to the client:
    - Update the list of connected users when you login (or another user does)
    - Update the list of connected users when a user disconnects
    - Update the chat with any received messages and their senders

If your client and server are both working, you should be able to run your server, open `index.html` in two separate browser tabs, and send messages between them!

### 3. (Optional) Deploy & Test

If you're done with your implementation, push your code to GitHub and deploy your server via Heroku. You should then be able to add your Heroku app to the list of servers in `index.html` and access it via your front-end. If you want, feel free to send the link to your app in the Zoom chat so others can connect to it with their clients. Ideally, we'll be able to create several open chatrooms that your classmates can use!

### What to Turn In

When you're done, push your code to GitHub and submit the link to the repo. If you ended up deploying your site, submit the link to your app as well!
