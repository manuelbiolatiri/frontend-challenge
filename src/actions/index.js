import {
  ADD_MESSAGE
} from './constants/actionTypes'

export const addMessage = data => ({
  type: ADD_MESSAGE,
  payload: data
})
