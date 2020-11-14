import React from 'react'

const SideBarContact = props => {
  const { pic, name} = props.contact

  return (
    <div className="user">
      <div className="relative">
        <img src={pic} alt={name} className="user-pic" />
      </div>
      <div className="user-details">
        <p className="user-details-name">{name}</p>
      </div>
    </div>
  )
}

export default SideBarContact
