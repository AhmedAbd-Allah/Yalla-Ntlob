import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios'


const Card = (props) => {
  if (!props.friendsList) {
           return <p> No friends yet !!</p>;
       }
  else
      return(
     <div className="ui cards"  style={{margineTop:100}}>
      {props.friendsList.map((player ) => (
        <div  className="ui card"  style={{width: '30%' ,height:'30%'}}>
              <img class="ui meduim image" style={{width: 'auto' ,height:'150px'}} src={player.image} alt={"logo"}/>
                      <div className="content">
                         <div className="ui two column grid">
                              <div className="column"><h2 className="header"> {player.name}</h2>  </div>
                              <div className="column">
                                 <button className="ui mini inverted red button">UnFriend</button>
                              </div>
                   </div>
                   <div className="meta"><span className="date">Joined in {player.date}</span></div>
                 </div>

               <div className="extra content">
                 <a><i className="user icon"></i>  {player.friendsNum} Friends</a>
               </div>
          </div>

      ) )}

  </div>
 )


}


class Body extends Component{

  constructor(props){
    super(props);

    this.state={
    friendsList:[
     {name: "John", id: 120, date: 2012, friendsNum: 10,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvwWWjLxIoXHQPTP_J0UmnJZQICqDeAb_5WztSnJpZfVTOwnz'},
     {name: "Beth", id: 443, date: 2012, friendsNum: 20,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjwE7fe4F0uEm7mb1s_veNU21MZMTtF4TsoqPfRZpv6NElYJS'}  ]
   }
  }


  // const AuthStr = 'Bearer '.concat(USER_TOKEN);
  //     axios.get(URL, { headers: { Authorization: AuthStr } }).then(response => {
  //             // If request is good...
  //             console.log(response.data);
  //           })
  //           .catch((error) => {
  //             console.log('error 3 ' + error);
  //           });
  componentDidMount() {
  axios.get('http://localhost:3000/friends',{ headers: { "user-id":"1" } })
  .then(response => {
    console.log("rrrrrrrrrrrrrrr",response)
    this.setState({ideas: response.data})
  })
  .catch(error => console.log(error))
}

   render() {
      return(
        <div className="row">
              <div className="ui column grid">
                  <div className="three wide column"></div>
                        <div className="eleven wide column">
                              <div className="ui raised  segment">
                                  <h2 className="ui teal big ribbon label">Friends List</h2>

                                  <div class="four column row" style={{height:40}}>
                                  <div class="left floated column"></div>
                                  <div class="right floated column"></div>
                                </div>

                                <Card friendsList={this.state.friendsList} />

                              </div>
                        </div>

              </div>
            </div>
        );
      }
}
export default Body;
