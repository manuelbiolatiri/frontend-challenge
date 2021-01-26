import React from 'react'

const classes = isUser => {
  return isUser ? 'msg message-user' : 'msg message'
}

const Message = props => {
  return (
  <p className={classes(props.message)}>{props.message} </p>
  )
}

export default Message
