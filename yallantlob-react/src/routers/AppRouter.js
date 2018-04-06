import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Friends from '../components/Friends'
import Groups from '../components/Groups'



// when the pathname is exactly the string "/"
const Router = () => (
  <main>
    <Switch>
      <Route exact path='/HomePage' component={HomePage}/>
        <Route exact path='/Friends' component={Friends}/>
          <Route exact path='/Groups' component={Groups}/>
    </Switch>
  </main>
)

export default Router
