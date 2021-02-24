# Project 3 - MISC Space App

## Authors

Ana Cecilia Maldonado, Thomas Gores, and Jordan Dyar

## App link and Home Page
[Home Page Link]()

[Repo Link](https://github.com/Lavitzlegend/Project-3-Nasa-api/tree/master/nasa-api)

Profile Page:
![Screen Shot 2021-02-24 at 1 38 29 PM](https://user-images.githubusercontent.com/74753181/109056237-d29b3300-76a5-11eb-9d3c-92c941ceab58.png)


## Preview

Our take on a space app showing the most interesting information available from the NASA Api

## Technology Used

- Vanilla javascript, css, and html
- React, React-router-dom, React-animations, Styled-components, surge
- Embedded pictures and videos
- Linked a font from fonts.googleapis

## Theory


   
## Main Features

- Landing page links to login or create an account and takes you to the respective EJS files
- Using text and password inputs with req.body to pass them into their respective tables
- Profile page utilizes a few for-loops to display all the workouts in the Workout table as well as all the workouts tied to the current userId in the JOIN table
- BelongsToMany associations for both User and Workout classes
- Migration and seeder files to ensure Tables are correct in the database and that there are some workouts in the the table to choose initially
- YouTube embed links show as embedded videos in the workout show page
- package.json file has the required node module dependencies
- MVC architecture utilized for correct express and sequelize functionality
- Foreign and other keys to link the userId and workoutId primary keys
- Unique constraint added to JOIN table so the user cannot add the same workout twice

## User Stories

1. I want to see the homepage when I go to the URL
2. I should be able to signup as a new user
3. I should be able to login to my profile page as an existing user 
4. I should see how long my account has been active 
5. I want to see a list of all possible workouts 
6. I should be able to add to the “My Workouts” section of my profile a new workout
7. I want to have a link to any workouts added to My Workouts to see more info about that workout and/or edit the workout
8. There should be a link to an index page of all workouts with a link to create a new workout
9. I should be able to view the workout video without leaving the workout profile page
10. I should be able to logout
11. ACCORDING TO OUR "LEADER", THE PASSWORD SHOULD NOT BE DISPLAYED, lol


## What's left?

- The user can add an infinite number of unique workouts so the My Workouts section will continue down forever
- It would be better if the My Workouts were sorted by recently added instead of by workoutId
- Should be able to edit or remove a workout
- Be able to return back to the user profile page, after viewing the list of available workouts

## Challenges
- Accessing the user from a page that did not have the user's profile id
- Accesssing the join table directly
- Including images rather than links without restructuring the code (routes??)
- Coding with a collaborator

## Wireframe
![20210201_132114 (1)](https://user-images.githubusercontent.com/74585897/106974409-8180ca80-6709-11eb-9fd4-5d1922e19e2d.jpg)

<img width="731" alt="Untitled 3" src="https://user-images.githubusercontent.com/74585897/106975533-965e5d80-670b-11eb-8bf8-0c080da75be2.png">

















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
