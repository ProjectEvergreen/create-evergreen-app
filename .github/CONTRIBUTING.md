## Welcome!
We're excited for your interest in Project Evergreen, and maybe even your contribution!  To get onboarded, please review some of our docs:
- [Documentation / Wiki](https://github.com/ProjectEvergreen/project-evergreen/wiki)
- [Explanation of Labels](https://github.com/ProjectEvergreen/project-evergreen/labels)
- [Roadmap](https://github.com/ProjectEvergreen/project-evergreen/milestones)

## Issue Requests
Please make sure to have the following prepared (where applicable)
1. High Level Overview
1. Code Sample or Steps to Reproduce
1. Links / references

## Pull Requests
Please make sure an issue exists when submitting a PR that can be referenced and used to complete the PR template, as well as provided contextual information for reviewers.

## Making Changes
To develop for the project, you'll need the do follow these steps:
1. Have current [NodeJS LTS](https://nodejs.org) installed
1. Clone the repository
1. Run `npm ci`

### CEA Installer
The installer is run by `npx` and creates a new applicaition from the contents of the _template/_ directory.

To test changes to the installaer, run with whatever params you want to test
```shell 
$ node ./tasks/cea-installer my-app
```

You can then `cd my-app` and test the output.

### CEA Application
The actual CEA app is in _template/_.  To develop and make changes for CEA, do the following
1. `cd template`
1. `npm install` or `yarn install`

You can now run npm scripts and run the application.

### Unit Testing
Unit tests have been written for the installer and _template/_ files, that can be run using
```shell
$ npm test
```