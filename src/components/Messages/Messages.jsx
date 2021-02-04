import React, {useEffect, useState, useRef} from 'react';
import jwtDecode from "jwt-decode";
import Chats from './Chats'
// import store from '../../store'
// import { getUserByID } from '../../data/db-data'
import MessageInput from '../../components/MessageInput'
import photo from '../../assets/img/meee.JPG'
import { useDispatch, useSelector } from 'react-redux';
import { getMessages } from '../../actions'
import io from "socket.io-client";
import axios from 'axios'


const Messages = props => {
  const dispatch = useDispatch();
  const usee = useSelector(state => state.user.users);
  const jwt = JSON.parse(window.localStorage.getItem("currentUser"));
  
  const resultparse = jwt.token;
    const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [lastMessage, setLastMessage] = useState(null);
  const [connected, setConnected] = useState(false);


  let chatBottom = useRef(null);

  useEffect(() => {
    reloadMessages();
    scrollToBottom();
  }, [lastMessage]);

  useEffect(() => {
    const socket = io(process.env.REACT_APP_API_URL);
    console.log('useeffect! to server');
    console.log(socket.id)
    socket.on("messages", (data) => setLastMessage(data));

      
  }, []);
 const scrollToBottom = () => {
    chatBottom.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

const {id} = props.match.params
// console.log(id)
  const reloadMessages = () => {
    if ('conversationId' == 'conversationId') {
     axios.get(`http://localhost:3007/api/messages/conversations/query?userId=${id}`,
        {headers: {
          Authorization: resultparse
        }})
      .then((res) => setMessages(res.data));
    } else {
      setMessages([]);
    }
  };

 

  const requestOption = {
    method: 'POST',
    headers: {Authorization: resultparse,'Content-Type': 'application/json'},
    body: JSON.stringify({ to: id, body: newMessage }),
};
  const handleSubmit = (e) => {
    
    e.preventDefault(); 
    fetch(`http://localhost:3007/api/messages`,requestOption ).then((res) => {
      // reloadMessages();
          // console.log("last mesg",lastMessage)
        setNewMessage("");
      });
    
  };

  return (
    <div style={{width: '100%'}}>
      <header className="header" >
        <div className="d-flex">
          <img src={photo} alt="" className="header-image" />
          <h1 className="header-name" style={{color:'black'}}>username</h1><br/>
        </div>
      </header>
      <div style={{display: "flex"}}>
      <div style={{width: '30%',backgroundColor: 'blue'}}>

      </div>
      <div style={{width: '70%',  height:'650px', backgroundColor: 'green'}}>
          <div style={{ maxHeight:'90%', overflowY: 'scroll'}}>
          {messages && 
                    messages.map(dd => <div style={{border:'1px solid green ', marginLeft:'20rem', borderRadius: '7px', backgroundColor:'yellow', marginTop: '7px'}} key={dd._id}>{dd.body}</div>)
                    }
            <div ref={chatBottom} />
          </div>
          <div style={{height:'10%'}}>
          <form style={{ margin: '5px auto'}}>
            <div className="form-container">
              <input
                autoFocus
                type="text"
                className="msg-input"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Write a message"
              />
              <button className="send-btn" onClick={handleSubmit}><span className="span">Send</span></button>
            </div>
            </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Messages
