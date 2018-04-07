import React, { Component } from 'react';
import '../index.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Button, Image, Grid, Modal, Header, Table } from 'semantic-ui-react'
import Headr from './header'
import { Link } from 'react-router-dom';

class Orders extends Component {


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
          <Link to="/createOrder">  <Button animated='fade' className="startBtn">
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
                <Table.HeaderCell>Restaurants</Table.HeaderCell>
                <Table.HeaderCell>Invited</Table.HeaderCell>
                <Table.HeaderCell>Joined</Table.HeaderCell>
                <Table.HeaderCell>Status</Table.HeaderCell>
                <Table.HeaderCell>Actions</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row textAlign='center'>
                <Table.Cell>Breakfast</Table.Cell>
                <Table.Cell>Eltab3i</Table.Cell>
                <Table.Cell>10</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell> <Icon name='hourglass half' color='yellow'/> Waiting</Table.Cell>
                <Table.Cell>

                  <Link to="/OrderDetails">
                  <Button icon='eye' size='tiny'/>
                  </Link>

                  <Modal size={'mini'} trigger={<Button color='blue'size='tiny'>Finish</Button>} closeIcon className="cancel">
                    <Header icon='attention' content='Finish the order' />
                    <Modal.Content>
                      <p>Are you sure you want to close this Order?</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button color='red'>
                        <Icon name='remove' /> No
                      </Button>
                      <Button color='green'>
                        <Icon name='checkmark' /> Yes
                      </Button>
                    </Modal.Actions>
                  </Modal>


                  <Modal size={'mini'} trigger={<Button color='red'size='tiny'>Cancel</Button>} closeIcon className="cancel">
                    <Header icon='attention' content='Cancel Order' />
                    <Modal.Content>
                      <p>Are you sure you want to cancel this Order?</p>
                    </Modal.Content>
                    <Modal.Actions>
                      <Button color='red'>
                        <Icon name='remove' /> No
                      </Button>
                      <Button color='green'>
                        <Icon name='checkmark' /> Yes
                      </Button>
                    </Modal.Actions>
                  </Modal>

                </Table.Cell>
              </Table.Row>

              <Table.Row textAlign='center'>
                <Table.Cell>Lunch</Table.Cell>
                <Table.Cell>Mac</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell>5</Table.Cell>
                <Table.Cell><Icon name='check' color='green'/>Finished</Table.Cell>
                <Table.Cell>

                  <Link to="/OrderDetails">
                  <Button icon='eye' size='tiny'/>
                  </Link>

                </Table.Cell>
              </Table.Row>

            </Table.Body>
          </Table>
        </Grid.Column>
       </Grid.Row>

      <Grid.Row>
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
      </Grid.Row>
    </Grid>


      </div>



    );
  }
}

export default Orders;
