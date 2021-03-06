## Shopee Currency<br>
This project made for Shopee Front End Test.<br>
Created with Facebook create-react-app.<br>
Run with local server running at docker (docker compose) http://localhost:3000/ in Google Chrome browser.<br>
Provided with unit testing (npm testing).<br>
Environment version:<br>
1. node 10.13.0<br>
2. npm 6.4.1<br>
3. react 16.6.0<br><br>

With the structure of the project:<br>
`shopee-currency-app`<br>
+<br>
+<br>
+build<br>
+node_modules<br>
+public<br>
+src<br>
+++ config<br>
++++++++ config.js (`main configuration`)<br>
+++ currency<br>
++++++++ CurrencyConverter.js (`part of APP.js converting function`)<br>
++++++++ CurrencyNaming.js (`part of APP.js naming function`)<br>
+++ helper<br>
++++++++ Helper.js (`helper function`)<br>
+++ APP.css<br>
+++ APP.js (`main source for index.js`)<br>
+++ APP.test (`testing unit`)<br>
+++ index.css<br>
+++ index.js (`index file`)<br>
+++ serviceWorker.js<br>
+++ logo<br>
+Dockerfile<br>
+docker-compose.yml<br>
+package.json<br>
+package-lock.json<br>
+README<br><br>
<hr>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
