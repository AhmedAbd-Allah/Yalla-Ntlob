import { Link } from 'react-router-dom';
import React, { Component }from 'react';
import ReactUploadFile from 'react-upload-file';
import { Icon, Input, Header, Image, Form, Label, Button, Grid, Segment } from 'semantic-ui-react';
import axios from 'axios';





class Register extends Component {

        constructor(props) 
        {
                super(props);
                this.state = {name: '',email:'', password:'', confpassword:'',image:''};
                           
                this.setName = this.setName.bind(this);
                this.setEmail = this.setEmail.bind(this);
                this.setPassword = this.setPassword.bind(this);
                this.setconfPassword = this.setconfPassword.bind(this);
                this.setImage = this.setImage.bind(this);
                this.Submit = this.Submit.bind(this);
        }

        setName(e) 
        {
                this.setState({ name: e.target.value});
        }

        setEmail(e)
        {
                this.setState({email: e.target.value});
        }

        setPassword(e)
        {
                this.setState({password: e.target.value});
        }

        setconfPassword(e)
        {
                this.setState({confpassword: e.target.value});
        }

        setImage(e)
        {
                this.setState({image: e.target.value});
        }
                

        Submit(e)
        {
               

                // console.log(this.state);
                var data = {"user":this.state}
                console.log( data)

        axios.post('http://localhost:3000/users', data
                  ).then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }


        render(){
                return (
                        <div>
                                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' >
                                        <Grid.Column style={{ maxWidth: 500 }}>                           
                                                <Header as='h2' color='teal' textAlign='center'>
                                                        <Image src='./images/logo.png' />
                                                        <br />
                                                        Yalla Notlob
                                                </Header>
                                                <br />
                                                <Form size='large' onSubmit={this.Submit}>
                                                        <Segment stacked>
                                                                <Form.Input
                                                                        action={{ color: 'teal', labelPosition: 'left', icon: 'user', content: 'Name' }}
                                                                        actionPosition='left'
                                                                        placeholder='Name'
                                                                        name='name'
                                                                        required
                                                                        value={this.state.name}
                                                                        onChange={this.setName}
                                                                />
                                                                <br />
                                                                <br />
                                                                <Form.Input
                                                                        action={{ color: 'teal', labelPosition: 'left', icon: 'at', content: 'Email' }}
                                                                        actionPosition='left'
                                                                        placeholder='Email'
                                                                        name='email'
                                                                        required
                                                                        type="email"
                                                                        value={this.state.email}
                                                                        onChange={this.setEmail}
                                                                />
                                                                <br />
                                                                <br />
                                                                <Form.Input
                                                                        action={{ color: 'teal', labelPosition: 'left', icon: 'lock', content: 'Password' }}
                                                                        actionPosition='left'
                                                                        placeholder='Password'
                                                                        type='password' 
                                                                        name='password'
                                                                        required
                                                                        value={this.state.password}
                                                                        onChange={this.setPassword}  
                                                                />
                                                                <br />
                                                                <br />
                                                                <Form.Input
                                                                        action={{ color: 'teal', labelPosition: 'left', icon: 'lock', content: 'confirm Password' }}
                                                                        actionPosition='left'
                                                                        placeholder='Confirm Password'
                                                                        type='password'
                                                                        name='confpassword'
                                                                        required
                                                                        value={this.state.confpassword}
                                                                        onChange={this.setconfPassword}   
                                                                />
                                                                <br />
                                                                
                                                                <Form.Input
                                                                        action={{ color: 'teal', labelPosition: 'left', icon: 'image', content: 'image' }}
                                                                        actionPosition='left'
                                                                        placeholder='No file chosen'
                                                                        type='file'
                                                                        name='image'
                                                                        value={this.state.image}
                                                                        onChange={this.setImage}   
                                                                />
                                                                <br />
                                                                <Button type='submit' secondary size='large'>Register</Button>
                                                        </Segment> 
                                                </Form>           
                                        </Grid.Column>
                                </Grid>
                        </div>
                );
        }
}
export default Register;