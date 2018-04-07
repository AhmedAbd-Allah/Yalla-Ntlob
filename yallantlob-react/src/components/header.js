import React, { Component } from 'react';
import '../index.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Menu, Button, Image, Label, Grid, Popup, List, Modal, Item } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


class Headr extends Component {
  constructor(props){
    super(props)
    this.state = {}

// Variables:
    this.homeLink = "/HomePage"
    this.friendsLink = "/Friends"
    this.groupsLink = "/Groups"
    this.ordersLink = "/Orders"
    this.notifNo = 3
    this.profilePic = "images/person.png"

    var J = " joined your "
    var I = " invited you to his "
    this.NotifArray  = [
      {id:1, frndName:"Ahmed", imgSrc:"images/person.png", msg:"J", ordName:"breakfast", btn:"Order" },
      {id:2, frndName:"Islam", imgSrc:"images/person.png", msg:"I", ordName:"breakfast", btn:"Join" },
      {id:3, frndName:"Tarek", imgSrc:"images/person.png", msg:"I", ordName:"breakfast", btn:"Join" }

    ] 


///////////////////////////////////////////
  }
  
  handleItemClick = (e, { name }) => {this.setState({ activeItem: name })}

  render() {

  //   var notifElements = this.NotifArray.map((i)=>{
  //     return 
  //     ( 
  //         <Item>

  //           <Item.Image size='mini' src={i.imgSrc} />

  //           <Item.Content verticalAlign='middle'>
  //             <Item.Header>
  //               <h3>{i.frndName} {i.msg} {i.ordName} order &nbsp;</h3>
  //             </Item.Header>
  //             <Button compact width={10}>{i.btn}</Button>
  //           </Item.Content>

  //         </Item>
  //     );  
  //   })
  //   return notifElements
  // }


    const { activeItem } = this.state
    return (
      <Menu stackable size='small' className="main">
        <Menu.Item className= "menuItem" >
          <img className="logo" src='images/logo.png' alt="" />
          <span><h2>Yalla Order</h2></span>
        </Menu.Item>

        <Link to = {this.homeLink}>
            <Popup trigger={
              <Menu.Item  name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>
              <Image src='images/home.png' alt="" size='mini' />
              </Menu.Item>
            } content='Home' basic/>
        </Link>
         
        <Link to={this.friendsLink}>  
            <Popup trigger={
              <Menu.Item name='Friends' active={activeItem === 'Friends'} onClick={this.handleItemClick}>
              <Image src='images/friends.png' alt="" height="40" width="50" /> 
              </Menu.Item>
            } content='Friends' basic/>
        </Link>
      
        <Link to={this.groupsLink}>      
            <Popup trigger={
              <Menu.Item name='Groups' active={activeItem === 'Groups'} onClick={this.handleItemClick}>
              <Icon name='group' size='big'/>
              </Menu.Item> 
            } content='Groups' basic/>
          </Link>
        
      
        <Link to={this.ordersLink}>
        <Menu.Item name='Orders' active={activeItem === 'Orders'} onClick={this.handleItemClick}>
            <h4><Image src='images/order.png' alt="" size='mini' inline/> Orders </h4>
        </Menu.Item>
        </Link>


        <Menu.Menu position='right'>


        <Popup
            trigger={
              <Menu.Item name='notifications' active={activeItem === 'notifications'} onClick={this.handleItemClick}>
                <Icon name='bell'  size='big' color={'blue'} /><Label color='red' className="notifyLabel">{this.notifNo}</Label>
              </Menu.Item>}
            flowing
            on='click'
        >
           <Grid>
              <Grid.Column textAlign='center'>

              <Item.Group>
                <Item>
                  <Item.Image size='mini' src="images/person.png" />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <h3>Ahmed Joined your breakfast &nbsp;</h3>
                    </Item.Header>
                    <Button compact width={10}>Order</Button>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image size='mini' src="images/person.png" />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <h3>Islam invited you to his order &nbsp;</h3>
                    </Item.Header>
                    <Button compact width={10}> Join</Button>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image size='mini' src="images/person.png" />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <h3>Tarek invited you to his order &nbsp;</h3>
                    </Item.Header>
                    <Button compact width={10}>Join</Button>
                  </Item.Content>
                </Item>
              </Item.Group>


               
                

              <Modal size={'tiny'} className="modal" trigger={<h4><a href="#" >View all notifications</a></h4>} scrolling="true">
                <Modal.Header className="modalHead">Your Notifications</Modal.Header>


                <Modal.Content>
                    
                      
                <Item.Group >
                  <Item >
                  <Item.Image size='mini' src="images/person.png" />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <h3>Ahmed Joined your breakfast &nbsp;</h3>
                    </Item.Header>
                    <Button compact width={10}>Order</Button>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image size='mini' src="images/person.png" />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <h3>Islam invited you to his order &nbsp;</h3>
                    </Item.Header>
                    <Button compact width={10}> Join</Button>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image size='mini' src="images/person.png" />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <h3>Tarek invited you to his order &nbsp;</h3>
                    </Item.Header>
                    <Button compact width={10}>Join</Button>
                  </Item.Content>
                </Item>



                 <Item>
                  <Item.Image size='mini' src="images/person.png" />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <h3>Ahmed Joined your breakfast &nbsp;</h3>
                    </Item.Header>
                    <Button compact width={10}>Order</Button>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image size='mini' src="images/person.png" />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <h3>Islam invited you to his order &nbsp;</h3>
                    </Item.Header>
                    <Button compact width={10}> Join</Button>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image size='mini' src="images/person.png" />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <h3>Tarek invited you to his order &nbsp;</h3>
                    </Item.Header>
                    <Button compact width={10}>Join</Button>
                  </Item.Content>
                </Item>


                 <Item>
                  <Item.Image size='mini' src="images/person.png" />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <h3>Ahmed Joined your breakfast &nbsp;</h3>
                    </Item.Header>
                    <Button compact width={10}>Order</Button>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image size='mini' src="images/person.png" />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <h3>Islam invited you to his order &nbsp;</h3>
                    </Item.Header>
                    <Button compact width={10}> Join</Button>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image size='mini' src="images/person.png" />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      <h3>Tarek invited you to his order &nbsp;</h3>
                    </Item.Header>
                    <Button compact width={10}>Join</Button>
                  </Item.Content>
                </Item>
                      </Item.Group>

             
                    </Modal.Content>
                  </Modal>

              </Grid.Column>

            </Grid>
        </Popup>
  






          <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>
            <Image circular src={this.profilePic} size='mini' />
            <span><h4>Ahmed</h4></span>
          </Menu.Item>

          
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