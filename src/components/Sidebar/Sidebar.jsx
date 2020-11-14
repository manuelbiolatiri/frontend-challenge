import React, { Component } from 'react'
import SideBarContact from './SideBarContact'
import { Link } from 'react-router-dom'
import LoggedinUser from '../../components/Sidebar/LoggedInUser'
import { getUserByID } from '../../data/db-data'
import _ from 'lodash'

export default class Sidebar extends Component {

  state ={
    query: false
  }
  getUsersByIds = users => {
    let _users = []
    users.forEach(user => {
      _users.push(getUserByID(user.id))
    })

    return _users
  }

  render() {
    const { user } = this.props
    const users = this.getUsersByIds(user.contacts)
    console.log(users)
    return (
      <div style={{overflowY:'auto', overflow: 'hidden'}}>
        <header className="header">
        <LoggedinUser />
        <div className="search">
        <input
            autoFocus
            type="text"
            className="s-input"
            value={this.state.query || ''}
            onChange={(event) => this.setState({query: event.target.value})}
            placeholder="Search"
          />
        </div>
      </header>
         
        
        
       
        <aside className="sidebar">
        {users.filter((c) => _.toLower(c.name).includes(_.toLower(this.state.query || ''))).map((c) => (
            <Link className="link" key={c.id} to={'/messages/' + c.id}>
              <SideBarContact contact={c} />
            </Link>))}
        </aside>
      </div>
    )
  }
}
