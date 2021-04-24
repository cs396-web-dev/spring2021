---
layout: module
title: Using the fetch API
type: lecture
draft: 0
show_schedule: 1
num: 9
due_date: 2021-04-26
# videos: 
#    - url: ""
#      title: Recorded Lecture Video
#      live: 1
# slides:
#    - url: ""
#      title: TBD
readings:
   - url: https://www.codeinwp.com/blog/fetch-api-tutorial-for-beginners/
     title: "Fetch API Tutorial for Beginners: How to Use Fetch API"
     author: Lazaris, Louis
     date: 2020
   - url: https://dev.to/silvenleaf/fetch-api-easiest-explanation-part-1-4-get-silvenleaf-21e2
     title: fetch GET examples
     notes: |
        Note: this example (and subsequent ones) demonstrate both  "then" "async/await" techniques.
   - url: https://dev.to/silvenleaf/fetch-api-easiest-explanation-part-2-4-post-by-silvenleaf-1kmh
     title: fetch POST examples
   - url: https://dev.to/silvenleaf/fetch-api-easiest-explanation-part-3-4-put-by-silvenleaf-3oe8
     title: fetch PUT examples
     notes: "Note: PATCH works the same way as PUT. Recall that PATCH only updates specific attributes of a resource while PUT replaces the entire resource with a new version."
   - url: https://dev.to/silvenleaf/fetch-api-easiest-explanation-part-4-4-delete-by-silvenleaf-4376
     title: fetch DELETE examples
---

In Lesson 9, we'll be applying what you've been learning about templates and event handlers to data that is queried dynamically from a server. We will do this using AJAX, and specifically using the **fetch API**. Please do assigned readings to see examples of how you might use fetch to issue GET, POST, PATCH, PUT, and DELETE requests to a server.

In the examples discussed in the readings, both the "then()" and "await/async" techniques are shown. Recall that there is no meaningful difference (under the hood) between the two approaches. I think this <a href="https://stackoverflow.com/questions/54495711/async-await-vs-then-which-is-the-best-for-performance" target="_blank">StackOverflow post</a> is a nice summary of the distinctions between the two. 