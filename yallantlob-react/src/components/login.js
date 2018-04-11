import '../index.css';
import { Link, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { Icon, Input, Header, Image, Form, Label, Button, Grid, Segment, Message } from 'semantic-ui-react';
import FacebookLoginButton from 'react-social-login-buttons/lib/buttons/FacebookLoginButton';
import GoogleLoginButton from 'react-social-login-buttons/lib/buttons/GoogleLoginButton';
import axios from 'axios';
import SocialButton from './SocialButton';
var randomString = require('random-string')




class Login extends Component {
    constructor(props)
        {
                super(props);
                this.state = {"email":'', "password":'',errors:'',redirect: false};
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
        this.setState({ email: this.state.email.trim()});
        this.setState({ password: this.state.password.trim()});
        const data = {"auth":this.state}
        console.log( data)

        axios.post('http://localhost:3000/user_token',
                    data).then(response => {
                                                console.log(response);
                                                console.log(response.data.jwt);
                                                console.log(response.status)
                                                if (response.status == 201)
                                                {
                                                    localStorage.setItem('token',response.data.jwt)

                                                    axios.get('http://localhost:3000/auth',
                                                            {   headers:
                                                                {
                                                                    'Content-Type': 'application/json',
                                                                    'Authorization':"Bearer "+localStorage.getItem('token')
                                                                }
                                                            }).then(function (response)
                                                                {
                                                                    console.log(response);
                                                                    console.log(response.data.msg);
                                                                    console.log(localStorage.getItem('token'));
                                                                    localStorage.setItem('user',JSON.stringify(response.data.msg))
                                                                    const user=localStorage.getItem('user')
                                                                    console.log('User from local storage',JSON.parse(user));
                                                                    // this.setState({ redirect: true});
                                                            }).catch(function (error)
                                                                    {
                                                                        console.log(error);
                                                                    });
                                                }
                                            })
                        .catch(error =>
                            {
                                console.log(error);
                                this.setState({ errors: "Incorrect Email or Password"});
                            });
    }


    handleSocialLogin = (user) => {
                                    console.log(user)
                                    // const userpass = randomString({length: 8});
                                    let body = {"user":{
                                                            name:user.profile.name,
                                                            email:user.profile.email,
                                                            password: '1234',
                                                            image:user.profile.profilePicURL
                                                        }
                                                };
                                    axios.post('http://localhost:3000/users',
                                            body).then(response => {
                                                        let body = { "auth":{
                                                                                // name:user.profile.name,
                                                                                email:user.profile.email,
                                                                                password: '1234',
                                                                            }
                                                                   }
                                                        axios.post('http://localhost:3000/user_token',
                                                            body).then(response => {
                                                                                        console.log(response);
                                                                                        console.log(response.data.jwt);
                                                                                        console.log(response.status)
                                                                                        if (response.status == 201)
                                                                                        {
                                                                                            localStorage.setItem('token',response.data.jwt)
                                                                                            // this.setState({ redirect: true});
                                                                                            axios.get('http://localhost:3000/auth',
                                                                                                {   headers:{
                                                                                                                'Content-Type': 'application/json',
                                                                                                                'Authorization':"Bearer "+localStorage.getItem('token')
                                                                                                             }
                                                                                                }).then(response => {
                                                                                                                        console.log(response);
                                                                                                                        console.log(response.data.msg);
                                                                                                                        console.log(localStorage.getItem('token'));
                                                                                                                        localStorage.setItem('user',JSON.stringify(response.data.msg))
                                                                                                                        const user=localStorage.getItem('user')
                                                                                                                        console.log('User from local storage',JSON.parse(user));
                                                                                                                        // this.setState({ redirect: true});
                                                                                                                    })
                                                                                                  .catch(function (error)
                                                                                                    {
                                                                                                        console.log(error);
                                                                                                    });
                                                                                        }
                                                                                    })
                                                                .catch(function (error)
                                                                    {
                                                                        console.log(error);
                                                                    });
                                                }).catch(function (error)
                                                    {
                                                        console.log(error);
                                                    });
                                    }

    handleSocialLoginFailure(error)
    {
        console.log(error)

    }



    render(){
        const { redirect } = this.state;
                if (redirect)
                {
                        return <Redirect to='/HomePage'/>;
                }
        return (
            <div>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' >
                    <Grid.Column style={{ maxWidth: 450 }}>
                            <Image src='./images/logo.png' className="loginImg"/>
                        <Header as='h2' color='teal' textAlign='center'>

                                Yalla Notlob

                        </Header>
                        <label>
                            { this.state.errors !=''?
                            <Message
                            error
                            header=''
                            content={this.state.errors}
                            />
                            :''}
                        </label>

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

                <div>
                    <SocialButton
                        provider='google'
                        appId='753789024014-5sk71rbmsl74c084v0rvhk7vlo43eolb.apps.googleusercontent.com'
                        onLoginSuccess={this.handleSocialLogin}
                        onLoginFailure={this.handleSocialLoginFailure}
                    >
                    <GoogleLoginButton />
                    </SocialButton>
                </div>



                    <FacebookLoginButton onClick={() => alert('Hello')} />
                    {/* <GoogleLoginButton onClick={() => alert('Hello')} /> */}
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default Login;
