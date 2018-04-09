import '../index.css';
import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { Icon, Input, Header, Image, Form, Label, Button, Grid, Segment } from 'semantic-ui-react';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';
import axios from 'axios';



class Login extends Component {
    constructor(props) 
        {
                super(props);
                this.state = {"email":'', "password":''};
                this.setEmail = this.setEmail.bind(this);
                this.setPassword = this.setPassword.bind(this);
                this.loginFunction = this.loginFunction.bind(this);   
        }
    setEmail(e)
    {
            this.setState({"email": e.target.value});
    }

    setPassword(e)
    {
            this.setState({"password": e.target.value});
    }
    loginFunction(e)
    {
        e.preventDefault();
            const data = {"auth":this.state}
            console.log( data)
    axios.post('http://localhost:3000/user_token', data
              ).then(function (response) {
            console.log(response);
            console.log(response.data.jwt);
            console.log(response.status)
            if (response.status == 201)
            {
                localStorage.setItem('token',response.data.jwt)
                axios.get('http://localhost:3000/auth', 
                {headers:{
                            'Content-Type': 'application/json',
                            'Authorization':"Bearer "+localStorage.getItem('token')
                         }
                        }).then(function (response) {
                            console.log(response);
                            console.log(response.data.msg);
                            console.log(localStorage.getItem('token'));
                            localStorage.setItem('user',JSON.stringify(response.data.msg))
                            var u=localStorage.getItem('user')
                            console.log('User from local storage',JSON.parse(u));
                            // return <Redirect to={'/HomePage'}/>
                        //   return  < Redirect to={{ pathname: "/HomePage"}} />
                          <Link to="/HomePage">Protected Page</Link>
                         })
                        .catch(function (error) {
                            console.log(error);
                            
                        });

            }
            // return <Redirect to="/HomePage"/>
          })
          .catch(function (error) {
            // console.log(Request.status);
            
          });
    }






    render(){
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' >
                    <Grid.Column style={{ maxWidth: 450 }}> 
                            <Image src='./images/logo.png' className="loginImg"/>                          
                        <Header as='h2' color='teal' textAlign='center'>
                            
                                Yalla Notlob
                        </Header>           
                        
                        <Form size='large'>
                            <Segment stacked>  
                                    <Form.Input
                                        action={{ color: 'teal', labelPosition: 'left', icon: 'at', content: 'Email' }}
                                        actionPosition='left'
                                        placeholder='Email'
                                        required
                                        type="email"
                                        value={this.state.email}
                                        onChange={this.setEmail}
                                    />
                                    <br />
                                    
                                    <Form.Input
                                        action={{ color: 'teal', labelPosition: 'left', icon: 'lock', content: 'Password' }}
                                        actionPosition='left'
                                        placeholder='Password'
                                        type="password"
                                        required
                                        value={this.state.password}
                                        onChange={this.setPassword}    
                                    />
                                    <br />
                                    
                                    <Button secondary size='large' onClick={this.loginFunction}>Login</Button>
                                    
                              
                            </Segment>
                        </Form>
                    
                    <br />
                    <a href="./register">New User? Register Here</a> 
                    <br />
                    <br />
                    <a href="./forgetpassword">Forgot Password?</a>
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