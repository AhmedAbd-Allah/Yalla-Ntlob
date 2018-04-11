import React, { Component } from 'react';
import Headr from './header'
import { Label, Grid, Segment, Card, Feed } from 'semantic-ui-react';
import axios from 'axios';
import TimeAgo from 'react-timeago';
import { Link, Redirect } from 'react-router-dom';

import ActionCable from 'action-cable-react-jwt';


class HomePage extends Component
{

    constructor(props)
      {
          super(props)
          this.state = {
            latestOrders: [],
            friendsActivities: [],
            jwt : localStorage.getItem('token'),
            user : JSON.parse(localStorage.getItem('user'))
          }
          console.log(JSON.parse(localStorage.getItem('user')).id)

      }
      componentWillMount(){
        let app = {};
        // console.log(JSON.parse(this.state.user));
          app.cable = ActionCable.createConsumer(`ws://localhost:3000/cable?id=${this.state.user.id}`)

          this.subscription = app.cable.subscriptions.create({channel: "ActivityChannel"}, {
            connected: function() { console.log("cable: connected") },             // onConnect
            disconnected: function() { console.log("cable: disconnected") },       // onDisconnect
            received: (data) => {
              console.log("cable received: ", data);
              let newFriendsActivities = this.state.friendsActivities;
              newFriendsActivities.push(data);
              this.setState({friendsActivities : newFriendsActivities })

            }
          })
      }
    componentDidMount()
    {
	  	console.log("component load", localStorage.getItem('token'))
      axios.get('http://localhost:3000/orders/LatestOrders',
                                  {   headers:{
                                                'Content-Type': 'application/json',
                                                'ownerID':JSON.parse(localStorage.getItem('user')).id
                                              }
          }).then(response => {
                                console.log(response);
                                console.log(JSON.parse(localStorage.getItem('user')).id)

                                this.setState({latestOrders: response.data})
                                // this.setState({orderDate: response.data})
                                console.log("zzzzzzzzzzzz",this.state.latestOrders)
                                }).catch(function (error)
                                {
                                        console.log(error);
                                });


	  }

render(){
return (
<div>
    <Headr />
    <Grid columns={4} style={{ height: '100%' }} verticalAlign='middle' >
     <Grid.Column >
    </Grid.Column>
          <Grid.Column className="latestOrders" style={{ maxWidth: 450 }}>
                <Segment raised>
                      <Label as='a' color='teal' ribbon>
                            <h1> Latest Orders </h1>
                      </Label>
                      <Card>

                          <Card.Content>
                            <Feed>

                              {!this.state.latestOrders.error ?
                                <div >
                                    {

                                      this.state.latestOrders.map((order) => (

                                      <Feed.Event>

                                        <TimeAgo date={order.created_at} />
                                          <Feed.Content>
                                            <Feed.Summary>
                                            <Link to = {`/OrderDetails/${order.id}`}>
                                            {order.order_type} on {order.created_at.slice(0, order.created_at.indexOf("T"))}
                                            </Link>
                                              {/* <a href="http://localhost:3005/OrderDetails/"+{order.id} >{order.order_type} </a> on  <a>{order.created_at.slice(0, order.created_at.indexOf("T"))}</a> */}
                                              <br />
                                              <br />
                                            </Feed.Summary>
                                          </Feed.Content>
                                      </Feed.Event>
                                      ))
                                    }
                                </div>
                              :<div size="big"><p>make your first Order</p></div>}

                            </Feed>
                          </Card.Content>
                      </Card>

                </Segment>
          </Grid.Column>

          {/* <Grid.Column >
    </Grid.Column> */}

          <Grid.Column className="Friends Activity">
                <Segment>
                      <Label as='a' color='teal' ribbon>
                            <h1>Friends Activity</h1>
                      </Label>
                      <Card>
    <Card.Content>
      <Feed>
      {

        this.state.friendsActivities.map((activity) => (

        <Feed.Event>

            <Feed.Content>
              <Feed.Summary>
              {activity.msg}
                {/* <a href="http://localhost:3005/OrderDetails/"+{order.id} >{order.order_type} </a> on  <a>{order.created_at.slice(0, order.created_at.indexOf("T"))}</a> */}
                <br />
                <br />
              </Feed.Summary>
            </Feed.Content>
        </Feed.Event>
        ))
      }

      </Feed>
    </Card.Content>
  </Card>
      </Segment>
      </Grid.Column>
                              {/* <Grid.Column >
                              </Grid.Column> */}
                        </Grid>
                  </div>
            );
      }
}
export default HomePage;
