import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Friends from '../components/Friends'
import Groups from '../components/Groups'
import Login from '../components/login'
import Register from '../components/register'


// when the pathname is exactly the string "/"
const Router = () => (
  <main>
    <Switch>
      <Route exact path='/HomePage' component={HomePage}/>
        <Route exact path='/Friends' component={Friends}/>
          <Route exact path='/Groups' component={Groups}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>

    </Switch>
  </main>
)

export default Router
