import React, { Component } from 'react';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import NumericInput from 'react-numeric-input'; //for Numeric input
import { Icon, Button, Image, Label, Grid, Form, Modal, Header, Table } from 'semantic-ui-react'


class MyOrder extends Component {
   

  render() {
    return (
     
      <div>
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

        <Grid.Column width={8}>
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

                  <Modal trigger={<Button icon='delete' size='tiny'/>} closeIcon>
                    <Header icon='attention' content='cancel item' />
                    <Modal.Content>
                      <p>Are you sure you want to remove this item from your order?</p>
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
       </Grid.Row>



      <Grid.Row>
      <Grid.Column width={1}></Grid.Column>

      <Grid.Column width={10}>

      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Item' placeholder='Item name' />
          <Form.Input fluid number='amount' step='1' />
          <NumericInput min={0} max={10} value={0}/>  
        </Form.Group>
        <Form.TextArea label='Comments' placeholder='Comments' />
        <Form.Button>Add</Form.Button>
      </Form>

      </Grid.Column>  

      </Grid.Row>


    </Grid>

      
      </div>



      
    );
  }
}

export default MyOrder;
