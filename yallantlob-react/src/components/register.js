import { Link } from 'react-router-dom';
import React, { Component }from 'react';
import ReactUploadFile from 'react-upload-file';
import { Icon, Input, Header, Image, Form, Label, Button, Grid, Segment } from 'semantic-ui-react';



class Register extends Component {
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
                                                <Form size='large'>
                                                        <Segment stacked>
                                                                <Form.Input
                                                                        action={{ color: 'teal', labelPosition: 'left', icon: 'user', content: 'Name' }}
                                                                        actionPosition='left'
                                                                        placeholder='Name'
                                                                />
                                                                <br />
                                                                <br />
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
                                                                <br />
                                                                <Form.Input
                                                                        action={{ color: 'teal', labelPosition: 'left', icon: 'lock', content: 'confirm Password' }}
                                                                        actionPosition='left'
                                                                        placeholder='Confirm Password'   
                                                                />
                                                                <br />
                                                                
                                                                {/* <ReactUploadFile  chooseFileButton={<Button secondary size='large'>upload</Button>}/> */}
                                                                {/* <input type="file" name="pic" /> */}
                                                                <Form.Input
                                                                        action={{ color: 'teal', labelPosition: 'left', icon: 'image', content: 'image' }}
                                                                        actionPosition='left'
                                                                        placeholder='No file chosen'
                                                                        type='file'   
                                                                />
                                                                <br />
                                                                <Button secondary size='large'>Register</Button>

                                                        </Segment> 
                                                </Form>           
                                        </Grid.Column>
                                </Grid>
                        </div>
            );
    }
}
export default Register;