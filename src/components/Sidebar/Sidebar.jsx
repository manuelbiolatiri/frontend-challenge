import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getUsers} from '../../actions/user'
import SideBarContact from './SideBarContact'
import { Link } from 'react-router-dom'
import jwtDecode from "jwt-decode";

function Sidebar() {
  const dispatch = useDispatch();
  const usee = useSelector(state => state.user.users);
  const [query, setQuery] = useState(false)
  const [_id, setId] = useState('')
  const [userIds, setUserIds] = useState([])

  const jwt = window.localStorage.getItem("currentUser");
  const result = jwtDecode(jwt);
  
  useEffect(() => {
    //Dispatch action to get users to redux store
    dispatch(getUsers);
    getUserById()
  }, [])

  const getUserById = () => {
    try {
      // fetch(`http://localhost:3003/users/${result.userId}`, {
      //   method: 'get',
      //   headers: {'Content-Type': 'application/json'}
      // })
      // .then((user) => {
      //   setId(result.userId)
      //  const idd = setUserIds(userIds.push(result.userId))
      //   console.log(user)
      //   console.log(userIds)
      // })
    } catch {

    }
  }

  const initiateRoom = () => {
    try {
      // fetch('http://localhost:3003/room/initiate', {
      //   method: 'post',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify({
      //     userIds: userIds,
      //     type: 'consumer-to-consumer'
      //   })
      // })
    } catch {

    }
  }

return (
      <div style={{overflowY:'auto', overflow: 'hidden'}}>
        <header className="header">
        {/* <LoggedinUser /> */}
        <div className="search">
        <input
            autoFocus
            type="text"
            className="s-input"
            value={query || ''}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
          />
        </div>
      </header>
       
        <aside className="sidebar">
        {usee.filter((c) => c.username.toLowerCase().includes((query || '').toLowerCase())).map((c) => (
            <Link className="link" key={c._id} to={'/messages/' + c._id}>
              <SideBarContact contact={c} />
            </Link>))}
        </aside>
      </div>
  )
}

export default Sidebar