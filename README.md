# Contacts React Project
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Prerequisites](#prerequisites)
- [How to launch the app locally](#how-to-launch-the-app-locally)
  - [Installation](#installation)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Getting Started
I am using Gulptask runner to compile scss and launch the application locally.
Grunt task and ImageMagick tool is used to create responsive images.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.js
    index.css
    index.js
    CreateContact.js
    ImageInput.js
    ListContact.js
    icons/
    utils/
      ContactsAPI.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Prerequisites
* ES6, Promises, REACT

### Server for Contacts Project
This is a backend server for this Contacts app project. This project is part of Udacity's React Nanodegree program.
[Clone and Run this Server](https://github.com/gauravsinghaec/reactnd-contacts-server)
```
The Server will be running at http://localhost:5001 URL
```
You'll build the front end of the Contacts app throughout the course. Because the course is on React and doesn't cover Node or servers, we've built this server and an API to interact with it so can focus on building the front end portion of the project in React.

## How to launch the app locally?

### Installation

1. Clone the Project - `https://github.com/gauravsinghaec/FEND-Contacts-App-React.git`
2. Go into the directory where the project now lives - `cd FEND-Contacts-App-React`
3. Install the dependencies - `npm install`
4. Start the app - `npm start`
```
The application will be running at http://localhost:3000 URL
```

## Authors
* **Gaurav Singh**

## Acknowledgments
* **Special thanks to Udacity Team**
