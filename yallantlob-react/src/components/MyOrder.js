import React, { Component } from 'react';
import '../index.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Button, Grid, Form, Modal, Header, Table, Item, Label, Image} from 'semantic-ui-react'
import Headr from './header'
// import { Link } from 'react-router-dom';
import axios from 'axios';

class Invited extends Component{
  constructor(props){
    super(props)
    this.state = {
      inviteList:[],
      order:{}

    }
  }

  componentWillMount() {
    axios({ method: 'GET',
            url: 'http://localhost:3000/order_invitations',
            headers: {'order-id': this.props.passedId} //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<to merge
          })
      .then(res => {
        const inviteList = (res.data.filter(function(person){
          return person.id != JSON.parse(localStorage.getItem('user')).id; //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<Logged in user<<<<to merge
        }))
        this.setState({ inviteList: inviteList });
      })

    axios({ method: 'GET',
          url: `http://localhost:3000/orders/${this.props.passedId}`
        })
    .then(res => {
      const order = res.data
      this.setState({ order: order });
    })

}

  render() {
    return (
      <Grid.Column >
        <h4><Label circular color={"blue"}>{this.state.inviteList.length}</Label> of your Friends were invited to this order</h4>



        <Modal size={'mini'} dimmer={'blurring'} trigger={<Button color='grey'>Click to view</Button>} className="modal frnds" >
          <Modal.Header className="modalHead">
            <img src='images/friends.png' alt="" height="40" width="40"/>
            Friends Invited
            </Modal.Header>
          <Modal.Content scrolling>

            <Modal.Description>

 {/***********************************************************/}
          <Item.Group>
               {
                this.state.inviteList.map((person) => (
                <Item key={person.id}>
                  <Item.Image size='tiny' src={person.image} />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      {person.name}
                      <h4>
                      {person.status=="Joined"?
                          <Icon name='check square' color='green'/>
                      :
                          <Icon name='exclamation circle' color='grey'/>
                      }

                      {person.status}</h4>
                    </Item.Header>
                  </Item.Content>
                </Item>
                ))
              }
                 </Item.Group>


 {/***********************************************************/}

            </Modal.Description>
          </Modal.Content>
        </Modal>

        <div className="restLogo">
        <Icon name='food' color='orange' size='huge' />
        <span><h3>{this.state.order.restaurant}</h3></span>
        </div>

        
        <Modal 
        trigger={<Button color= "teal" className = "menuBtn" onClick={this.handleOpen}>
        <h3>Show Menu</h3>
        <Image src={this.state.order.meal_image} avatar />
        </Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Modal.Content clasName="Menu">
          <h2>Arabiata Menu</h2>
          <Image src={this.state.order.meal_image} centered/>
        </Modal.Content>
        
      </Modal>
        



        </Grid.Column>

      )
    }

}

class MyOrder extends Component {
  constructor(props){
    super(props)
    this.state = {
      myItems:[],
      modalOpen: false,
      catched:0,

      loggedID: JSON.parse(localStorage.getItem('user')).id

    }
  }

  handleClose = () => this.setState({ modalOpen: false })
  handleOpen = (id) => {
    this.setState({ modalOpen: true, catched: id })
    console.log(id)
  }


  componentWillMount() {
    axios({ method: 'GET',
            url: 'http://localhost:3000/order_items',
            headers: {'order-id': this.props.match.params.id} //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<to merge
          })
      .then(res => {
          const myItems = (res.data.filter(function(item){
            return item.user_id == JSON.parse(localStorage.getItem('user')).id; //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<to merge
          }))
          this.setState({ myItems: myItems });

      })

  }

  // getOrderInfo(){

  // }

  addItem = e => {
    e.preventDefault();

    axios({ method: 'POST',
            url: 'http://localhost:3000/order_items',
            data: { "order_id": this.props.match.params.id, //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<to merge
                    "user_id": JSON.parse(localStorage.getItem('user')).id,  //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<to merge
                    "item":document.getElementById("name").value,
                    "count": document.getElementById("amount").value,
                    "price": document.getElementById("price").value,
                    "comment":document.getElementById("comment").value
                  }
          })
      .then(res => {
        console.log("added")
        console.log(res)
        this.componentWillMount();

        document.getElementById("name").value = ""
        document.getElementById("amount").value = ""
        document.getElementById("price").value = ""
        document.getElementById("comment").value = ""


        console.log(this.state.myItems.length)
          if (this.state.myItems.length == 0){
            this.join();
          }
      })



  }


  deleteItem = () => {
    console.log(this.state.catched)
    axios ({  method: 'DELETE',
              url:    `http://localhost:3000/order_items/${this.state.catched}`
          })

    .then(res => {
      this.setState({ modalOpen: false })
      console.log("Deleted")
      this.componentWillMount();
    })
  }


  join = () => {
    axios ({  method: 'PUT',
              url:    'http://localhost:3000/order_invitations/update',
              headers : {
                          "orderID" : this.props.match.params.id,
                          "userID" : JSON.parse(localStorage.getItem('user')).id
                        }
          })

    .then(res => {
      console.log("Joined")
    })
  }




  render() {
    return (

      <div>
      <Headr />
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>

          <Grid.Column width={8}>
            <Grid.Column >
              <Header as='h2'>
               <Icon name='align center' />
                My Order
              </Header>
            </Grid.Column>
          </Grid.Column>

        </Grid.Row>


        <Grid.Row>
      <Grid.Column width={1}>
        </Grid.Column>

        <Grid.Column width={9}>
          <Table color='red'>
            <Table.Header>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Item</Table.HeaderCell>
                <Table.HeaderCell>Amount</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Comment</Table.HeaderCell>
                <Table.HeaderCell>Cancel</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
{/****************************Dynamic part****************************/}
              {
                this.state.myItems.map((item) => (
              <Table.Row key={item.item_id} textAlign='center'>
                <Table.Cell>{item.item}</Table.Cell>
                <Table.Cell>{item.count}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell>{item.comment}</Table.Cell>
                <Table.Cell>

                <Modal
                size={'tiny'}
                trigger={<Button onClick={this.handleOpen.bind(this, item.item_id)} icon='delete' size='tiny' />}
                onClose={this.handleClose}
                open={this.state.modalOpen}
                closeIcon
                className="modal cancel">

                  <Header icon='attention' content='Cancel item' />
                  <Modal.Content>
                    <h4>Are you sure you want to remove this item from your order?</h4>
                  </Modal.Content>
                  <Modal.Actions>
                    <Button color='green' onClick={this.handleClose}>
                      <Icon name='remove' /> No
                    </Button>
                    <Button color='red' onClick={this.deleteItem.bind(this)}>
                      <Icon name='checkmark' /> Yes
                    </Button>
                  </Modal.Actions>
                </Modal>

                </Table.Cell>

              </Table.Row>
              ))
              }
{/*****************************************************************/}

            </Table.Body>
          </Table>
        </Grid.Column>

 {/***********************************************************/}

              <Invited passedId = {this.props.match.params.id}/>


 {/***********************************************************/}

       </Grid.Row>


      <Grid.Row>
      <Grid.Column width={1}></Grid.Column>

      <Grid.Column width={10}>

      <Form onSubmit = {this.addItem}>
        <Form.Group widths='equal' >
          <Form.Input fluid required label='Item' placeholder='Item name'  width = {15} id="name"/>
          <Form.Field required label='Amount' placeholder='Amount' control='input' type='number' min={1} width = {9} id="amount"/>
          <Form.Field required label='Price' placeholder='Price' control='input' type='number' min={1} width = {9} id="price"/>
          <Form.Field label='Comments' placeholder='Comments' control='input' width = {16} id="comment"/>
          <Form.Button type="submit" label= "&nbsp;" primary>Add</Form.Button>
        </Form.Group>
      </Form>

      </Grid.Column>

    </Grid.Row>

    </Grid>


      </div>


    );
  }
}

export default MyOrder;
