import React from 'react'
import store from '../store'

export default props => {
  const { name, pic} = store.getState().users.user
  return (
    <div className="home">
      <h1 className="home-name">Welcome back, {name} </h1>
      <div className="relative">
        <img src={pic} alt={name} className="home-img" />
      </div>
    </div>
  )
}
