import { Link, Redirect } from 'react-router-dom';
import React, { Component }from 'react';
import ReactUploadFile from 'react-upload-file';
import { Icon, Input, Header, Image, Form, Label, Button, Grid, Segment, Message } from 'semantic-ui-react';
import axios from 'axios';
import FileBase64 from 'react-file-base64';
// import base64Img from 'base64-img';

class Register extends Component {

        constructor(props) 
        {
                super(props);
                this.state = {name: '',email:'', password:'', confpassword:'',image:'',errors:'',redirect: false};                   
                this.setName = this.setName.bind(this);
                this.setEmail = this.setEmail.bind(this);
                this.setPassword = this.setPassword.bind(this);
                this.setconfPassword = this.setconfPassword.bind(this);
                this.setImage = this.setImage.bind(this);
                this.Submit = this.Submit.bind(this);
        }

        setName(e) 
        {
                this.setState({ "name": e.target.value});
        }

        setEmail(e)
        {
                this.setState({"email": e.target.value});
        }

        setPassword(e)
        {
                this.setState({"password": e.target.value});
        }

        setconfPassword(e)
        {
                this.setState({"confpassword": e.target.value});
        }

        setImage(myimage)
        {
                this.setState({ image: myimage })
        }       

        Submit(e)
        {
                if (this.state.name.trim()=='')
                {
                        this.setState({errors:'Name can not be an empty string'});
                }
                
                else if( this.state.password.trim()=='')
                {
                        this.setState({errors:'Password can not be only spaces'});
                }
                
                else if(this.state.password != this.state.confpassword )
                {
                        this.setState({errors:'Name is Required'});
                }

                else
                {
                        this.setState({ name: this.state.name.trim()});
                        this.setState({ email: this.state.email.trim()});
                        this.setState({ password: this.state.password.trim()});
                        this.setState({ confpassword: this.state.confpassword.trim()});
                        // this.setState({ redirect: true});

                        console.log(this.state);
                        
                        const data = {"user":this.state};
                                axios.post('http://localhost:3000/users', 
                        data).then(function (response) {
                        console.log(response);
                      })
                      .catch(function (error) {
                        console.log(error);
                      });
                }
               
        }


        render(){
                const { redirect } = this.state;
                if (redirect) 
                {
                        return <Redirect to='/login'/>;
                }
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
                                                <label>
                                                        { this.state.errors !=''?
                                                        <Message
                                                        error
                                                        header=''
                                                        content={this.state.errors}
                                                        />
                                                        :''}
                                                        </label>
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
                                                                
                                                                
                                                                {/* <Form.Input
                                                                        action={{ color: 'teal', labelPosition: 'left', icon: 'image', content: 'image' }}
                                                                        actionPosition='left'
                                                                        placeholder='No file chosen'
                                                                        // type='file'
                                                                        name='image'
                                                                        // value={this.state.image}
                                                                        // onChange={this.setImage}
                                                                           
                                                                > */}
                                                                <FileBase64
       multiple={ false }
       onDone={ this.setImage.bind(this) } />
       {/* </Form.Input> */}
                                                                <br />
                                                                <Button type='submit' secondary size='large' id ="submitButton">Register</Button>
                                                        </Segment> 
                                                </Form>           
                                        </Grid.Column>
                                </Grid>
                        </div>
                );
        }
}
export default Register;