import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import PageName from './PageName'
import Search from './Search'
import Body   from './Body'
import Headr from './header'
// import '../semantic/dist/semantic.min.css';


class Friends extends Component {
  render() {
    return (
      <div className=" ni centered">
       <Headr />
       <div className="ui grid">
         <div className="four column row"></div>
           <PageName pageName={"Friends"} />
             <div className="four column row" style={{height:40}}></div>
            <Search lable={"You Friend Email"} buttonName={"Add Friend"} searchPlaceHolder={"User Email"} />
          <Body />
        </div>
      </div>

    );
  }
}

export default Friends;
