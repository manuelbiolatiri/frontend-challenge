import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Register from './components/Register/Register'
import Signin from './components/Signin/Signin'
import Messages from './components/Messages/Messages'
// import Main from './components/main'
import ListUsers from './components/ListUsers'
// const { user } = require('./data/db-data')
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import ProtectedRoute from './components/protectedRoutes';
// import { authenticationService } from "./components/Services/authenticationService";

const App = () => {
  return (
        <div className="app">
          <div className="center-app">
            {/* <ListUsers/> */}
            {/* <Sidebar  /> */}
            {/* <Main /> */}

            <Router>

          <Switch>
            {/* <Route path="/" exact component={Landing} /> */}
            <Route path="/" exact component={Register} />
            <Route path="/signin" exact component={Signin}/>
            {/* <Route path="/chat" exact component={Sidebar}/> */}
            <ProtectedRoute path={'/chat'} exact component={Sidebar} />
            <ProtectedRoute path="/messages/:id" component={Messages} />
            {/* <ProtectedRoute path={'/dashboard'} exact component={Dashboard} />
            <ProtectedRoute
              path={'/confirmsell'}
              exact
              component={ConfirmSell}
            />
            <ProtectedRoute path={'/profile'} exact component={Profile} />
            <ProtectedRoute path={'/sell'} exact component={UploadForm} />
            <Route path="/404" component={ErrorPage} /> */}
            <Redirect from="*" to="/404" />
          </Switch>
      </Router>

          </div>
        </div>
  );
}

export default App;
