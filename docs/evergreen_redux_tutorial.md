
### Create New Evergreen Redux App

```bash
npx create-evergreen-app frontend
cd frontend && npm install
```
### Install additional dependencies

```bash
npm install --save axios pwa-helpers redux redux-thunk
```

### Setup Redux

Create two new folders in your new frontend application's src folder:

1. actions
2. reducers

Within each of those folders create a new blank app.js

Copy and paste the following, see [pwa-starter-kit](https://pwa-starter-kit.polymer-project.org/redux-and-state-management/) for a better guide on the use redux with lit-element

#### Actions:

src/actions/app.js
```js
import axios from 'axios';

export const GET_POSTS = 'get_posts';
export const GET_POST = 'get_post';

const apiUrl = process.env.API_URL || 'http://localhost:1337';

export const getPosts = () => async (dispatch) => {

  const req = await axios.get(`${apiUrl}/posts`);

  dispatch({
    type: GET_POSTS,
    payload: req.data
  });
};

export const getPost = (id) => async (dispatch) => {
  const req = await axios.get(`${apiUrl}/posts/${id}`);

  dispatch({
    type: GET_POST,
    payload: req.data
  });
};

```

#### Reducers:

src/reducers/app.js
```js
import {
  GET_POST,
  GET_POSTS
} from '../actions/app.js';

const INITIAL_STATE = {
  posts: []
};

const app = (state = INITIAL_STATE, { type, payload }) => {

  switch (type) {

    case GET_POST:
      return {
        ...state,
        post: payload
      };
    case GET_POSTS:
      return {
        ...state,
        posts: payload
      };
    default:
      return state;

  }

};

export default app;

```


### Create Redux Store

Create a new redux store:

src/store.js
```js
/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import {
  createStore,
  compose,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer.js';

import app from './reducers/app.js';

// Sets up a Chrome extension for time travel debugging.
// See https://github.com/zalmoxisus/redux-devtools-extension for more information.
const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Initializes the Redux store with a lazyReducerEnhancer (so that you can
// lazily add reducers after the store has been created) and redux-thunk (so
// that you can dispatch async actions). See the "Redux and state management"
// section of the wiki for more details:
// https://github.com/Polymer/pwa-starter-kit/wiki/4.-Redux-and-state-management
export const store = createStore(
  state => state,
  devCompose(
    lazyReducerEnhancer(combineReducers),
    applyMiddleware(thunk))
);

// Initially loaded reducers.
store.addReducers({
  app
});
```

### Dispatch and stateChanged

Now you can access the action and reducer from your component, for example:

src/components/PostList/PostList.js
```js
import { html, LitElement } from '@polymer/lit-element';
import { store } from '../../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { getPosts } from '../../actions/app.js';

class PostList extends connect(store)(LitElement) {
  static get properties() {
    return {
      id: Object,
      posts: Array,
      post: Object
    };
  }

  render() {
    return this.posts && html`
    <ul>
      ${this.posts.map(post => html`
        <li>
          <h1>{post.title}</h1>
        </li>
      `)}
    </ul>
    `;
  }

  constructor() {
    super();
    store.dispatch(getPosts());
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this.posts = state.app.posts;
    console.log('My Posts!', this.posts);
  }
}

customElements.define('post-list', PostList);
```