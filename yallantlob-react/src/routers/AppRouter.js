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



      <Route exact path="/HomePage" render={() => (
        localStorage.getItem('user') ? (
          <Route exact path='/HomePage' component={HomePage}/>
        ) : (
            <Redirect to="/login"/>
        )
      )}/>

      <Route exact path="/Friends" render={() => (
        localStorage.getItem('user') ? (
            <Route exact path='/Friends' component={Friends}/>
        ) : (
            <Redirect to="/login"/>
        )
      )}/>


      <Route exact path="/Groups" render={() => (
        localStorage.getItem('user') ? (
            <Route exact path='/Groups' component={Groups}/>
        ) : (
            <Redirect to="/login"/>
        )
      )}/>

      <Route exact path="/login" render={() => (
        localStorage.getItem('user') ? (
              <Redirect to="/HomePage"/>
        ) : (
          <Route exact path='/login' component={Login}/>
        )
      )}/>

      <Route exact path="/register" render={() => (
        localStorage.getItem('user') ? (
              <Redirect to="/HomePage"/>
        ) : (
        <Route exact path='/register' component={Register}/>
        )
      )}/>


      <Route exact path="/MyOrder" render={() => (
        localStorage.getItem('user') ? (
          <Route exact path='/MyOrder' component={MyOrder}/>
        ) : (
          <Redirect to="/login"/>
        )
      )}/>



      <Route exact path="/Orders" render={() => (
        localStorage.getItem('user') ? (
         <Route exact path='/Orders' component={Orders}/>
        ) : (
          <Redirect to="/login"/>
        )
      )}/>


          <Route exact path="/OrderDetails/:id" render={() => (
            localStorage.getItem('user') ? (
             <Route exact path='/Orders' component={Orders}/>
            ) : (
              <Redirect to="/login"/>
            )
          )}/>

          <Route exact path="/createOrder" render={() => (
            localStorage.getItem('user') ? (
              <Route exact path='/createOrder' component={createOrder}/>
            ) : (
              <Redirect to="/login"/>
            )
          )}/>

      <Route exact path='/*' component={Error}/>


    </Switch>
  </main>
)

export default Router
