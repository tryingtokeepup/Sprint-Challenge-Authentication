# Sprint Challenge: Authentication - Dad Jokes

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored Authentication. During this Sprint, you studied Introduction to Authentication, Using Sessions and Cookies, Using JSON Web Tokens (JWT), and Client-side Authentication. In your challenge this week, you will demonstrate proficiency by creating an application that will give you a list of random dad jokes, as long as you are authorized.

- **DISCLAIMER** Authentication is a subject that many people spend a large amount time throughout their careers obtaining knowledge over. This is not something we expect you to have a mastery over, rather, we're preparing you to be able have an intelligent conversation about the subject.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency w/ Authentication and your command of the concepts and techniques in the Introduction to Authentication, Using Sessions and Cookies, Using JSON Web Tokens (JWT), and Client-side Authentication modules.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons and your project manager.

## Description

In this challenge, you build a real wise-guy application. _Dad jokes_ are all the rage these days. Currently the application is trying to receive some `Dad Jokes`, however we are currently locked out.

Implement an User Authentication System in order to access the jokes from the Jokes API that we want to consume. You will need to ensure that your system uses `bcrypt` for hashing and encrypting your user's passwords, as well as JWT for handling the authorization aspect of the app.

## Self-Study/Essay Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions. Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager.

1. What is the purpose of using _sessions_?
   Everyone has had the frusturation of logging into some website, closing the tab, only to realize that the website somehow does not remember that they just logged in, forcing them to re-login again. Sessions removes this issue, as it allows a server to store data about a client. In this case, the server can store the client's credentials in a session, persisting it across multiple requests over a duration of time, so that even if the user leaves the website or closes their browser, they can still be authenticated to access the site (as long as that data isn't purged on the closure of the browser).

1. What does bcrypt do to help us store passwords in a secure manner?

Bcrypt is a module that hashes the passwords that we would like to store into a database, so that we do not have passwords stored in plain text in our servers (which would be an easy goldmine for a hacker that manages to gain access to those passwords).

Hashing is incredibly important, as it is a one-way security system, where even if the attacker gains the hash of the password, it still is useless with some sort of algorithim and the exact parameters used by the algorithims. Even in a breech, the hashes are worthless to the attacker (unless they know the exact parameters and the algo that was used to hash those original passwords).

1. What does bcrypt do to slow down attackers?

We know that given infinite time and infinite determination, no one can stop an intruder from eventually cracking into a system. However, just like the fact that to survive a lion, you just need to be faster than the slowest gazelle, we use bcrypt to make our system secure by adding a tremendous barrier to breaking into our system: time complexity. By using bcrypt and adding multiple hashing passes to it, we can effectively make it time and cost inefficent to target our system, which will deter all but the most fastidous attackers out there.

1. What are the three parts of the JSON Web Token?
   A JSON web token is made up of three parts: the header, which contains the algo and the token type (good to hide this info), the payload, which comprises of claims (permissions for the user), and other stuff like the user's id and other identifiying info. Finally, the third part is the signature, which is the product of encoding the previous two parts, the header and payload, with a base64 algo, and then signing it with some predefined secret (maybe store that in the env?)

## Project Set Up

Follow these steps to set up and work on your project:

- [ ] _Create a forked copy of this project._
- [ ] _Add PM as collaborator on Github._
- [ ] _Clone your OWN version of Repo (Not Lambda's by mistake!)._
- [ ] _Create a new Branch on the clone: git checkout -b `<firstName-lastName>`._
- [ ] _Implement the project on this Branch, committing changes regularly._
- [ ] _Push commits: git push origin `<firstName-lastName>`._

Follow these steps for completing your project:

- [ ] `cd` into the root of the project and run `yarn` to install dependencies.
- [ ] Once you have your `node_modules` go ahead and run `yarn server` or `npm run server` to start your node server.
- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by merging the branch back into master.

Helpful Tip on Testing this Project:

- [ ] **TEST** this project using **`POSTMAN`**.

## Minimum Viable Product

- [ ] Implement the `register` function inside `/config/routes.js`.
- [ ] Implement the `login` function inside `/config/routes.js`.
- [ ] Use JSON Web Tokens for authentication.

**Note** The migrations and a database with empty users is already included

- [ ] Add the authentication related code. If every is done correctly, visiting `/api/jokes` should return a list of jokes.

## Stretch Problem: Build a front end to interface with your User Auth System

- Add a React client that connects to your API and has pages for `Sign Up`, `Sign In` and showing a list of `Jokes`.
- Once you have the functionality down, style it!
