import React, {useState, useEffect} from 'react';
import './App.css';

import Header from './components/header'
import Preview from './view/pages/preview'
import Home from './view/pages/home'
import LogIn from './view/pages/login'
import Admin from './view/pages/admin'
import NotFound from './view/pages/notfound'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

const App = () => {
  const [username, setUsername] = useState(localStorage.getItem('username'))

  useEffect(()=>{
    function usernameHandler(){
      setUsername(localStorage.getItem('username'))
    }
    window.addEventListener('storage',usernameHandler);
    return window.removeEventListener('storage',usernameHandler)
  })

  return (
    <div className='App'>

      <Router>
        <Header username = {username}/>
        <Switch>

          {/* <Route path='/' component={() => <header><NavBar history /></header>} /> */}
          <Route exact path='/' component={Preview} />
          <Route path='/home' render={()=> <Home username = {username}/>} />
          <Route path='/login'>
            {username ? <Redirect to="/home" /> : < LogIn/>}
          </Route>
          <Route path='/admin' component={Admin} />
          <Route component={NotFound} />

        </Switch>

      </Router>
    </div>
  )
}


export default App;
