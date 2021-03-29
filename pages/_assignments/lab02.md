---
layout: assignment-two-column
title: Setting Up MongoDB
type: lab
abbreviation: Lab 2
draft: 1
num: 2
description: |
    Setup MongoDB, Flask, GitHub
due_date: 2021-04-09
---

{:.callout}
> ## Background Readings
> * Background reading on RESTful architectures:
>      * <a href="https://medium.com/extend/what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f" target="_blank">High-level overview</a>
>      * <a href="https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm" target="_blank">Fielding's original paper</a>
> These are for your reference, if you want to read more about the technologies we're using.
> * <a href="https://docs.mongodb.com/manual/introduction/" target="_blank">MongoDB Introduction & Guide</a>
> * <a href="https://mongoosejs.com/docs/" target="_blank">Mongoose</a> (Node.js Package for connecting to MongoDB)

One of the goals of the course is to help you to analyze the **human dimensions** of data-intensive computing applications. A key part of this is the examination of how humans interact with data, through the ways data is stored and presented. In today's lab, we will learn one way data is commonly stored and accessed in large-scale applications.

Today, you will be completing the 3 steps below. Please note that configuring your laptop and getting all of the pieces to work together can be frustrating and time consuming. We're here to help, and want to ensure that everyone is successful. This lab is not meant to be evaluative -- it's meant to help you get familiar with a tool that is widely used in industry (especially in early-stage startups). If there's anything that you don't understand, we can explain it to you or point you towards more resources.

{:.callout}
> 1. <a href="#step1">Setting up a MongoDB database</a>
> 2. <a href="#step2">Connecting the database to your server</a>
> 3. <a href="#step3">Setting Up Git and GitHub</a>

{:#step1}
## I. Set Up MongoDB
MongoDB is a​ ​NoSQL​ database program that organizes collections of JSON-​like documents with optional s​chemas​. There are many different kinds of databases out there (relational systems like SQL are a very popular choice for more robust apps), but we've selected MongoDB because of its flexibility and usefulness for prototyping. Because you will eventually be building a cloud-hosted, publicly accessible system, we're going to go ahead and create a cloud MongoDB instance on MongoDB Atlas. That said, you may also want to install MongoDB locally (optional).

### 1. Register w/MongoDB​ Website
Login or signup for a <a href="https://account.mongodb.com/account/login" target="_blank">MongoDB​ account</a> using your u.northwestern.edu email.

### 2. Create a Project
Click on the "create a new project" button. Type in the name of your project as “CS396” and click next. Ignore the "add teammates" prompt and finish the setup.

<img class="large frame" src="/spring2021/assets/images/lab02/ss1.png" />
   
### 3. Build a Cluster
Click on "Build a Cluster". Select the free options on the next page.

<img class="large frame" src="/spring2021/assets/images/lab02/ss2.png" />

Do not change anything on this page and proceed to create a cluster. It might take several minutes so grab some coffee and relax.

### 4. Create a Database User
Next, set up a user and password that will be used by your web applications to access the database.

<img class="large frame" src="/spring2021/assets/images/lab02/ss3.png" />

Click on “Database Access” under SECURITY. Then click “Add New Database User”.

<img class="large frame" src="/spring2021/assets/images/lab02/ss4.png" />

Follow these configurations and use your unique username and password. Make sure to copy the password to somewhere safe, as you will not be able to view it once created.

### 5. Grant Network Access
Finally, click “Network Access” just below the “Database Access” and click Add IP Address and then click “Allow access from Anywhere”. When deploying your backend to servers you will not have to reconfigure the IP address. Confirm to close and complete that step. This might take another few minutes.

<img class="large frame" src="/spring2021/assets/images/lab02/ss5.png" />
 
We will use the database stored in this cluster in upcoming labs and homework assignments. Meanwhile, if you are curious about how to interact with MongoDB, take a look at their documentation on <a href="https://docs.mongodb.com/manual/crud/" target="_blank">CRUD operations​</a> (CRUD = "Create, Read, Update, & Delete").

{:#step2}
## II. Connect your server to MongoDB

We will now be configuring our server from Homework 1 to connect to MongoDB. To configure your web server, please complete the following steps:

### 1. Find your MongoDB connection string
Go to MongoDB Atlas and find your connection string. To do this:
1. Click on the "Clusters" link (left-hand navigation)
2. Click on the project you just made (“CS396”)
3. Scroll to the right until you see a button called "Connect". Click the "Connect" button.<br><img class="large frame" src="/spring2021/assets/images/lab02/db_connect_1.png" />
4. Next, click the "Connect to Application" option:<br><img class="large frame" src="/spring2021/assets/images/lab02/db_connect_2.png" />
5. Finally, select the Node.js options and copy your connection string:<br><img class="large frame" src="/spring2021/assets/images/lab02/db_connect_3.png" />

### 2. Connect your application to your database
My connection string (copied from MongoDB Atlas) is this...

`mongodb+srv://admin:<password>@cluster0.qb1oh.mongodb.net/<dbname>?retryWrites=true&w=majority`

...and while I could copy this connection string directly into my web application, I don't want to store my database connection information in my GitHub repository (a big No-No, since that would mean anyone could access it). As an alternative, we're going to use _environment variables_ to store our database credential information by making a `.env` file at the root of our web application. Inside your .env file, please add the following environment variables (but replace `<your_password>`, `<your_database_username>`, and `<your_host_address>` with the values that pertain to the DB connection string you just copied from MongoDB Atlas):

```bash
# Your environment variables (edit this), extracted from your DB connection string
DB_PASSWORD=<your_password>
DB_NAME=cs396_db
DB_USERNAME=<your_database_username>
DB_HOST=<your_host_address>
```

Here is what Sarah's .env file looks like:
```bash
# Example: Sarah's environment variables, extracted from:
# mongodb+srv://admin:<password>@cluster0.qb1oh.mongodb.net/<dbname>?retryWrites=true&w=majority
DB_PASSWORD=my_secret_password
DB_NAME=cs396_db
DB_USERNAME=admin
DB_HOST=cluster0.qb1oh.mongodb.net
```

Note that in the .gitignore file, the .env file is excluded, which means that this file will not be checked into your repo. Feel free to take a look at `cs396_api/config/config.js` to see how your environment variables are used to dynamically build your connection string.

### 3. Test your web app's database connection
Finally, you are ready to test that your server can connect to your new database. To do this, please navigate to the `cs396_api` directory in your command line and type `npm start`. If successful, you will see an output similar to this:

```bash
Sarahs-MacBook-Pro-4:cs330-web-server vanwars$ npm start

> cs396@1.0.0 start
> cross-env NODE_ENV=development node index.js

ENV: development
Application listening on PORT: 8081
Trying to connect to database...
Connected to cs396_db.
```

If the message `Could not connect to database` appears instead, let your peer mentor know to debug.

Now, deploy your app to Heroku. Since `.env` is not tracked by Git, we have to let Heroku know the values of our environment variables so the app will work once deployed. Open your Heroku dashboard and navigate to the Settings tab. Click "Reveal Config Vars" and add in the key-value pairs for each of the variables in your `.env` file.

<img class="large frame" src="/spring2021/assets/images/lab02/heroku_env.png"/>

## IV. Review the Checklist & Submit

### 1. Verify that you're done

{:.checkbox-list}
* App Configuration
   * You can run your server locally with `npm start` and receive the `Connected to cs396_db` message.
* GitHub Configuration
   * Your files have been committed and pushed to GitHub
   * You have taken care to not include your database password in your repo by creating a local, hidden file, `.env` that is excluded from your GitHub repo in the `.gitignore` file.
   * __Note__: Do _NOT_ remove the `node_modules` line from `.gitignore` under any circumstances.

### 2. Submit to Canvas

When you are sure you have completed everything, please submit the link to your GitHub repository.
