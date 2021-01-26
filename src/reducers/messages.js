import {FETCH_ROOMMESSAGES_REQUEST, FETCH_ROOMMESSAGES_SUCCESS, FETCH_ROOMMESSAGES_FAILURE} from '../actions/constants/actionTypes'

const initialState = {
  messages: [],
  loading: false
}
  
  const messageReducer = (state = initialState, action) => {
    console.log("action for messages", action)
    console.log("action in messages", action.payload)
    switch (action.type) {

      case FETCH_ROOMMESSAGES_REQUEST: {
        return {
          ...state,
          loading: true
        };
      }

      case FETCH_ROOMMESSAGES_SUCCESS: {
        console.log("reducerrrr",action.payload)
        return {
          ...state,
          messages: action.payload,
          loading: false
        };
      }

      case FETCH_ROOMMESSAGES_FAILURE: {
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
  
  export default messageReducer;