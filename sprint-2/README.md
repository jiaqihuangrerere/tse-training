## sprint 2
This sprint is focused on introducing Node.js with Express. **N**ode.js and **E**xpress, plus **M**ongoDB and **A**ngularJS, form the **MEAN** stack, which is what we'll be working with throughout the quarter. As with the last sprint, keep updating your progress on the repo's Kanban Boards as you go along.

### Introduction to Node.js with Express
The reason I'm bundling Node.js with Express instead of going through each separately is because Node's just a JavaScript runtime environment&mdash;it allows you to run JavaScript outside of a browser (e.g. in a server or a desktop client). Express is a framework that builds on top of that and is designed for building web applications and APIs, which is what we're doing. That's a simplified explanation but also the gist of it.

1. Read [this introduction to Node and Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction).
2. Follow along with [this blog post](https://zellwk.com/blog/crud-express-mongodb/) up to and including the "CRUD - READ" section.
3. Clone/pull this repo and create your own branch&mdash;same as the last sprint.
4. Complete the following mini-projects (and update the Kanban Boards).

### Project 3: navigational-skeleton
__Description__: *set up and deploy a basic navigational skeleton.*
1. Using what you learned in [the last sprint](https://github.com/sumeet-bansal/tse-training/tree/master/sprint-1), recreate the wireframes shown below.
2. Create an Express app with routes to the wireframes, as specified in the sitemap.
3. Log in to your account or sign up for one on [Heroku](https://www.heroku.com/).
4. Create a new app on Heroku and follow [Heroku's guide to deploying with Git](https://devcenter.heroku.com/articles/git). *Note: the Express app will not be in the root directory as a result of how this repo is structured, so you'll have to push a subdirectory of the repo to Heroku. Check out [this StackOverflow post's top answer](https://stackoverflow.com/a/10648623) for instructions on how to do this.*

I'll put up a sitemap, some wireframes, and starter code for the Express app in a bit.

__Since other people are going to be on this repo as well, please don't merge anything back into `master`&mdash;just work on your own branch.__

### Additional Resources
+ of course, [NodeSchool](https://nodeschool.io/) (although it's more focused on vanilla Node than Node with Express)
+ [the MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) for [ExpressJS](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs), especially [part 2 (creating a skeleton website)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website) and [the first bit of part 4 (routes and controllers)](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)
+ [the tutorialspoint ExpressJS tutorial](https://www.tutorialspoint.com/expressjs/index.htm)
+ [this gamified Express tutorial from Code School](https://www.codeschool.com/courses/building-blocks-of-express-js)
