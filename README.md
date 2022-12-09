## Sample React Structure 

One of the best features of the framework is how it lets you make most of the decisions around tooling, build tools and folder structures, and you should embrace that. I hope this structure will give you more flexiblity in terms of coding & help you to build larger React applications with proper format.

This is the basic structure that will help you at the time of initial development of any project.

## Structure Overview
* /src/assets folder contains fonts, css (global) , images (static images)
* /src/api folder contains API calling handing with various switch case wise
* /src/components folder contains re-usable components
* /src/configs folder contains configuration related Project specific , third party related configuration, environment specific configuration etc...
* /src/constants folder contains API endpoint constants, messages or any static text
* /src/redux folder contains State management information and how data passing and storing in state object
* /src/routes folder contains splitting routing with public and private (those we have to access with OR without authenticaiton)
* /src/views folder contains module specific folders and in that those module specific files (.JS & .CSS)
* /src/utils folder contains utility files (independent files) 
* eslintrc.js (Code Standards rules)
* .env (Secure Configured details) 

## Prerequisites 
* React 16.14+
* NODE
* axios
* React Redux ^7.2.2 / Recoil / Redux toolkit / redux-saga / Zustand / redux-persist
* react-toastify (Toaster Notification)
* react-data-table-component (datatable)
* react-hook-form / Formik / simple-react-validator
* react-router-dom

## Installation
#### 1. Clone this project or Download that ZIP file

```sh
$ git clone https://bitbucket.org/pruthvidarji3110/sample-structure.git
```

#### 2. Make sure you have [npm](https://www.npmjs.org/) installed globally

More details [here](https://nodejs.org/en/download/)


#### 3. On the command prompt run the following commands

```sh
$ cd `project-directory`
```
```sh
$ npm install
```

### `npm start` or `yarn start`

Runs the app in development mode.
Open [http://localhost:3000/](http://localhost:3000/) to view it in the browser.


By default, for build generate and deploy on server then.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
By default, it also [includes a service worker](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app) so that your app loads from local cache on future visits.

## Developed By
Pruthvi Darji **pruthvid@zignuts.com**