import React from 'react'
import store from '../../store'
import { Link } from 'react-router-dom'

const LoggedinUser = props => {
  const { pic, name} = store.getState().users.user
  return (
    <Link to="/" className="user link loggedin-user" style={{boxShadow:'none'}}>
      <div className="relative">
        <img src={pic} alt={name} className="user-pic" />
      </div>
      <div className="user-details">
        <p className="user-details-name">Hi, {name}</p>
      </div>
    </Link>
  )
}

export default LoggedinUser
