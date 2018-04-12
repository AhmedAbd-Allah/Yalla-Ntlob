import React, { Component } from 'react';
import '../index.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Menu, Button, Image, Label, Grid, Popup, List, Modal, Item } from 'semantic-ui-react'
import { Link, NavLink} from 'react-router-dom';
import axios from 'axios';
import ActionCable from 'action-cable-react-jwt';
//*** initialize local storage values to avoid error at the first beggining login
// if (localStorage.getItem('inviteNotif')=== null){
  // console.log("sssssssssssssssssss55555")
  // localStorage.setItem('inviteNotif', JSON.stringify([{order_id: 0, status: "", msg: ""}]))
// }


localStorage.setItem('popNo', JSON.stringify(0))

class Headr extends Component {
  logout=()=>{
    // localStorage.removeItem('token');
    // localStorage.removeItem('user');
    localStorage.clear();
    console.log("logour=t")
  }
  state = {
      J : " joined your ",
      I : " invited you to his ",
      jwt : localStorage.getItem('token'),
      user : JSON.parse(localStorage.getItem('user')),

      inviteNotif:JSON.parse(localStorage.getItem('inviteNotif')),
      popNo:JSON.parse(localStorage.getItem('popNo')),
      popNot:[]
  };
  componentWillMount(){
    let app = {};
      app.cable = ActionCable.createConsumer(`ws://localhost:3000/cable?id=${this.state.user.id}`)

      this.subscription = app.cable.subscriptions.create({channel: "NotificationsChannel"}, {
        connected: function() { console.log("cable: connected") },             // onConnect
        disconnected: function() { console.log("cable: disconnected") },       // onDisconnect
        received: (data) => {
          console.log("cable received: ", data);
          ///**** {order_id: 18, status: "invite", msg: "aliaa invited you to join his Breakfast order"}

          let appendNotif = this.state.inviteNotif != null? this.state.inviteNotif : []
          appendNotif.push(data)
          this.setState({ 
                          popNo : this.state.popNo + 1,
                          inviteNotif :  appendNotif
                        })

          localStorage.setItem('popNo', JSON.stringify(this.state.popNo))
          localStorage.setItem('inviteNotif', JSON.stringify(this.state.inviteNotif))
          console.log(this.state.popNo)
          console.log(this.state.inviteNotif)
        }
      })

  }

  clearPop = ()=>{
    localStorage.setItem('popNo', JSON.stringify(0))
    this.setState({popNo: 0})
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



//*********************************************************************************************



  render() {
    return (
//*************************** Left Part *******************************************
      <Menu stackable size='small' className="main">
        <Menu.Item  className= "menuItem" >
          <img className="logo" src='/images/logo.png' alt="" />
          <span><h2>Yalla Order</h2></span>
        </Menu.Item>

        <Link to = "/HomePage">
            <Popup trigger={
              <Menu.Item  name='Home'>
              <Image src='/images/home.png' alt="" size='mini' />
              </Menu.Item>
            } content='Home' basic/>
        </Link>


        <Link to="/Friends">
            <Popup trigger={
              <Menu.Item name='Friends' >
              <Image src='/images/friends.png' alt="" height="40" width="50" />
              </Menu.Item>
            } content='Friends' basic/>
        </Link>

        <Link to="/Groups">
            <Popup trigger={
              <Menu.Item name='Groups' >
              <Icon name='group' size='big'/>
              </Menu.Item>
            } content='Groups' basic/>
          </Link>

        <Link to="/Orders">
        <Menu.Item name='Orders'>
            <h4><Image src='/images/order.png' alt="" size='mini' inline/> Orders </h4>
        </Menu.Item>
        </Link>

{/**************************** Right Part ********************************************/}
        <Menu.Menu position='right'>

{/**************************** Notifications ********************************************/}
        <Popup
            trigger={
              <Menu.Item name='notifications' onClick={this.clearPop.bind(this)}>
                <Icon name='bell'  size='big' color={'blue'} />
                {this.state.popNo > 0 ? <Label color='red' className="notifyLabel">{this.state.popNo}</Label> :""}
              </Menu.Item>}
            flowing
            on='click'
        >
           <Grid>
              <Grid.Column textAlign='center'>

              <Item.Group>
                 {
                    this.state.inviteNotif != null?
                    this.state.inviteNotif.map((i) => (
                      <Item key={i.order_id}>

                        <Item.Image size='mini' src={i.imgSrc} />

                        <Item.Content verticalAlign='middle'>
                          <Item.Header>
                            <h3>{i.msg}&nbsp;</h3>
                          </Item.Header>

                          { i.status == "join"?
                              <Link  to={`/OrderDetails/${i.order_id}`}>
                              <Button compact width={10}>Check</Button>
                              </Link>
                            :
                              <Link to={`/myOrder/${i.order_id}`}>
                              <Button compact width={10}>Join</Button>
                              </Link>
                          }

                        </Item.Content>

                      </Item>
                    )) : "" 
                 }

              </Item.Group>

{/**************************** All Notifications ********************************************/}
              <Modal size={'tiny'} className="modal" trigger={<h4><a href="#" >View all notifications</a></h4>} scrolling="true">
                <Modal.Header className="modalHead">Your Notifications</Modal.Header>


               <Modal.Content>
                <Item.Group >
                  {
                      this.state.inviteNotif != null?
                      this.state.inviteNotif.map((i) => (
                      <Item key={i.order_id}>

                        <Item.Image size='mini' src={i.imgSrc} />

                        <Item.Content verticalAlign='middle'>
                          <Item.Header>
                            <h3>{i.msg}&nbsp;</h3>
                          </Item.Header>

                          { i.status == "join"?
                              <Link to={`/OrderDetails/${i.order_id}`}>
                              <Button compact width={10}>Check</Button>
                              </Link>
                             :
                              <Link to={`/myOrder/${i.order_id}`}>
                              <Button compact width={10}>Join</Button>
                              </Link>
                          }

                        </Item.Content>

                      </Item>
                    )) : ""
                  }

                </Item.Group>


              </Modal.Content>

               </Modal>

              </Grid.Column>

              </Grid>
            </Popup>



{/**************************** Profiel ********************************************/}
          <Menu.Item name='profile'>
            <Image circular src={JSON.parse(localStorage.getItem('user')).image} size="mini" />
            <span><h4>{JSON.parse(localStorage.getItem('user')).name}</h4></span>
          </Menu.Item>


{/**************************** Logout ********************************************/}
          <Menu.Item>
    <Link to="/login">
          <Button primary animated size="big" onClick={()=>{this.logout()}}>
            <Button.Content visible><h4>Logout</h4></Button.Content>
              <Button.Content hidden onclick={()=>this.logout()}>
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
