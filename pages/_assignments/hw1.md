---
layout: assignment-two-column
title: Writing a Web API
abbreviation: HW1
type: homework
due_date: 2021-04-06
ordering: 1
draft: 0
points: 15
---

## Part 1: Node Package Manager (npm)

<a class="nu-button" href="/spring2021/course-files/assignments/cs396_api.zip">cs396_api.zip<i class="fas fa-download" aria-hidden="true"></i></a>

To start, download `cs396_api.zip`, unzip it, and open the folder in VSCode with `File -> Open Folder`. In this assignment, you will implement endpoints for a basic web API in `src/routes.js` (you don't need to worry about the other files... for now).

Writing a web server from scratch is tricky, but thankfully, we don't have to! Node has some great libraries that we can use to do a lot of the heavy lifting for us.

You can download libraries to use in Node.js projects via the [Node Package Manager](https://www.npmjs.com/), or npm for short. Before we can start installing packages, we need to set up our project to use npm. Select `Terminal -> New Terminal` to open a new terminal window in VSCode and type `npm install`. If this works, a `node_modules` folder should be created in the `cs396_api` directory.

## Part 2: Run and Use the Server

The code we wrote in Lab 1 (and, likely, most of the code you've written for previous courses) took the form of a _program_, which runs once. In this homework, we will be writing a _service_, which runs indefinitely and provides utilities that can be called on by other programs.

You will be using the [Express](https://expressjs.com/) framework to build your service. To run the server, type `npm start` into your terminal window:

```bash
$ npm start
Application listening on PORT: 8081
Trying to connect to database...
Could not connect to database.
```

The server is now running! Don't worry about the lines that mention a database; We'll get to that in Homework 2. If you visit [http://localhost:8081](localhost:8081) in a browser window, you should see a message that the app is running.

<img class="large frame" src="/spring2021/assets/images/hw1/img1.png"/>

To test our API, we're going to be using [Postman](https://www.postman.com/downloads/), which is a GUI that lets us send HTTP requests to a specified endpoint. Download Postman, open it up, and put `http://localhost:8081` in the "Enter request URL" bar. Make sure GET is selected in the dropdown and click Send; You should see the response from the request as below:

<img class="large frame" src="/spring2021/assets/images/hw1/img2.png"/>

You can use Postman similarly to debug all the routes we will be writing in this assignment.

## Part 3: Assignment Information

In this assignment, you will create a service where a user can search for information about the hit BBC show _Doctor Who_. When a user asks for this information, their request goes to a web API, which processes their request and sends back the data needed to display the results on screen. The user will also be able to add information to the service, as well as save lists of their favorite characters.

<img class="large frame" src="/spring2021/assets/images/hw1/img3.png"/>

### Anatomy of a Route

Open `routes.js` and examine the first route. All HTTP routes consist of 3 components:
- The path, which will be appended to the host route to be accessed by the front-end application
- The HTTP method, in this case GET, which describes the type of information transfer that should take place
- The request handler, which processes incoming information and sends back a JSON response

```javascript
router.route("/")                   // Path
    .get((_req, res) => {           // HTTP Method
        console.log("GET /");
        res.status(200).send({      // Handler
            data: "App is running"
        });
    });
```

This first route simply sends the receiver a response with a message saying "App is running". Instead of a normal function, which uses `return` to output a value, an API uses the `.send()` method to send a value back to the system requesting it (in this case, Postman). Messages between the server and client are sent via JSON, which is a standardized notation for structured data. This route sends back a JavaScript object with one key-value pair; the client can then receive the message and look at the `data` field to find the requested information.

This route does not accept any input from the user; It will send back the same data each time it is called. There are two ways in which data can be embedded within requests to be used by the handler. The first is _parameters_, which take the form of colon-prefixed variables in the route path. For example, in the path `"/doctor/:n"`, `n` is a parameter that can be accessed within the handler using `req.params["n"]`.

The second is the _request body_, which can hold any type of information in a JSON object. __NOTE__: GET requests are forbidden from containing request bodies; Only the PUSH, PUT, PATCH, and DELETE methods can use them. You can access this object using `req.body`. The `body-parser` library we downloaded handled converting this body into a readable JSON format.

All HTTP responses have an attached _status code_, which represents additional information about the request. A list of all valid HTTP status codes can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status). For this assignment, all routes should return a `200` status code for a valid request unless POST is used, in which case a `201` status should be used.

### Data

The data needed to create the API can be found in `data.js` and can be accessed via the `data` variable. Your job is to implement all the routes in `routes.js`, using the available data to send, update, and store any relevant information.

A list of objects representing the Doctors is stored at `data.doctors`, where each object contains the following fields:

- `_id`: A unique identifier for the object.
- `name`: The name of the actor/actress who played The Doctor.
- `seasons`: A list of the seasons for which this actor played The Doctor.

A list of objects representing the Doctor's companions is stored at `data.companions`, where each object contains the following fields:

- `_id`: A unique identifier for the object.
- `name`: The name of the actor/actress who played the character.
- `character`: The name of the character.
- `doctors`: A list of the `_id`s of the doctors with whom the companion travelled.
- `seasons`: A list of the seasons during which this character appears
- `alive`: A boolean representing whether the character is alive or dead.

{:#routes}
## Part 4: Writing the API

Your job is to replace `res.status(501).send()` in each route with your own code that sends back a response alongside an appropriate status (described earlier). All data should be sent in the `data` field of a JavaScript object.

Implement the following GET routes.

<table>
    <th>
        Method/Route
        <td>Response <code>data</code> Value</td>
        <td>Response <code>data</code> Type</td>
        <td>Points</td>
    </th>
    <tr>
        <td>GET /doctor</td>
        <td>A list of the ids of all Doctors</td>
        <td>Array&lt;string&gt;</td>
        <td>0.5</td>
    </tr>
    <tr>
        <td>GET /doctor/:id</td>
        <td>The Doctor object with the specified id</td>
        <td>Object</td>
        <td>0.5</td>
    </tr>
    <tr>
        <td>GET /doctor/:id/companions</td>
        <td>A list of the ids of the companions that travelled with the doctor with the specified id</td>
        <td>Array&lt;string&gt;</td>
        <td>1</td>
    </tr>
    <tr>
        <td>GET /doctor/:id/companions/longest</td>
        <td>The id of the companion who travelled with this Doctor for the greatest number of seasons; If there's a tie, send the first listed</td>
        <td>string</td>
        <td>1</td>
    </tr>
    <tr>
        <td>GET /doctor/:id/goodparent</td>
        <td><i>true</i> if every companion who travelled with this doctor is alive; Otherwise, <i>false</i></td>
        <td>boolean</td>
        <td>1</td>
    </tr>
    <tr>
        <td>GET /companion</td>
        <td>A list of the ids of all companions</td>
        <td>Array&lt;string&gt;</td>
        <td>0.5</td>
    </tr>
    <tr>
        <td>GET /companion/:id</td>
        <td>The companion object with the specified id</td>
        <td>Object</td>
        <td>0.5</td>
    </tr>
    <tr>
        <td>GET /companion/:id/doctors</td>
        <td>A list of the ids of the Doctors with whom this companion travelled</td>
        <td>Array&lt;string&gt;</td>
        <td>1</td>
    </tr>
    <tr>
        <td>GET /companion/:id/friends</td>
        <td>A list of the ids of the companions who appeared on at least one of the same seasons as this companion</td>
        <td>Array&lt;string&gt;</td>
        <td>1</td>
    </tr>
    <tr>
        <td>GET /companion/crossover</td>
        <td>A list of the ids of all companions who travelled with multiple doctors</td>
        <td>Array&lt;string&gt;</td>
        <td>1</td>
    </tr>
</table>

The next set of routes involves storing and manipulating data. Starting in HW2, this will take the form of using a database. For now, you will be manipulating the `data` object. Since the server runs continually in the background, any changes you make to the `data` object will persist between requests, letting us simulate a database.

Notice that the PATCH and DELETE methods detailed below can fail to find an object if it does not exist within `data`. In these cases, you should mark the status of the response as `404`, indicating that the requested resource could not be found.

__Note__: Fields marked with a question mark are optional and may not be included in some request bodies.

__Note 2 (Electric Boogaloo)__: Receiving two POST requests with identical bodies should create two different objects with distinct ids. It's your job to figure out how to make sure that no two objects have the same `_id`.

<table>
    <th>
        Method/Route
        <td>Effect</td>
        <td>Request Body</td>
        <td>Response <code>data</code> Value</td>
        <td>Response <code>data</code> Type</td>
        <td>Points</td>
    </th>
    <tr>
        <td>POST /doctor</td>
        <td>Create a new Doctor object and store it. You must create a new unique identifier for the object, which you should send back to the client.</td>
        <td>{ name: string, seasons: Array&lt;number&gt; }</td>
        <td>The id of the created Doctor object</td>
        <td>string</td>
        <td>0.5</td>
    </tr>
    <tr>
        <td>POST /companion</td>
        <td>Create a new companion object and store it. You must create a new unique identifier for the object, which you should send back to the client.</td>
        <td>{ name: string, character: string, doctors: Array&lt;number&gt;, seasons: Array&lt;number&gt;, alive: boolean }</td>
        <td>The id of the created companion object</td>
        <td>string</td>
        <td>0.5</td>
    </tr>
    <tr>
        <td>PATCH /doctor/:id</td>
        <td>Update the fields of the Doctor object with the specified id to match the fields in the request body. If a field is not present in the request body, leave it untouched in the Doctor object.</td>
        <td>{ name?: string, seasons?: Array&lt;number&gt; }</td>
        <td>The parameter id</td>
        <td>string</td>
        <td>1</td>
    </tr>
    <tr>
        <td>PATCH /companion/:id</td>
        <td>Update the fields of the companion object with the specified id to match the fields in the request body. If a field is not present in the request body, leave it untouched in the companion object.</td>
        <td>{ name?: string, character?: string, doctors?: Array&lt;number&gt;, seasons?: Array&lt;number&gt;, alive?: boolean }</td>
        <td>The parameter id</td>
        <td>string</td>
        <td>1</td>
    </tr>
    <tr>
        <td>DELETE /doctor/:id</td>
        <td>Delete the entry for the Doctor with the specified id.</td>
        <td>{}</td>
        <td>The parameter id</td>
        <td>string</td>
        <td>0.5</td>
    </tr>
    <tr>
        <td>DELETE /companion/:id</td>
        <td>Delete the entry for the companion with the specified id.</td>
        <td>{}</td>
        <td>The parameter id</td>
        <td>string</td>
        <td>0.5</td>
    </tr>
</table>

The last few routes involve setting up a favorites system in which a user can save their favorite Doctors and companions to find again later. Feel free to use whatever data structure(s) you feel appropriate to create your favorites "database". Return 404 HTTP status codes for the POST and DELETE requests if the entry with the specified `_id` does not exist.

<table>
    <th>
        Method/Route
        <td>Effect</td>
        <td>Request Body</td>
        <td>Response <code>data</code> Value</td>
        <td>Response <code>data</code> Type</td>
        <td>Points</td>
    </th>
    <tr>
        <td>GET /doctor/favorite</td>
        <td>Return a list of ids of saved Doctor objects.</td>
        <td>N/A</td>
        <td>A list of ids of saved Doctor objects.</td>
        <td>Array&lt;string&gt;</td>
        <td>0.5</td>
    </tr>
    <tr>
        <td>GET /companion/favorite</td>
        <td>Return a list of ids of saved companion objects.</td>
        <td>N/A</td>
        <td>A list of ids of saved companion objects.</td>
        <td>Array&lt;string&gt;</td>
        <td>0.5</td>
    </tr>
    <tr>
        <td>POST /doctor/:id/favorite</td>
        <td>Add the Doctor with the specified id to the user's favorites.</td>
        <td>{}</td>
        <td>The parameter id</td>
        <td>string</td>
        <td>0.5</td>
    </tr>
    <tr>
        <td>POST /companion/:id/favorite</td>
        <td>Add the companion with the specified id to the user's favorites.</td>
        <td>{}</td>
        <td>The parameter id</td>
        <td>string</td>
        <td>0.5</td>
    </tr>
    <tr>
        <td>DELETE /doctor/:id/favorite</td>
        <td>Delete the Doctor with the specified id from the user's favorites.</td>
        <td>{}</td>
        <td>The parameter id</td>
        <td>string</td>
        <td>0.5</td>
    </tr>
    <tr>
        <td>DELETE /companion/:id/favorite</td>
        <td>Delete the companion with the specified id from the user's favorites.</td>
        <td>{}</td>
        <td>The parameter id</td>
        <td>string</td>
        <td>0.5</td>
    </tr>
</table>

## What to Turn In

We have provided a testing script for you to use to debug your program. This is the same script we will be using to grade your code; If your code passes all provided tests (and you didn't hard-code in the correct responses), you should receive full points. To run the tests, open a second terminal window to the `cs396_api` directory __while your server is running__ and type `npm test`.

When you're done, upload your completed `routes.js` file to Canvas. Make sure to upload the file by Tuesday night at midnight.

Please be careful that you __don't just upload the original starter file__, but that you submit __YOUR CODE__.
