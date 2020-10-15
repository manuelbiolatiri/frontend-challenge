import React from 'react'
import { Provider } from 'react-redux'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/main'
import store from './store'
const { user } = require('./data/db-data')

const App = () => {
  return (
    <Provider store={store}>
        <div className="app">
          <div className="center-app">
            <Sidebar user={user} />
            <Main />
          </div>
        </div>
      </Provider>
  );
}

export default App;
