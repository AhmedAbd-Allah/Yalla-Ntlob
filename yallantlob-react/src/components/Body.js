import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios'


const handleunfriendClick=(friend,unFriend)=>{
  console.log("dddddddddddddd",friend,friend.id)
   axios.delete(`http://localhost:3000/friends/${friend.id}`,{ headers: { "user-id":"1" } })
   .then(response => {
     console.log("Delete friend reponse",response)
     unFriend();
   })
   .catch(error => console.log(error))
 }

const Card = (props) => {

  if (props.friendsList.length===0) {
           return <p> No friends yet !!</p>;
       }
  else
      return(
     <div className="ui cards"  style={{margineTop:100}}>
      {props.friendsList.map((friend,index ) => (
        <div  key={index} className="ui card"  style={{width: '25%' ,height:'15%'}}>
              <img className="ui meduim image" style={{width: 'auto' ,height:'150px'}} src={friend.image} alt={"logo"}/>
                      <div className="content">
                         <div className="ui two column grid">
                              <div className="column"><h2 className="header"> {friend.name}</h2>  </div>
                              <div className="column">
                                 <button className="ui mini inverted red button"  onClick={()=>handleunfriendClick(friend,props.onUnFriend)}>UnFriend</button>
                              </div>
                   </div>

                 </div>
          </div>

      ) )}

  </div>
 )


}


class Body extends Component{

   render() {
      return(
        <div className="row">
              <div className="ui column grid">
                  <div className="three wide column"></div>
                        <div className="eleven wide column">
                              <div className="ui raised  segment">
                                  <h2 className="ui teal big ribbon label">Friends List</h2>

                                  <div className="four column row" style={{height:40}}>
                                  <div className="left floated column"></div>
                                  <div className="right floated column"></div>
                                </div>

                                <Card friendsList={this.props.friendsList} onUnFriend={this.props.onUnFriend} />

                              </div>
                        </div>

              </div>
            </div>
        );
      }
}
export default Body;
