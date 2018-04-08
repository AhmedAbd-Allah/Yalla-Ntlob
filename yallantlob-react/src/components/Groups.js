import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import PageName from './PageName'
import Search from './Search'
import GroupBody   from './GroupBody'
import Headr from './header'
// import '../semantic/dist/semantic.min.css';


class Groups extends Component {


  render() {
    return (
 <div className=" ni centered">
     <Headr />
     <div className="ui grid">
       <div className="four column row"></div>
       <PageName pageName={"Groups"} />
        <div className="four column row" style={{height:40}}></div>
        <Search  lable={"Group"} buttonName={"Add Group"} searchPlaceHolder={"Group name"}/>

          <GroupBody />


      </div>
      </div>

    );
  }
}

export default Groups;
