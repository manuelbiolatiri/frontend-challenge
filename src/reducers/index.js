import { combineReducers } from 'redux'
import contacts from './contacts'
import users from './users'
import user from './user'
import messages from './messages'

const rootReducer = combineReducers({
  messages,
  users,
  user,
  contacts
})

export default rootReducer;
