import React, {useState, useEffect} from 'react'
// import store from '../store'
import { getRoomMessages } from '../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux';
import io from 'socket.io-client'

// const socket = io.connect('http://localhost:3003')

 const MessageInput = (props) => {
  const dispatch = useDispatch();
 const [inputValue, setInputValue] = useState('')

 useEffect(() => {
  goToBottom()
 }, [])


  const handleChange = e => {
    setInputValue( e.target.value )
  }

  const goToBottom = () => {
    let elements = document.getElementsByClassName('msg')
    if (elements.length !== 0) {
      let element = elements[elements.length - 1]
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const onSubmit = e => {
    e.preventDefault()

    const { ourID, hisID, chatRoomId } = props
    // socket.on('subscribe', ({ name, message }) => {
    //   setChat([...chat, { name, message }])
    // })
    if (!chatRoomId) {
      console.log("no chat room found")
      // store.dispatch(addMessage({ text, hisID, ourID, senderIsOurUser: false }))
    } else {
      // if (inputValue === '') return
      // socket.on('subscribe', ({ hisID, ourID, chatRoomId, inputValue}) => {
      // dispatch(getRoomMessages({hisID, ourID, chatRoomId, inputValue}))
      // store.dispatch(addMessage({ text, hisID, ourID, senderIsOurUser: true }))
    // })}
    // setInputValue('')
  }
  }

    return (
      <form className="message-input">
        <div className="form-container">
          <input
            autoFocus
            type="text"
            className="msg-input"
            value={inputValue}
            onChange={handleChange}
            placeholder="Write a message"
          />
          <button className="send-btn" onClick={onSubmit}><span className="span">Send</span><FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
      </form>
    )
  }

  export default MessageInput