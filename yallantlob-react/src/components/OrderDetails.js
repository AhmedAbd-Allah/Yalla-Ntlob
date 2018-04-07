import React, { Component } from 'react';
import '../index.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Button, Grid, Modal, Header, Table, Item, Label} from 'semantic-ui-react'
import Headr from './header'

class OrderDetails extends Component {


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
               <Icon name='server' color="blue"/>
                Order details
              </Header>
            </Grid.Column>
          </Grid.Column>

        </Grid.Row>


        <Grid.Row>
      <Grid.Column width={1}>
        </Grid.Column>

        <Grid.Column width={9}>
          <Table color='blue'>
            <Table.Header>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Item</Table.HeaderCell>
                <Table.HeaderCell>Amount</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Comment</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row textAlign='center'>
                <Table.Cell>Ahmed Khaled</Table.Cell>
                <Table.Cell>ta3mia</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>15</Table.Cell>
                <Table.Cell>Belsalata</Table.Cell>

              </Table.Row>

            </Table.Body>
          </Table>
        </Grid.Column>


       <Grid.Column >
        <h4><Label circular color={"green"}>3</Label> Friends joined your order</h4>



        <Modal size={'mini'} dimmer={'blurring'} trigger={<Button color='green'>Check them out</Button>} className="modal frnds" >
          <Modal.Header className="modalHead">
            <img src='images/friends.png' alt="" height="40" width="40"/>
            Friends Invited
            </Modal.Header>
          <Modal.Content scrolling>

            <Modal.Description>
              <Item.Group>
                <Item>
                  <Item.Image size='tiny' src="images/person.png" />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      Veronika Ossi
                      <h4><Icon name='check square' color='green'/>Joined</h4>
                    </Item.Header>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image size='tiny' src="images/person.png" />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      Justen Kitsune
                      <h4><Icon name='exclamation circle' color='grey'/>Didn't Join</h4>
                    </Item.Header>
                  </Item.Content>
                </Item>

                <Item>
                  <Item.Image size='tiny' src="images/person.png" />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header>
                      Salem ELmasry
                      <h4><Icon name='check square' color='green'/>Joined</h4>
                    </Item.Header>
                  </Item.Content>
                </Item>
              </Item.Group>

            </Modal.Description>
          </Modal.Content>
        </Modal>

        </Grid.Column>
       </Grid.Row>



    </Grid>


      </div>




    );
  }
}

export default OrderDetails;
