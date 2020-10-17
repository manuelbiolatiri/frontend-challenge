import React from 'react'
import store from '../store'
import { addMessage } from '../actions'
import { pushUserMessage } from '../data/db-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

export default class MessageInput extends React.Component {

  state = {
    inputValue: '',
    latestMsg: ''
  }

  componentDidUpdate() {
    this.goToBottom()
  }

  handleChange = e => {
    this.setState({ inputValue: e.target.value })
  }

  goToBottom = () => {
    let elements = document.getElementsByClassName('msg')
    if (elements.length !== 0) {
      let element = elements[elements.length - 1]
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  onSubmit = e => {
    e.preventDefault()
    let text = this.state.inputValue
    const { ourID, hisID, userr } = this.props
    if (this.props.notUser) {
      store.dispatch(addMessage({ text, hisID, ourID, senderIsOurUser: false }))
    } else {
      if (text === '') return
      store.dispatch(addMessage({ text, hisID, ourID, senderIsOurUser: true }))
     
      console.log(pushUserMessage.unshift(userr.name))
      console.log(pushUserMessage)
     
const resultArr = pushUserMessage.reduce((acc,item)=>{
      if(!acc.includes(item)){
        acc.push(item);
      }
    return acc;
},[])
this.setState({latestMsg: resultArr})
// console.log(resultArr)
    }
    this.setState({ inputValue: '' })
  }

  render() {
const {latestMsg} = this.state;
    return (
      <div>
        {latestMsg ? 
latestMsg.map(c => (
  <p>{c}</p>
)) : ''}
        
      <form className="message-input">
        <div className="form-container">
          <input
            autoFocus
            type="text"
            className="msg-input"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Write a message"
          />
          <button className="send-btn" onClick={this.onSubmit.bind(this)}><span className="span">Send</span><FontAwesomeIcon icon={faPaperPlane} /></button>
        </div>
      </form>
      </div>
    )
  }
}
