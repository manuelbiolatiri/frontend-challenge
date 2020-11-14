import React from 'react'

const classes = isUser => {
  return isUser ? 'msg message-user' : 'msg message'
}

const Message = props => {
  return (
  <p className={classes(props.message.isThisUser)}>{props.message.content} {props.message.sentOn.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit', hour12: true})}</p>
  )
}

export default Message
