import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../components/Home'
import Messages from '../components/Messages/Messages'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/messages/:id" component={Messages} />
    <Redirect to="/" />
  </Switch>
)
