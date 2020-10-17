import React from 'react'
import Chats from './Chats'
import store from '../../store'
import { getUserByID } from '../../data/db-data'
import MessageInput from '../../components/MessageInput'

const Messages = props => {
  const state = store.getState()
  const { myID } = state.users
  const { contacts } = state.users.user
  const { id } = props.match.params
  const usr = getUserByID(id)
  const { name, pic} = usr

  const msgs = contacts.find(contact => contact.id.toString() === id)

  return (
    <div>
      <header className="header">
        <div className="d-flex">
          <img src={pic} alt="" className="header-image" />
          <h1 className="header-name">{name}</h1>
        </div>
      </header>
      <Chats user={usr} messages={msgs} />
      <MessageInput ourID={myID} hisID={id} userr={usr}/>
    </div>
  )
}

export default Messages
