# create-evergreen-app

## Overview
A starter project for getting up and running with an evergreen web application development stack designed for today's modern browsers.  

### Project Goals
The goal of Project Evergreen is to march alongside the modern web and bring that information to this project so that the both developers and users can benefit.  Evergreen Web Applications aim to be performant, promote usage of modern web features, be accessible to a wide range of users, and be a productive experience for developers.

### Acknowledgements
This project is made by possible with the much appreciated existence of tools like:
- [webpack](https://webpack.js.org/) v4
- [LitElement](https://github.com/Polymer/lit-element)
- [Babel](https://babeljs.io/) v7 / [PostCSS](https://github.com/postcss/postcss)
- [Browserslist](https://github.com/browserslist/browserslist)
- [WebComponents.org](https://www.webcomponents.org/)

And of course, nods and kudos go out to the maintainers of [Create React App](https://github.com/facebook/create-react-app) (CRA) and Pascal Shlip (@thepassle) of [Create Lit App](https://github.com/thepassle/create-lit-app) for the inspiration.

Thank you to all of you!

#### Under Development
This repo and Project Evergreen itself are still young and maturing rapidly.  The Project Evergreen GitHub organization [project tracker](https://github.com/ProjectEvergreen/project-evergreen/projects) captures the high level goals and next steps, with plans to keep adding those lessons learned as features and improvements to this repo. 

Immediate needs for this repo are:
- Routing 
- Route based code spliting + Lazy Loading 
- Unit Testing w/ Karma
- [Proper installation steps]()
- Documentation

> 🙏 Please feel free to contribute, we are always looking forward to meeting like minded developers to collaborate with!

## Getting Started
Make sure you have Node.js 8.x [installed]() and then follow these steps to get up and running in minutes:
1. Clone the repo `git clone https://github.com/ProjectEvergreen/create-evergreen-app.git my-app`
1. Run `npm install`
1. Run `npm start`

> 📖 For more documentation and developer guides,  please check out our [wiki](https://github.com/ProjectEvergreen/project-evergreen/wiki)!


## Usage
To start developing, you can simply go ahead and edit and add files as you need.  Most of the build stuff should already be in place, so all you need to do is start editing `src/`.  

> ℹ️ Feel free to edit or delete any content / code related to Project Evergreen to customize this repo to your own needs.

### Development
Automated tasks have been made available as **npm** scripts that you can run from the command line:
- `npm run develop` - To start a development server with live reload and file watching
- `npm run build` - Generate a production build of the app for deployment
- `npm run serve` - Locally serve a production build
- `npm start` - alias to the `develop` task

### Guides
These are some guides related to configuring different parts of this application to customize it for your needs.

#### Setting Up (API) Proxies
In _webpack.config.develop.js_ and _lws.config.js_ are sections for setting up proxies for routing requests, say to an API running in your development envrionment.  Edit the placeholders to match your particular needs.

#### CSS + Shadow DOM
// TODO
