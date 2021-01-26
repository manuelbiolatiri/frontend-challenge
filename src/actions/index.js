import {FETCH_ROOMMESSAGES_REQUEST, FETCH_ROOMMESSAGES_SUCCESS, FETCH_ROOMMESSAGES_FAILURE} from './constants/actionTypes'

// export const addMessage = data => ({
//   type: ADD_MESSAGE,
//   payload: data
// })

export const fetchRoomRequest = () => {
    return {
        type: FETCH_ROOMMESSAGES_REQUEST
    }
}

export const fetchRoomSuccess = (data) => {
    return {
        type: FETCH_ROOMMESSAGES_SUCCESS,
        payload: data
    }
}

export const fetchRoomFailure = () => {
    return {
        type: FETCH_ROOMMESSAGES_FAILURE
    }
}


export const getRoomMessages =  ({chatRoomId, inputValue, ourID}) => {
  console.log("dispatched actions", chatRoomId)
  console.log("dispatched actions", inputValue)
  return function(dispatch) {
  try {
  //    fetch(`http://localhost:3003/room/${chatRoomId}/message`, {
  //      method: 'post',
  //      headers: {'Content-Type': 'application/json',
  //    'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiMDkwYWU4ODViNzE0NzJjOTUwNmE5MDhlMzAwZDgwMiIsInVzZXJUeXBlIjoiY29uc3VtZXIiLCJpYXQiOjE2MDY5MTIxOTR9.lkfs-o4ICMvYRsB-onVl0b6nq0_91qD6ECX0nvkupiE'},
  //    body: JSON.stringify({
  //     messageText: inputValue,
  //     ourID: ourID
  //   })
  // })
    //  .then(response => response.json())
    //      .then((msg) => {
    //          console.log("messageeeeee",msg)
    //          dispatch(fetchRoomSuccess(msg.dispatch.inputValue))
    //      })
     
         console.log('msg sent')
   }
   catch (e) {
         const errorMsg = e.message
         dispatch(fetchRoomFailure(errorMsg))
       console.log(e)
   }
  }
}

export const getMessages =  (chatRoomId) => {
  console.log("dispatched actions", chatRoomId)
  return function(dispatch) {
  try {
    // fetch(`http://localhost:3003/room/${chatRoomId}`, {
    //   method: 'get',
    //   headers: {'Content-Type': 'application/json'}
    // })
    //  .then(response => response.json())
    //      .then((msg) => {
    //          console.log("messageeeeee",msg)
    //          const msgs = msg.conversation.map(mm => mm.message)
    //          const mapmsgs = msgs.map(m => m.messageText)
    //          console.log("mapped message",msgs)
    //          console.log("mapped message",mapmsgs)
    //          dispatch(fetchRoomSuccess(mapmsgs))
    //      })
     
    //      console.log('msg sent')
   }
   catch (e) {
         const errorMsg = e.message
         dispatch(fetchRoomFailure(errorMsg))
       console.log(e)
   }
}
}

// const getChatsByRoomId = () => {
//   try {
//    fetch(`http://localhost:3003/room/${chatRoomId}`, {
//       method: 'get',
//       headers: {'Content-Type': 'application/json'}
//     })
//     .then(response => response.json())
//     .then((data) => {
//       console.log(data)
//       console.log(data.success)
//       console.log(data.user)
//     })
//   } catch {

//   }
// }