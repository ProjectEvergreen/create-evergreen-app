# Evergeen Blog Using Redux With Headless CMS 

- Requires Mongo already installed

## Overview

![evergreen-strapi-example](./docs/screenshot.png)


### Example

```
npm install --prefix frontend && npm install --prefix api
cd api && npm start
cd ../frontend && npm start
```

You need to register and create some posts first in strapi at http://localhost:1337/admin

Once you've created posts on your API, you should be able to view the demo at http://localhost:1981

## Strapi Headless CMS Setup

See [strapi_tutorial.md](./docs/strapi_tutorial.md) for headless CMS setup. Once complete, you should be able to access all your posts at http://localhost:1337/posts

## Evergreen Redux App

See [evergreen_redux_tutorial.md](./docs/evergreen_redux_tutorial.md) for how to use redux in an evergreen app with a strapi or other REST API.

