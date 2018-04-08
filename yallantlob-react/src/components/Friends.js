import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import PageName from './PageName'
import Search from './Search'
import Body   from './Body'
import Headr from './header'
import axios from 'axios'
// import '../semantic/dist/semantic.min.css';


class Friends extends Component {
  constructor(props){
    super(props);
    this.state={
    friendsList:[]
     }
  }

;
componentDidMount() {
  axios.get('http://localhost:3000/friends',{ headers: { "user-id":"1" } })
  .then(response => {
    console.log("Friendspage before mount",response)
    this.setState({friendsList: response.data})
  })
  .catch(error => console.log(error))
}

 handleAddfriend = () => {
    console.log("back to handle ---add friend")
    this.componentDidMount();
}

handleUnfriend = () => {
   console.log("back to handle xxxxunfriend")
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
          <Body friendsList={this.state.friendsList}  onUnFriend={this.handleUnfriend}/>
        </div>
      </div>

    );
  }
}

export default Friends;
