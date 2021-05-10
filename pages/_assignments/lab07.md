---
layout: assignment-two-column
title: Mini Chat App
type: lab
abbreviation: Lab 7
draft: 1
num: 7
points: 5
description: |
    Create a basic chat app using WebSockets
due_date: 2021-05-14
---

{:.callout}
> ## Background Readings
> * <a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications" target="_blank">WebSocket tutorial</a>
> * <a href="https://www.ably.io/topic/websockets" target="_blank">A conceptual overview of WebSockets</a>
> * https://github.com/websockets/ws
> * https://flaviocopes.com/node-websockets/

Before today, we used the HTTP protocol to send messages between a user's client at the server. Using HTTP, clients must initiate individual connections to the server in order to request and receive data.

<img class="large frame" src="/spring2021/assets/images/lab07/img1.png" />

However, there are examples in which it may be useful for the server to send data to the client without the client explicitly requesting it. WebSockets are useful for these cases, since each client establishes a persistent connection to the server over which the server can send messages.

<img class="large frame" src="/spring2021/assets/images/lab07/img2.png" />

Today, you will building a messaging app using WebSockets. This requires two components:

- A WebSocket server that handles incoming messages from each client
- A client that establishes a connection to the server and sends messages to the server whenever a user chats.

## 1. Server

<a class="nu-button" href="/spring2021/course-files/assignments/lab07.zip">lab07.zip<i class="fas fa-download" aria-hidden="true"></i></a>

Download `lab07.zip`, unzip it, and open the folder in VSCode.

Install the required packages with `npm install` and run the server locally using `npm start`. Then, open `chat-server.js`. Your job is to implement the server to handle three different types of messages. These messages should be in JSON format with a `type` field that indicates the type of message being sent. Examples of each type are:

- User login message: `{ type: "login", username: "my_username" }`
- Disconnect message: `{ type: "disconnect", username: "my_username" }`
- Chat message: `{ type: "chat", text: "is this working?", username: "my_username" }`

Using the provided switch statement, send data back to each connected client as a JSON object. The object can have whatever structure you feel is appropriate, since you'll be writing the client that handles this data in Step 2.

- When a user logs in (message type "login"), store their username in a collection on the server and send back a JSON object containing a list of _all_ connected users.
- When a user disconnects (message type "disconnect"), remove them from the set of connected users and send back a JSON object containing a list of _all_ connected users.
- When a chat is sent (message type "chat"), broadcast the message and the sender to all connected users. _Tip: You can just send back the received JSON object._

Here's a quick example of sending a message to each connected client:

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

## 2. Client

Open `index.html` in your browser. The interface is a simple chat interface that allows the user to select a chatroom (just localhost for now), set their name, and send messages to other users in the chatroom. The client is currently set up to send WebSocket messages to the server whenever a user connects, disconnects, or sends a message. You will implement `handleReceivedMessage`, which updates the UI whenever the client receives a message from the server. You should:

- Update the list of connected users when a user logs in
- Update the list of connected users when a user disconnects
- Update the chat with any received messages and their senders

If your client and server are both working, you should be able to open `index.html` in two separate browser tabs, log in to the same server on each, and send messages between them!

## 3. (Optional) Deploy with ngrok

Ngrok is a command line tool for creating a secure URL that points to a localhost server. Using this url, others can access your server securely without you having to host it online.

You should [sign up](https://dashboard.ngrok.com/signup) for ngrok using your Northwestern email and [download](https://ngrok.com/download)/extract the version for your preferred OS.

Run `ngrok help`; if the command fails, find the location where the ngrok executable was downloaded to and add the folder to your system PATH. Then, run `ngrok authtoken <token>` with the token listed in your ngrok dashboard.

<img class="large frame" src="/spring2021/assets/images/lab07/img3.png" />

With your server running in another terminal window, type `ngrok 8081` to open a tunnel to your server. You should now be able to add the forwarding url (minus the http://) to the list of servers on your client and use it as a separate chat room.

If you want, feel free to send the link to any open tunnels to your app in the Zoom chat so others can connect to it with their clients. Ideally, we'll be able to create several open chatrooms that your classmates can use!

## What to Turn In

When you're done, zip the completed folder and submit it to Canvas.
