import React, { Component } from 'react';
import '../index.css';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Button, Grid, Modal, Header, Table, Item, Label} from 'semantic-ui-react'
import Headr from './header'
import { Link } from 'react-router-dom';
import axios from 'axios';

class Invited extends Component{
  constructor(props){
    super(props)
    this.state = {
      inviteList:[],
      joinList:[]

    }
  }

  componentWillMount() {
    axios({ method: 'GET',
            url: 'http://localhost:3000/order_invitations', 
            headers: {'order-id': 7} //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<to merge
          })
      .then(res => {
        const inviteList = (res.data.filter(function(person){
          return person.id != 1; //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<to merge
        }))
        this.setState({ inviteList: inviteList });

        const joinList = (inviteList.filter(function(person){
          return person.status == "Joined"; //<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<to merge
        }))
        this.setState({ joinList: joinList });



      })
    }

  render() {
    return (
           <Grid.Column >
        <h3><Label circular color={"green"}>{this.state.joinList.length} of {this.state.inviteList.length}</Label> Friends joined your order</h3>



        <Modal size={'mini'} dimmer={'blurring'} trigger={<Button color='green'>Check them out</Button>} className="modal frnds" >
          <Modal.Header className="modalHead">
            <img src='images/friends.png' alt="" height="40" width="40"/>
            Friends Invited
            </Modal.Header>
          <Modal.Content scrolling>

            <Modal.Description>
{/*************************************************************/}
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

{/*************************************************************/}
            </Modal.Description>
          </Modal.Content>
        </Modal>

        </Grid.Column>

               
      )
    }

}


class OrderDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      items:[]
    }
  }
  

  componentWillMount() {
    axios({ method: 'GET',
            url: 'http://localhost:3000/order_items', 
            headers: {'order-id': this.props.match.params.id}
          })
      .then(res => {
        const items = res.data;
        this.setState({ items: items });
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
                <Table.HeaderCell>Friend Name</Table.HeaderCell>
                <Table.HeaderCell>Item</Table.HeaderCell>
                <Table.HeaderCell>Amount</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Comment</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>

{/*****************************************************************************/}
            {
            this.state.items.map((item) => (
              <Table.Row key={item.id} textAlign='center'>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.item}</Table.Cell>
                <Table.Cell>{item.count}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell>{item.comment}</Table.Cell>

              </Table.Row>
              ))
              
            }
{/*****************************************************************************/}
            </Table.Body>

          </Table>
        </Grid.Column>


       
{/*************************************************************/}
              <Invited /> 

{/*************************************************************/}


       </Grid.Row>



    </Grid>


      </div>




    );
  }
}

export default OrderDetails;
