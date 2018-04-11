import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import {Button, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import '../index.css';


class Error extends Component {
  render() {
    return (
      <div>
      <Grid columns='equal'>

          <h1 className="errMsg">Sorry, the page you are looking for could not be found!</h1>


      	<img src='/images/err.gif' alt="" className="errImg"/>

      	<Link to="/HomePage">
      	<Button primary className="errBtn" size='big'>Return to Home page</Button>
      	</Link>


      	</Grid>

      </div>

    );
  }
}

export default Error;
