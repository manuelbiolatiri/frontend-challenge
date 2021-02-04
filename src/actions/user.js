import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from './constants/actionTypes';
import axios from 'axios';

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: data,
  };
};

export const fetchUsersFailure = () => {
  return {
    type: FETCH_USERS_FAILURE,
  };
};

export const getUsers = (dispatch) => {
  console.log('in actions');
  try {
    fetch('http://localhost:3007/api/users', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZTQ5MWUyMTA3MWRkNGZiOGI4ZmNmYiIsIm5hbWUiOiJtYW51ZWwyIiwiaWF0IjoxNjA4ODE1NTg1LCJleHAiOjE2NDAzNzI1MTF9.y8rmUEEuj7AS31-EaKNB8DXufmP9xr0hXvKwjtBxNV4',
      },
    })
      .then((response) => response.json())
      .then((user) => {
        console.log('userss', user);
        dispatch(fetchUsersSuccess(user));
        console.log('usersss', user.users);
      });

    console.log('qwertyqwertyqwerty');
  } catch (e) {
    const errorMsg = e.message;
    dispatch(fetchUsersFailure(errorMsg));
    console.log(e);
  }
};
