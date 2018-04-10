import React from 'react'
import { Switch, Route,Redirect } from 'react-router-dom'
import HomePage from '../components/HomePage'
import Friends from '../components/Friends'
import Groups from '../components/Groups'
import Login from '../components/login'

import Register from '../components/register'

import MyOrder from '../components/MyOrder'
import Orders from '../components/orders'
import OrderDetails from '../components/OrderDetails'
import Error from '../components/Error404'
import createOrder from '../components/createOrder'





// when the pathname is exactly the string "/"
const Router = () => (
  <main>
    <Switch>


      <Route exact path="/" render={() => (
        localStorage.getItem('user') ? (
          <Redirect to="/HomePage"/>
        ) : (
            <Redirect to="/login"/>
        )
      )}/>


      <Route exact path='/HomePage' component={HomePage}/>

        <Route exact path='/Friends' component={Friends}/>
          <Route exact path='/Groups' component={Groups}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/register' component={Register}/>

      <Route exact path='/login' component={Login}/>
      <Route exact path='/Friends' component={Friends}/>
  	  <Route exact path='/Groups' component={Groups}/>
  	  <Route exact path='/MyOrder' component={MyOrder}/>
  	  <Route exact path='/Orders' component={Orders}/>
      <Route exact path='/OrderDetails/:id' component={OrderDetails}/>
      <Route exact path='/createOrder' component={createOrder}/>
      <Route exact path='/*' component={Error}/>


    </Switch>
  </main>
)

export default Router
