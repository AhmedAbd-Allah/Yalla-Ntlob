import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';


// import '../semantic/dist/semantic.min.css';


class PageName extends Component{

  constructor(props) {
   super(props);
   this.pageName=props.pageName

 }
   render() {
      return(
        <div className="row">
              <div className="two wide column"></div>
              <div className="eight wide column"><a className="ui huge teal tag label">{this.pageName}</a></div>
              <div className="five wide column"></div>
          </div>

        );
      }
}
export default PageName;
