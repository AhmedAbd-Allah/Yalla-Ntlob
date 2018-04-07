import React, { Component } from 'react';
import Headr from './header'
import { Header, Image, Form, Label, Button, Grid, Segment, Card, Feed } from 'semantic-ui-react';





class HomePage extends Component 
{
      render(){
            return (
	            <div>
                        <Headr />
                        <Grid columns={4} style={{ height: '100%' }} verticalAlign='middle' >
                         <Grid.Column >        
                        </Grid.Column>
                              <Grid.Column className="latestOrders">
                                    <Segment raised>
                                          <Label as='a' color='teal' ribbon>
                                                <h1> Latest Orders </h1>
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
