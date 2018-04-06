import React, { Component } from 'react';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Menu, Button, Image, Label, Grid, Popup, Modal } from 'semantic-ui-react'


class Header extends Component {
    state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu stackable size='small' className="main">
        <Menu.Item className= "menuItem" >
          <img className="logo" src='images/logo.png' alt="" size='large'/>
          <span><h2>Yalla Order</h2></span>
        </Menu.Item>

        <Menu.Item  name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}>
          <img src='images/home.png' alt=""/>{"   "}
          <span><h4>Home</h4></span>
        </Menu.Item>

        <Menu.Item name='Friends' active={activeItem === 'Friends'} onClick={this.handleItemClick}>
          <img src='images/friends.png' alt=""/>
           <span><h4>Friends</h4></span>
        </Menu.Item>

        <Menu.Item name='Groups' active={activeItem === 'Groups'} onClick={this.handleItemClick}>
          <Icon name='group' />
           <span><h4>Groups</h4></span>
        </Menu.Item>

        <Menu.Item name='Orders' active={activeItem === 'Orders'} onClick={this.handleItemClick}>
          <img src='images/order.png' alt=""/>
          <span><h4>Orders</h4></span>
        </Menu.Item>


        <Menu.Menu position='right'>
        

        <Popup
            trigger={
              <Menu.Item name='notifications' active={activeItem === 'notifications'} onClick={this.handleItemClick}>
                <Icon name='bell'  size='big' color={'blue'} /><Label color='red' className="notifyLabel">3</Label>
              </Menu.Item>}
            flowing
            // hoverable
            on='click'
        >
            <Grid>
              <Grid.Column textAlign='center'>
                
                <Image circular src="images/person.png" size='mini' />
                <span><h5>Ahmed Joined your breakfast</h5></span>
                <Button compact>Order</Button>
              
                <Image circular src="images/person.png" size='mini' />
                <span><h5>Islam invited you to his order</h5></span>
                <Button compact> Join</Button>
         
       
                <Image circular src="images/person.png" size='mini'/>
                <span><h5>Tarek invited you to his order</h5></span>
                <Button compact>Join</Button>


               
                

                  <Modal trigger={<h4><a href="#" >View all notifications</a></h4>}>
                    <Modal.Header>Your Notifications</Modal.Header>
                    <Modal.Content>
                    
                        

                       <span> <Image circular src="images/person.png" size='mini' /></span>
                        <span><h5>Ahmed Joined your breakfast</h5></span>
                        <span><Button compact>Order</Button></span>
                      
                        <Image circular src="images/person.png" size='mini' />
                        <span><h5>Islam invited you to his order</h5></span>
                        <Button compact> Join</Button>
                 
               
                        <Image circular src="images/person.png" size='mini' />
                        <span><h5>Tarek invited you to his order</h5></span>
                        <Button compact>Join</Button>
                      

                        <Image circular src="images/person.png" size='mini' />
                        <span><h5>Ahmed Joined your breakfast</h5></span>
                        <Button compact>Order</Button>
                      
                        <Image circular src="images/person.png" size='mini' />
                        <span><h5>Islam invited you to his order</h5></span>
                        <Button compact> Join</Button>
                 
               
                        <Image circular src="images/person.png" size='mini' />
                        <span><h5>Tarek invited you to his order</h5></span>
                        <Button compact>Join</Button>

                        <Image circular src="images/person.png" size='mini' />
                        <span><h5>Ahmed Joined your breakfast</h5></span>
                        <Button compact>Order</Button>
                      
                        <Image circular src="images/person.png" size='mini' />
                        <span><h5>Islam invited you to his order</h5></span>
                        <Button compact> Join</Button>
                 
               
                        <Image circular src="images/person.png" size='mini' />
                        <span><h5>Tarek invited you to his order</h5></span>
                        <Button compact>Join</Button>

             
                    </Modal.Content>
                  </Modal>

              </Grid.Column>

            </Grid>
        </Popup>
  






          <Menu.Item name='profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>
            <Image circular src="images/person.png" size='mini' />
            <span><h4>Ahmed</h4></span>
          </Menu.Item>

          <Menu.Item>
          <Button primary animated size="big">
            <Button.Content visible><h4>Logout</h4></Button.Content>
              <Button.Content hidden>
             <Icon name='log out' size='large'/>
           </Button.Content>
          </Button>
          </Menu.Item>
          
        </Menu.Menu>

      </Menu>
    );
  }
}

export default Header;
