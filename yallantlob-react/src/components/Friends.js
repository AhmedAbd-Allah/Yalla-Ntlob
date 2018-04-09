import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import PageName from './PageName'
import Search from './Search'
import Body   from './Body'
import Headr from './header'
import axios from 'axios'

class Friends extends Component {
  constructor(props){
    super(props);
    this.state={
    friendsList:[],
    addrespRes:""
     }
  }
componentDidMount() {
  axios.get('http://localhost:3000/friends',{ headers: { "user-id":"1" } })
  .then(response => {
    console.log("Friendspage before mount",response)
    this.setState({friendsList: response.data ,addrespRes:this.state.addrespRes})
  })
  .catch(error => console.log(error))
}

 handleAddfriend = (response) => {
    if(response.data.Error)
    this.state.addrespRes=response.data.Error
    else
      this.state.addrespRes=""
    this.componentDidMount();
}

handleUnfriend = () => {
   this.componentDidMount();
}
  render() {
    return (
      <div className=" ni centered">
       <Headr />
       <div className="ui grid">
         <div className="four column row"></div>
           <PageName pageName={"Friends"} />
             <div className="four column row" style={{height:40}}></div>
            <Search lable={"You Friend Email"} buttonName={"Add Friend"} searchPlaceHolder={"User Email"}   onAddFriend={this.handleAddfriend}/>
            <h4 style={{marginLeft:'30%' ,color:'red'}}>{this.state.addrespRes}</h4>
          <Body friendsList={this.state.friendsList}  onUnFriend={this.handleUnfriend}/>
        </div>
      </div>

    );
  }
}

export default Friends;
