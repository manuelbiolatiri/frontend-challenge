import React from 'react'
import Message from './Message'
import {} from '../../actions'

const Chats = props => {
  const renderChat = () => {
    const { messages, user } = props
    if (messages.messages.length === 0) {
      return (
        <div>
          <h4 style={{color:'gray'}}>No previous messages with {user.name}, say hi !</h4>
        </div>
      )
    } else {
      return messages.messages.map((msg, i) => (
        <Message key={'msg' + i} message={msg} />
      ))
    }
  }

  return (
    <div className="messages" id="msgg">
      {renderChat()}
    </div>
  )
}

export default Chats
