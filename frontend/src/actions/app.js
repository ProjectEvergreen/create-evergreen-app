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
