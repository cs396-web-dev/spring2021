---
layout: assignment-two-column
title: React and TypeScript
type: lab
abbreviation: Lab 8
draft: 1
num: 8
points: 5
description: |
    A quick introduction to React and TypeScript
due_date: 2021-05-21
---

{:.callout}
> ## Helpful Links
> * <a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html" target="_blank">TypeScript tutorial</a>
> * <a href="https://reactjs.org/docs/hello-world.html" target="_blank">React tutorial</a>

Today, you will get some practice with two tools frequently used in the modern web development world: TypeScript and React. You will first go through some example code with TypeScript features that are not present in JavaScript and then create a simple shopping list app using React. You should skim the above readings before beginning each of the sections of the lab to get a better understanding of the concepts being used.

## 1. TypeScript

Many React applications are written in TypeScript, a strongly-typed superset of JavaScript (this strong typing fixes the worst part JavaScript, which is why TypeScript is so popular). Unlike JavaScript, TypeScript is a compiled language; a client-side project written in TypeScript is compiled down to JavaScript before being executed in the browser. TypeScript files have the suffix *.ts, instead of JavaScript's *.js.

In order to install TypeScript, type `npm install -g typescript` in a terminal window.

Three important features that are included in TypeScript, but not JavaScript, are _enums_, _interfaces_ and _types_. An enum allows the developer to define a set of named, related constants. These constants can also hold string or numeric data. For example, imagine we were writing a method to make API requests. A good use of an enum would be to constrain the types of HTTP responses that can be used to make requests to a pre-defined set, instead of just passing in a string.

```typescript
enum HTTPMethod {
    Get = 'get',
    Post = 'post',
    Put = 'put',
    Patch = 'patch',
    Delete = 'delete'
}
```

An interface is a contract from which an object can be derived; a conforming object must implement all specified non-optional fields of the interface. Optional fields are specified with a question mark; unless a default value is specified, uninitialized default fields will default to `undefined`. For example, we could use interfaces to specify the structure of HTTP request and response data:

```typescript
interface HTTPResponse {
  status: number;
  data: HTTPResponseData;
}

interface HTTPRequest {
    method: HTTPMethod;
    url: string;
    data?: object;
}
```

Right now, our code has no way of knowing how the data in the `HTTPResponse` passed to the callback is structured. Let's say we know the response body can be either a number or a string. In TypeScript, we can solve this problem by defining a new union type `HTTPResponseData` that can be either a number or a string.

```typescript
type HTTPResponseData = number | string;
```

Bringing it all together:

```typescript
function request(config: HTTPRequest, callback?: (response: HTTPResponse) => void) {
    axios(config)
        .then((response: HTTPResponse) => { callback(response); })
        .catch((err: string) => console.error(err));
}

const requestConfig: HTTPRequest = {
    method: HTTPMethod.Get,
    url: "/",
    data: {}
};

request(requestConfig, (response: HTTPResponse) => { console.log(response.data); });
```

## 2. React

<a class="nu-button" href="/spring2021/course-files/assignments/lab08.zip">lab08.zip<i class="fas fa-download" aria-hidden="true"></i></a>

You will now use what you've learned about TypeScript and React to build part of a simple grocery list application. A user creates a list by adding individual items, quantities to purchase, and food groups to which the items belong.

INSERT IMAGE HERE

Download the provided starter code and run `npm install` to install the dependencies. Don't worry about looking through the setup code now as you'll only be editing files in `src/components` (although the rest of the files might help you set up a TS+React project in the future).

ASK SARAH WHAT SCOPE SHE THINKS IT GOOD FOR STUDENTS
