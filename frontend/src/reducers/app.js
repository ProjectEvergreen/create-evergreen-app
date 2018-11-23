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
