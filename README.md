## Front End Exercise

For this challenge, we'd like you to create a single page application that simulates
favoriting blog posts. You will need to communicate with a local API that you set up to fetch blog posts, render them,
and have functionality to allow the user to "favorite" a post.

![wireframe](https://gist.githubusercontent.com/kamirdjanian/12f72bb9bdb080c0e69dc1e5def66ae1/raw/e4d39b0108650eb8decb30bacb4f7c7d5b9567d1/Front-End%2520Wireframe.png)

A post includes **tags**. Clicking a tag should result in filtering only posts that share that tag.
Tags that are filtered should appear at the top of the blog list. Clicking a tag that appears next to "active tags" should remove that tag from the active filters.

Each post should have an "Add" button. Clicking the "add" button will add it to the favorites menu.
Posts in the favorites section should have a "Remove" button in place of the "Add" button.

#### Making API Requests

* To retrieve blog posts, you will need to use [JSONPlaceholder](http://jsonplaceholder.typicode.com/) to fake an API.
* Follow the instructions here to set up your fake REST API: [json-server documentation](https://github.com/typicode/json-server).
* You will find the `db.json` file here: [Blog Post Data](https://gist.github.com/kamirdjanian/04b3c417d8d747c3a69df6a673165bb2) as well as in this repository.
* To be clear you are not writing any server code. You are using JSONPlaceholder to start a server, supplying a data file, and once completed you should be able to make a `GET` request to `http://localhost:3000/posts` and see all of your blog post data.

Please note:

* You're given a script in the `package.json` that will serve your static files for you and reload when you make changes to your front-end code. Watch your terminal output to see which port to navigate to.
* Please use the wireframe merely as a guideline -- you may style it as you see fit. We care more that it is functional.
* Do not worry about persisting favorites; it can be ephemeral and a subsequent page refresh will reset the favorites list.
* You may use whatever front end technologies you'd like.
