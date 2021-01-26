import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE} from '../actions/constants/actionTypes'

const initialState = {
    users: [],
    loading: false
  }
  
  const userReducer = (state = initialState, action) => {
    console.log("action in reducers", action)
    console.log("action in reducers", action.payload)
    switch (action.type) {

      case FETCH_USERS_REQUEST: {
        return {
          ...state,
          loading: true
        };
      }

      case FETCH_USERS_SUCCESS: {
        return {
          ...state,
          users: action.payload,
          loading: false
        };
      }

      case FETCH_USERS_FAILURE: {
        return {
          ...state,
          users: [],
          loading: false,
          error: action.payload
        };
      }
  
      default:
        return state;
    }
  }
  
  export default userReducer;