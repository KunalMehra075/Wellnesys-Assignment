# Wellnesys-Assignment Technical-Round 1

Deployed link : <a href="https://wellnesys-assignment-k7fp.onrender.com">wellnesys-assignment-k7fp.onrender.com</a>

Write a brief document explaining the steps you followed, challenges faced, and lessons
learned during the assignment.
Note: Remember to structure your code in a clean and modular manner, following best

## Introduction:-

- A Simple Node.js & Express.js application which allows user to save their information.
- The information recieved by users gets saved in the `users.json` file present inside the Data folder.
- All the routes are mentioned below.

| Method | URL    | Response                                               | Status Code |
| ------ | ------ | ------------------------------------------------------ | ----------- |
| GET    | /      | This is the base route, it returns a welcome message   | 200         |
| GET    | /users | The Users route, it returns the array of users objects | 200         |
| POST   | /users | This route is for creating a new user                  | 201         |

- Sample req.body for creating new user

```
{
  "name": "Rahul sharma",
  "age": "19",
  "gender": "Male",
  "email": "rahul27@gmail.com"
}
```

- The `api.rest` file contains a demo of all the routes, along with sample user objects provided.
- In the event of an error, the server will provide appropriate error messages and status codes in response.

## Steps followed in the Assignment :-

- First, I initiated a backend project by creating the index.js file and installing necessary packages like express and cors.
- Secondly, I set up the Express application, defined the base route, and configured the server to listen on port 4500.
- After getting the server up and running, I created the users route by utilizing internal packages of node.js such as fs (filesystem) and path. Additionally, I reorganized the files into their appropriate folders.
- I then created the Logger middleware, which logs various details, including the Request Method, URL, User-agent, and Request body. Additionally, it logs any relevant information related to an event, such as the creation of a new user or if the server encounters an error.
- After that, I handled errors for the routes and tested for uncaught routes. I also tested other routes, middlewares, user creation,etc with localhost.
- After all the testing was done, all there left was the deployment of the project, I proceeded deployed it, then wrote the `api.rest` file for easier testing.
- Finally, once all the tasks were completed, I proceeded to write the documentation for this assignment.
- The whole assignment took 4-5 Hours for completion.

## What I learned : -

- Completing this assignment allowed me to refresh my knowledge of Node.js fundamentals
- I also explored innovative approaches to error management and writing middleware logic.
- Learned to use Node.js internal packages in more depth such as fs,path and os.

## Challenges faced : -

- There were not any major challenges faced during the project.
- While deploying on vercel, I encountered an error indicating that the server is read-only, preventing any modifications to files on the server, including users.json and logs.txt.
- Trying find a resolution, I came across Render.com, which enables servers to be writable as well. As a result, I deployed this task on Render, and it successfully resolved the problem.

---

#### Thankyou for your time !
