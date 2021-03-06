import React, { Component } from 'react';
import '../index.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Button, Image, Grid, Modal, Header, Table } from 'semantic-ui-react'
import Headr from './header'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Joines extends Component{
  constructor(props){
    super(props)
    this.state = {
    joinNo:0,
      
    }
  }


  componentWillMount() {
    axios({ method: 'GET',
            url: 'http://localhost:3000/order_invitations', 
            headers: {'order-id': this.props.oId}
          })
      .then(res => {
        const joinNo = (res.data.filter(function(inv){
          return inv.status == "Joined";
        })).length

        this.setState({joinNo: joinNo });
      })
  }



  render() {
      return ( 

        <Table.Cell>{this.state.joinNo}</Table.Cell>
      )
  }

} 


// -----------------------------------------------------------------
class Invites extends Component{
  constructor(props){
    super(props)
    this.state = {
    invitNo:0,    
    }
  }

  componentWillMount() {
    axios({ method: 'GET',
            url: 'http://localhost:3000/order_invitations', 
            headers: {'order-id': this.props.oId}
          })
      .then(res => {
        const invitNo = res.data.length;

        this.setState({ invitNo: invitNo});
      })

  }

  render() { 
      return ( 
        <Table.Cell>{this.state.invitNo}</Table.Cell>
      )
  }

} 


// -----------------------------------------------------------------
class Orders extends Component {
  constructor(props){
    super(props)
    this.state = {
        orders:[ {id: 0, order_type: "", status: ""} ],
        modalOpen: false,
        catched:0,
        modalFOpen: false,
        Fcatched:0,

        loggedID:JSON.parse(localStorage.getItem('user')).id

    }
  }
  
  handleClose = () => this.setState({ modalOpen: false })
  handleOpen = (id) => {
    this.setState({ modalOpen: true, catched: id })
    console.log(id)
  }

  handleFClose = () => this.setState({ modalFOpen: false })
  handleFOpen = (id) => {
    this.setState({ modalFOpen: true, Fcatched: id })
    console.log(id)
  }


  componentWillMount() {
    axios({ method: 'GET',
            url: 'http://localhost:3000/orders', 
            headers: {'owner-id': JSON.parse(localStorage.getItem('user')).id}
          })
      .then(res => {
        const orders = res.data;
        this.setState({ orders: orders });
      })
  }


newOrderLink = "/createOrder"

  finishItem = () => {
    console.log(this.state.Fcatched)
    axios ({  method: 'PUT',
              url:    `http://localhost:3000/orders/${this.state.Fcatched}` 
          })

    .then(res => {
      this.setState({ modalFOpen: false })
      console.log("Finished")
      this.componentWillMount();
    })
  }


  deleteOrder = () => {
    console.log(this.state.catched)
    axios ({  method: 'DELETE',
              url:    `http://localhost:3000/orders/${this.state.catched}` 
          })

    .then(res => {
      this.setState({ modalOpen: false })
      console.log("Deleted")
      this.componentWillMount();
    })
  }

  render() { 
   
    return ( 
      <div>
      <Headr />
      <Grid columns='equal'>
        <Grid.Row>
          <Grid.Column width={3}>
          </Grid.Column>

          <Grid.Column width={8}>
            <Grid.Column >
              <Header as='h2'>
               <Image circular src='images/order.png' />
                Orders
              </Header>
            </Grid.Column>
          </Grid.Column>

          <Grid.Column width={3}>
          <Link to={this.newOrderLink}>  <Button animated='fade' className="startBtn">
              <Button.Content visible>
                <Icon name='add' />New Order
              </Button.Content>
              <Button.Content hidden>
                Start new Order
              </Button.Content>
            </Button>
            </Link>
          </Grid.Column>
        </Grid.Row>


        <Grid.Row>
      <Grid.Column width={3}>
        </Grid.Column>

        <Grid.Column width={10}>
          <Table color='teal'>
            <Table.Header>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Order</Table.HeaderCell>
                <Table.HeaderCell>Restaurant</Table.HeaderCell>
                <Table.HeaderCell>Invited</Table.HeaderCell>
                <Table.HeaderCell>Joined</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
{/****************************************************************************************/}
            <Table.Body>
            {
            this.state.orders.map((order) => (
              <Table.Row key={order.id} textAlign='center'>
                <Table.Cell>{order.order_type}</Table.Cell>
                <Table.Cell>{order.restaurant}</Table.Cell>

                <Invites oId={order.id}/>
                <Joines oId={order.id}/>

                <Table.Cell> <Icon name={order.status=="Waiting"?'hourglass half':'check'} 
                color={order.status=="Waiting"?'yellow':'green'}/> {order.status}</Table.Cell>
                <Table.Cell>


                  <Link to={`/OrderDetails/${order.id}`}>
                  <Button icon='eye' size='tiny'/>
                  </Link>

                {order.status=="Waiting"?<span>
                  <Modal 
                  size={'mini'} 
                  trigger={<Button onClick={this.handleFOpen.bind(this, order.id)} color='blue'size='tiny'>Finish</Button>} 
                  onClose={this.handleFClose}
                  open={this.state.modalFOpen}
                  closeIcon 
                  className="cancel">
                    <Header icon='attention' content='Finish the order' />
                    <Modal.Content>
                      <p>Are you sure you want to close this Order?</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button color='green' onClick={this.handleFClose}>
                        <Icon name='remove' /> No
                      </Button>
                      <Button color='red' onClick={this.finishItem.bind(this)}>
                        <Icon name='checkmark' /> Yes
                      </Button>
                    </Modal.Actions>
                  </Modal>


                  <Modal 
                  size={'mini'} 
                  trigger={<Button  onClick={this.handleOpen.bind(this, order.id)} color='red'size='tiny'>Cancel</Button>}
                  onClose={this.handleClose}
                  open={this.state.modalOpen} 
                  closeIcon 
                  className="cancel">
                    <Header icon='attention' content='Cancel Order' />
                    <Modal.Content>
                      <p>Are you sure you want to cancel this Order?</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button color='green' onClick={this.handleClose}>
                        <Icon name='remove' /> No
                      </Button>
                      <Button color='red' onClick={this.deleteOrder.bind(this)}>
                        <Icon name='checkmark' /> Yes
                      </Button>
                    </Modal.Actions>
                  </Modal>
                  </span>
                  :""}

                </Table.Cell>
              </Table.Row>
              ))
              
            }

            </Table.Body>
{/****************************************************************************************/}
          </Table>
        </Grid.Column>
       </Grid.Row>

      {/*<Grid.Row>
        <Grid.Column width={6}>
        </Grid.Column>

          <Grid.Column>

            <div className = "pagination">
              <a href="">&laquo;</a>
              <a href="">1</a>
              <a className="active" href="">2</a>
              <a href="">3</a>
              <a href="">&raquo;</a>
            </div>
          </Grid.Column>

        <Grid.Column width={6}>
        </Grid.Column>
      </Grid.Row>*/}
    </Grid>


      </div>



    );
  }
}

export default Orders;
