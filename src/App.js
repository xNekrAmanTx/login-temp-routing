import React from 'react';
import './App.css';

import Preview from './view/pages/preview'
import Home from './view/pages/home'
import LogIn from './view/pages/login'
import NotFound from './view/pages/notfound'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory
} from 'react-router-dom'

const App = () => {
  // const history = useHistory();

  return (
    <div className='App'>

      <Router>
        <Switch>

          {/* <Route path='/' component={() => <header><NavBar history /></header>} /> */}
          <Route exact path='/' component={Preview} />
          <Route path='/home' component={Home} />
          <Route path='/login' component={LogIn} />
          <Route component={NotFound} />

        </Switch>

      </Router>
    </div>
  )
}


export default App;
