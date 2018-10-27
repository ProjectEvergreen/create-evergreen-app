# create-evergreen-app
[![GitHub release](https://img.shields.io/github/tag/ProjectEvergreen/create-evergreen-app.svg)](https://github.com/ProjectEvergreen/create-evergreen-app/tags)
![CircleCI branch](https://img.shields.io/circleci/project/github/ProjectEvergreen/create-evergreen-app/master.svg?style=plastic)
[![GitHub issues](https://img.shields.io/github/issues-raw/ProjectEvergreen/create-evergreen-app.svg)](https://github.com/ProjectEvergreen/create-evergreen-app/issues)
[![GitHub issues](https://img.shields.io/github/issues-pr-raw/ProjectEvergreen/create-evergreen-app.svg)](https://github.com/ProjectEvergreen/create-evergreen-app/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/ProjectEvergreen/create-evergreen-app/master/LICENSE.md)

## Overview
A starter project for getting up and running with an evergreen web application development stack designed by, and for, today's [modern web](https://github.com/ProjectEvergreen/create-evergreen-app/wiki/Browser-Support-Matrix#evergreen-browsers).
![Create Evergreen App](https://s3.amazonaws.com/uploads.thegreenhouse.io/project-evergreen/create-evergreen-app-github-repo-banner.png)

### Project Goals
The goal of Project Evergreen is to march alongside the modern web and bring that to this repo so that both developers and users can benefit.  Evergreen Web Applications aim to be performant, promote usage of modern web features, be accessible to a wide range of users, and be a productive experience for developers.

#### Acknowledgements
This project is made by possible with the much appreciated existence of tools like:
- [webpack](https://webpack.js.org/) v4
- [LitElement](https://github.com/Polymer/lit-element)
- [Babel](https://babeljs.io/) v7 / [PostCSS](https://github.com/postcss/postcss)
- [Browserslist](https://github.com/browserslist/browserslist)
- [WebComponents.org](https://www.webcomponents.org/)

And of course, nods and kudos go out to the maintainers of [Create React App](https://github.com/facebook/create-react-app) (CRA) and Pascal Shlip (@thepassle) of [Create Lit App](https://github.com/thepassle/create-lit-app) for the inspiration.

Thank you, to all of you!

#### Under Development
This repo and Project Evergreen itself are still young and maturing rapidly.  The Project Evergreen GitHub organization [project tracker](https://github.com/ProjectEvergreen/project-evergreen/projects) captures the high level goals and next steps, with plans to keep adding those lessons learned as features and improvements to this repo. 

Immediate needs for this repo are:
- Routing 
- Route based code spliting + Lazy Loading 
- Opt-in IE11 Support
- Unit Testing w/ Karma
- Documentation

> 🙏 Please feel free to contribute, we are always looking forward to meeting like minded developers to collaborate with!

## Getting Started
Make sure you have Node.js 8.x [installed](https://nodejs.org/) and then follow these steps to get up and running:
```shell
# 1) create a new evergreen app
$ npx create-evergreen-app my-app
$ cd my-app

# 2) install dependencies
$ npm install

# or 

$ yarn install

# 3) Start developing!
$ npm start 

# or 

$ yarn start
```

> 📖 For more documentation and developer guides that cover topics like the build process, browser and device support, creating components, and more, please check out our [wiki](https://github.com/ProjectEvergreen/create-evergreen-app/wiki)!

## Usage
To start developing, you can simply go ahead and edit and add files as you need in `src/`.  

> ℹ️ Feel free to edit or delete any content / code related to Create Evergreen App (including README.md) to customize this repo to your own needs.

### Development
Automated tasks have been made available as **npm** scripts that you can run from the command line using `yarn` or `npm run`:
- `develop` - To start a development server with live reload and file watching
- `build` - Generate a production build of the app for deployment
- `serve` - Locally serve a production build
- `test` - Run unit tests in TDD mode (prepend with `NODE_ENV=production` for "single run" usage)
- `start` - alias to the `develop` task

e.g. to start developing, run
```shell
# yarn
$ yarn develop

or

# npm
$ npm run develop
```

### Package Management
Your team may choose to use either **npm** or **Yarn**, just make sure to pick one and remove the other manager's lock file.  Make sure to update the lock file whenever adding / removing a package.

### Guides
These are some guides related to configuring different parts of this application to customize it for your needs.

#### Folder Structure
There is no right or wrong folder structure per se as with most decisions relating to technology, it's about finding the best tool for the job.  Pick the conventions that fit your team / project best.

That said, CEA does come with with a lightly opinionated structure in the _src/_ directory as one of the main goals of a good folder structure should be to assist in the finding of  files / code faster and being predicatable.  Here is some info on the approach presented / suggested in this repo:
- _index.js_ - Main Entry point into the application (defined in _webpack.config.common.js_)
- _index.html_ - Defines the HTML "shell" of the application.
- _app/_ - The top level "app" component, that will be used to bootstrap the application.
- _components/_ - Essentially all the custom elements for an app will go here, encapsulating all reusable UI logic.
- _pages/_ - Routable states and / or views that users will navigate to within an application.
- _services/_ - Utilities for making (RESTful) API calls, convenience "wrappers" around browser APIs (Web Storage), etc.  These generally don't interact with the DOM (that's what components are for).

> Unit tests are recommended to be kept side by side with the component / `class` / etc.  For integration and E2E tests, consider making a _test/_ directory alongside the _src/_ directory and put those tests there.

#### Setting Up (API) Proxies
In _webpack.config.develop.js_ and _lws.config.js_ are sections for setting up proxies for routing requests, say to an API running in your development envrionment.  Edit the placeholders to match your particular needs.

#### CSS + Shadow DOM
// TODO

#### Performance
Performance is an important consideration for developing and maintaing any modern web application.  Out of the box, this project uses **webpack**'s [default settings for performance budgets](https://webpack.js.org/configuration/performance/) and will error when its thresholds are exceeded.  

The goal of this project will be to support good code splitting and lazy loading strategies by default to allow apps to scale horizontally as more pages / features / dependencies get added.

To learn more about performance best practices for modern web application development, check out the [wiki](https://github.com/ProjectEvergreen/create-evergreen-app/wiki/Performance).