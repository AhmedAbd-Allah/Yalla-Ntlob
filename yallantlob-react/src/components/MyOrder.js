import React, { Component } from 'react';
import '../index.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Button, Grid, Form, Modal, Header, Table, Item, Label} from 'semantic-ui-react'
import Headr from './header'
// import { Link } from 'react-router-dom';

class MyOrder extends Component {
  addItem(e){
    e.preventDefault();
    alert("added");
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
              <Table.Row textAlign='center'>
                <Table.Cell>ta3mia</Table.Cell>
                <Table.Cell>2</Table.Cell>
                <Table.Cell>15</Table.Cell>
                <Table.Cell>Belsalata</Table.Cell>
                <Table.Cell>

                <Modal size={'tiny'} trigger={<Button icon='delete' size='tiny'/>} closeIcon className="modal cancel">
                  <Header icon='attention' content='Cancel item' />
                  <Modal.Content>
                    <h4>Are you sure you want to remove this item from your order?</h4>
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

            </Table.Body>
          </Table>
        </Grid.Column>


       <Grid.Column >
        <h4><Label circular color={"blue"}>3</Label> of your Friends were invited to this order</h4>



        <Modal size={'mini'} dimmer={'blurring'} trigger={<Button color='grey'>Click to view</Button>} className="modal frnds" >
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
                      <h4><Icon name='exclamation circle' color='grey'/>"Didn't Join"</h4>
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


      <Grid.Row>
      <Grid.Column width={1}></Grid.Column>

      <Grid.Column width={10}>

      <Form onSubmit = {this.addItem}>
        <Form.Group widths='equal' >
          <Form.Input fluid required label='Item' placeholder='Item name'  width = {15} id="sss"/>
          <Form.Field required label='Amount' placeholder='Amount' control='input' type='number' min={1} width = {9}/>
          <Form.Field required label='Price' placeholder='Price' control='input' type='number' min={1} width = {9}/>
          <Form.Field label='Comments' placeholder='Comments' control='input' width = {16}/>
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
