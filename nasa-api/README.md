# Project 3 - MISC Space App

## Authors
Ana Cecilia Maldonado, Thomas Gores, and Jordan Dyar

## Images
## App link and Home Page
[Home Page Link]()

![Screen Shot 2021-02-24 at 1 38 29 PM](https://user-images.githubusercontent.com/74753181/109056237-d29b3300-76a5-11eb-9d3c-92c941ceab58.png)

### Wireframe
![IMG_8301 copy](https://user-images.githubusercontent.com/74725198/109069833-5dd0f480-76b7-11eb-82e4-1b51bcb97d5c.jpg)
![IMG_8302 copy 2](https://user-images.githubusercontent.com/74725198/109069972-8e189300-76b7-11eb-8f1e-2dc12cfc616b.jpg)

## Preview

Our take on a space app showing the most interesting information available from the NASA Api

## Technologies Used

- Javascript, CSS, React:
    - JSX, Axios, React-router-dom, React-animations, Styled-components, Surge
- NASA Open APIs
- Embedded pictures and videos
- Linked a font from fonts.googleapis

## Main Features

- Landing page welcomes the user to the App and shows interesting information that will be useful while navigating throughout the different components, providing access to the original web sites for more information.
- The navigation bar at the top of the web page will direct the user to each of the components from which API calls were made to pull data from:
    - **Picture of the Day:** Shows today's Astronomy Picture of the Day (APOD) along with a brief explanation written by a professional astronomer. This component will allow to display videos as well. https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
    - **Mars Rover Photos:** Shows the latest photos from the collection gathered by NASA's Curiosity rover on Mars along with the Earth date it was taken and the camera that was used. https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=DEMO_KEY
    - **Mars Weather:** Displays a per-Sol summary data for each of the last seven available Sols (Martian Days) taken from NASA’s InSight Mars lander that takes continuous weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia. This component allow the user to display a modal with a comparison between Mars and Earth's atmosphreic pressure.  https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0
    - **Image Library:** Shows a collection of photographs from Voyager (1980's) and Galileo's (2000's) missions, along with options to display modals with a brief summary of each of the missions as well as links to their NASA's websites. https://images-api.nasa.gov/search?q=voyager&year_start=1980&year_end=1981 & https://images-api.nasa.gov/search?q=galileo&year_start=2001&year_end=2002
    - **Near Earth Objects:** Displays a list of Asteroids based on their closes approach date to Earth including their name, size and potential hazardoudness. Links to detailed information for each Asteroid are included for the user to click. https://api.nasa.gov/neo/rest/v1/feed?start_date=2021-02-21&end_date=2021-02-23&api_key=DEMO_KEY

## User Stories

1. I want to see the homepage when I go to the URL
2. I want to see information of general interest about Mars on the Home page
3. I want to have an option to see detailed information on the subjects presented
4. I should have an option to go to any other page from the current page
5. I want to be able to return to the Home page from any other page 
6. I should be able to return to the top of the page easily
7. I should be able to click on a link to access an explanation of subjects unfamiliar to most people

## Goals
### Minimum Viable Product
+ Include 3 components, each of the consisting of an API request to NASA on different subjects ✔︎
+ The user should be able to navigate to each component with the option of going back to the home page✔︎
+ Include links to NASA's website for more information ✔︎

### Stretch Goal 1
+ Add more components with different subjects  ✔︎
+ Include modals to display additional information/links ✔︎
+ Add interesting information about the subject for the user to learn more  ✔︎

### Stretch Goal 2
+ The user will be able to query the data based on input dates.

### Strecth Goal 3
+ Photo carousel.

## Challenges
- Obtaining data from different end-points and and requests.
- Ensuring the dates had the appropriate format to be displayed consistently accross the components.
- API responding with an object insted of an array, which not allowed to "map" the response.


















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
