import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import PageName from './PageName'
import SearchGroup from './SearchGroup'
import GroupBody   from './GroupBody'
import Headr from './header'
import axios from 'axios'

class Groups extends Component {

  constructor(props){
    super(props);
    this.state={
    groupsList:[],
    addGroupResp:""
     }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/groups',{ headers: { "user-id":"1" } })
    .then(response => {
      console.log("get groupslist of user before mount",response)
      this.setState({groupsList: response.data ,addrespRes:this.state.addrespRes})
      console.log(this.state)
    })
    .catch(error => console.log(error))
  }

  handleAddgroup = (response) => {
     if(response.data.Error)
       this.setState({addrespRes:response.data.Error})
     else
      this.setState({taddrespRes:""})
 }

 handleGroupDel=(response)=>{
    this.componentDidMount();
 }


  render() {
    return (
 <div className=" ni centered">
     <Headr />
     <div className="ui grid">
       <div className="four column row"></div>
       <PageName pageName={"Groups"} />
        <div className="four column row" style={{height:40}}></div>
        <SearchGroup  lable={"Group"} buttonName={"Add Group"} searchPlaceHolder={"Group name"} onAddGroup={this.handleAddgroup}/>
        <h4 style={{marginLeft:'30%' ,color:'red'}}>{this.state.addrespRes}</h4>
        <GroupBody groupsList={this.state.groupsList} handleGroupDel={this.handleGroupDel}/>
      </div>
      </div>

    );
  }
}

export default Groups;
