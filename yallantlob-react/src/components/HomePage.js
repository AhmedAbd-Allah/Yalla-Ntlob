import React, { Component } from 'react';
import Headr from './header'
import { Label, Grid, Segment, Card, Feed } from 'semantic-ui-react';
import axios from 'axios';
import TimeAgo from 'react-timeago';
import { Link, Redirect } from 'react-router-dom';



class HomePage extends Component
{

    constructor(props)
      {
          super(props)
          this.state = {latestOrders: [], friendsActivities: []}
          console.log(JSON.parse(localStorage.getItem('user')).id)

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
                                console.log(this.state.latestOrders)
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
                                                    <div>
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
        <Feed.Event>
          <Feed.Label image='/assets/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
                  <a>Aliaa Sayed </a> has Created  <a>an order</a> from <a>Mac</a>.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='/assets/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
            <a>Sara Hesham </a> has Created  <a>an order</a> from <a>Papa Johns</a>.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='/assets/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
            <a>Alaa Hayba </a> has Created  <a>an order</a> from <a>KFC</a>.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
        <Feed.Event>
          <Feed.Label image='/assets/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
            <a>Amr Essam </a> Canceled his <a> order</a> from <a>Pizza Hut</a>.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
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
