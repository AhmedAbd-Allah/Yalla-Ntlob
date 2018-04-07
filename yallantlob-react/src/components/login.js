// import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Icon, Input, Header, Image, Form, Label, Button, Grid, Segment } from 'semantic-ui-react';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';


class Login extends Component {
    render(){
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' >
                    <Grid.Column style={{ maxWidth: 450 }}> 
                            <Image src='./images/logo.png' className="loginImg"/>                          
                        <Header as='h2' color='teal' textAlign='center'>
                            
                            <br />
                                Yalla Notlob
                        </Header>           
                        <br />
                        <Form size='large'>
                            <Segment stacked>  
                                    <Form.Input
                                        action={{ color: 'teal', labelPosition: 'left', icon: 'at', content: 'Email' }}
                                        actionPosition='left'
                                        placeholder='Email'
                                    />
                                    <br />
                                    <br />
                                    <Form.Input
                                        action={{ color: 'teal', labelPosition: 'left', icon: 'lock', content: 'Password' }}
                                        actionPosition='left'
                                        placeholder='Password'   
                                    />
                                    <br />
                                    <Link to="/HomePage">
                                    <Button secondary size='large'>Login</Button>
                                    </Link>
                              
                            </Segment>
                        </Form>
                    <br />
                    <br />
                    <a href="./register">New User? Register Here</a> 
                    <br />
                    <br />
                    <a href="./forgetpassword">Forgot Password?</a>
                    <br />
                    <br />
                    </Grid.Column>
                </Grid>
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' >
                    <Grid.Column style={{ maxWidth: 300 }}> 
                    <FacebookLoginButton onClick={() => alert('Hello')} />
                    <GoogleLoginButton onClick={() => alert('Hello')} />
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Login;