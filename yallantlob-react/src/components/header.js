import React, { Component } from 'react';
import '../index.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Menu, Button, Image, Label, Grid, Popup, List, Modal, Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import ActionCable from 'action-cable-react-jwt';

class Headr extends Component {
  state = {
      J : " joined your ",
      I : " invited you to his ",
      jwt : localStorage.getItem('token'),
      user : JSON.parse(localStorage.getItem('user'))
  };
  componentWillMount()
  {
    let app = {};
    // console.log(JSON.parse(this.state.user));
      app.cable = ActionCable.createConsumer(`ws://localhost:3000/cable?id=${this.state.user.id}`)

      this.subscription = app.cable.subscriptions.create({channel: "NotificationsChannel"}, {
        connected: function() { console.log("cable: connected") },             // onConnect
        disconnected: function() { console.log("cable: disconnected") },       // onDisconnect
        received: (data) => {
          console.log("cable received: ", data);
          // let newNotifications = this.state.notifications;
          // newNotifications.push(data);
          // this.setState({ count : this.state.count + 1, notifications : newNotifications })
        }
      })

  }
//***************************** Variables ***********************************************
  NotifArray  = [
        {id:1, frndName:"Ahmed", imgSrc:"/images/person.png", msg:this.state.J, ordName:"breakfast", btn:"Order" },
        {id:2, frndName:"Islam", imgSrc:"/images/person.png", msg:this.state.I, ordName:"breakfast", btn:"Join" },
        {id:3, frndName:"Tarek", imgSrc:"/images/person.png", msg:this.state.I, ordName:"breakfast", btn:"Join" }
  ]

  AllNotifArray  = this.NotifArray.concat ([
        {id:4, frndName:"Ahmed", imgSrc:"/images/person.png", msg:this.state.J, ordName:"breakfast", btn:"Order" },
        {id:5, frndName:"Islam", imgSrc:"/images/person.png", msg:this.state.I, ordName:"breakfast", btn:"Join" },
        {id:6, frndName:"Tarek", imgSrc:"/images/person.png", msg:this.state.I, ordName:"breakfast", btn:"Join" },
        {id:7, frndName:"Ahmed", imgSrc:"/images/person.png", msg:this.state.J, ordName:"breakfast", btn:"Order" },
        {id:8, frndName:"Islam", imgSrc:"/images/person.png", msg:this.state.I, ordName:"breakfast", btn:"Join" },
        {id:9, frndName:"Tarek", imgSrc:"/images/person.png", msg:this.state.I, ordName:"breakfast", btn:"Join" }
  ] )


  homeLink = "/HomePage"
  friendsLink = "/Friends"
  groupsLink = "/Groups"
  ordersLink = "/Orders"
  notifNo = 3
  profilePic = "/images/person.png"


//*********************************************************************************************



  render() {
    return (
//*************************** Left Part *******************************************
      <Menu stackable size='small' className="main">
        <Menu.Item  className= "menuItem" >
          <img className="logo" src='/images/logo.png' alt="" />
          <span><h2>Yalla Order</h2></span>
        </Menu.Item>

        <Link to = {this.homeLink}>
            <Popup trigger={
              <Menu.Item  name='Home'>
              <Image src='/images/home.png' alt="" size='mini' />
              </Menu.Item>
            } content='Home' basic/>
        </Link>


        <Link to={this.friendsLink}>
            <Popup trigger={
              <Menu.Item name='Friends' >
              <Image src='/images/friends.png' alt="" height="40" width="50" />
              </Menu.Item>
            } content='Friends' basic/>
        </Link>

        <Link to={this.groupsLink}>
            <Popup trigger={
              <Menu.Item name='Groups' >
              <Icon name='group' size='big'/>
              </Menu.Item>
            } content='Groups' basic/>
          </Link>

        <Link to={this.ordersLink}>
        <Menu.Item name='Orders'>
            <h4><Image src='/images/order.png' alt="" size='mini' inline/> Orders </h4>
        </Menu.Item>
        </Link>

{/**************************** Right Part ********************************************/}
        <Menu.Menu position='right'>

{/**************************** Notifications ********************************************/}
        <Popup
            trigger={
              <Menu.Item name='notifications'>
                <Icon name='bell'  size='big' color={'blue'} /><Label color='red' className="notifyLabel">{this.notifNo}</Label>
              </Menu.Item>}
            flowing
            on='click'
        >
           <Grid>
              <Grid.Column textAlign='center'>

              <Item.Group>
                 {
                    this.NotifArray.map((i) => (
                      <Item key={i.id}>

                        <Item.Image size='mini' src={i.imgSrc} />

                        <Item.Content verticalAlign='middle'>
                          <Item.Header>
                            <h3>{i.frndName} {i.msg} {i.ordName} order &nbsp;</h3>
                          </Item.Header>
                          <Button compact width={10}>{i.btn}</Button>
                        </Item.Content>

                      </Item>
                    ))
                 }

              </Item.Group>

{/**************************** All Notifications ********************************************/}
              <Modal size={'tiny'} className="modal" trigger={<h4><a href="#" >View all notifications</a></h4>} scrolling="true">
                <Modal.Header className="modalHead">Your Notifications</Modal.Header>


               <Modal.Content>
                <Item.Group >
                  {
                    this.AllNotifArray.map((i) => (
                      <Item key={i.id}>

                        <Item.Image size='mini' src={i.imgSrc} />

                        <Item.Content verticalAlign='middle'>
                          <Item.Header>
                            <h3>{i.frndName} {i.msg} {i.ordName} order &nbsp;</h3>
                          </Item.Header>
                          <Button compact width={10}>{i.btn}</Button>
                        </Item.Content>

                      </Item>
                    ))
                  }

                </Item.Group>


              </Modal.Content>

               </Modal>

              </Grid.Column>

              </Grid>
            </Popup>



{/**************************** Profiel ********************************************/}
          <Menu.Item name='profile'>
            <Image circular src={this.profilePic} size='mini' />
            <span><h4>Ahmed</h4></span>
          </Menu.Item>


{/**************************** Logout ********************************************/}
          <Menu.Item>
          <Link to="/login">
          <Button primary animated size="big">
            <Button.Content visible><h4>Logout</h4></Button.Content>
              <Button.Content hidden>
             <Icon name='log out' size='large'/>
           </Button.Content>
          </Button>
          </Link>
          </Menu.Item>


        </Menu.Menu>

      </Menu>
    );
  }


}

export default Headr;
