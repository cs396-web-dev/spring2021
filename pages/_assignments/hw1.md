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

<a class="nu-button" href="/spring2021/course-files/assignments/hw1.zip">hw1.zip<i class="fas fa-download" aria-hidden="true"></i></a>

To start, download `hw1.zip`, unzip it, and open the folder in VSCode. You should see two JavaScript files and one HTML file; In this assignment, you will implement endpoints for a basic web API in `routes.js` (you don't need to worry about the other files... for now).

Writing a web server from scratch is very tricky, but thankfully, we don't have to! Node has some great libraries that we can use to do a lot of the heavy lifting for us.

You can download libraries to use in Node.js projects via the [Node Package Manager](https://www.npmjs.com/), or npm for short. Before we can start installing packages, we need to set up our project to use npm. Open a new terminal window in VSCode (inside the `hw01` directory) and type `npm init`. Follow the prompts, leaving all settings as recommended.

To install the packages you'll need for this assignment, type the following command in the terminal window:

```bash
$ npm install body-parser express --save
```

You should now have `package.json`, `package-lock.json`, and `node_modules` in your directory. The `JSON` files describe the details of the dependencies needed for the project, and the `node_modules` folder contains the source code for any downloaded libraries.

## Part 2: Run and Use the Server

The code we wrote in Lab 1 (and, likely, most of the code you've written for previous courses) took the form of a _program_, which runs once. In this homework, we will be writing a _service_, which runs indefinitely and provides utilities that can be called on by other programs.

Imagine we wanted to create a website where a user can search for information about the hit BBC show _Doctor Who_. When a user asks for this information, their request goes to a web API, which processes their request and sends back the data needed to display the results on screen. This API is what you will be building for this assignment.

<img class="large frame" src="/spring2021/assets/images/hw1/img1.png"/>

You will be using the [Express](https://expressjs.com/) framework to build your API. To run the server, type `node index.js` into your terminal window:

```bash
$ node index.js
Application listening on PORT: 8081
```

The server is now running! If you visit [http://localhost:8081](localhost:8081) in a browser window, you should see a message that the app is running.

<img class="large frame" src="/spring2021/assets/images/hw1/img2.png"/>

To test our API, we're going to be using [Postman](https://www.postman.com/downloads/), which is a GUI that lets us send HTTP requests to a specified endpoint. Download Postman, open it up, and put `http://localhost:8081` in the "Enter request URL" bar. Make sure GET is selected in the dropdown and cliek Send; You should see the response from the request as below:

<img class="large frame" src="/spring2021/assets/images/hw1/img3.png"/>

You can use Postman similarly to debug all the routes we will be writing in this assignment.

## Part 3: Assignment Information

### Routing

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

This first route simply sends the receiver a response with a message saying "App is running". Messages between the server and client are sent via JSON, which is a standardized notation for structured data. For all the routes in this homework, responses should take the form of a JavaScript Object with a `data` field that holds the required information.

This route does not accept any input from the user; It will send back the same data each time it is called. There are two ways in which data can be embedded within requests to be used by the handler. The first is _parameters_, which take the form of colon-prefixed variables in the route path. For example, in the path `"/doctor/:n"`, `n` is a parameter that can be accessed within the handler using `req.params["n"]`.

The second is the _request body_, which can hold any type of information in a JSON object. __NOTE__: GET requests are forbidden from containing request bodies; Only the PUSH, PUT, PATCH, and DELETE methods can use them. You can access this object using `req.body`. The `body-parser` library we downloaded handled converting this body into a readable JSON format.

All HTTP responses have an attached _status code_, which represents additional information about the request. A list of all valid HTTP status codes can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status). For this assignment, all routes should return a `200` status code unless otherwise specified.

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

## Part 4: Writing the API

Your job is to implement each route in the API so that the client can interact with the data. You should replace `res.status(501).send()` in each route with your own code that sends back a response with a `200` status and any necessary data.

Implement the following GET routes.

<table>
    <th>
        Method/Route
        <td>Response Data Value</td>
        <td>Response Data Type</td>
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
        <td>Response Data Value</td>
        <td>Response Data Type</td>
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
        <td>Response Data Value</td>
        <td>Response Data Type</td>
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

The video below shows the expected output of all the routes.

[INSERT VIDEO HERE]()

## What to Turn In

When you're done, upload your completed `index.js` file to Canvas. Make sure to upload the file by Tuesday night at midnight.

Please be careful that you __don't just upload the original starter files__, but that your zip file includes __YOUR CODE__. Also, make sure not to submit the `index.js` file located in the `client` folder!
