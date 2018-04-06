import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';



const Groups=(props)=>{

  console.log("grouppp",props)
  return(
   <div class="ui grid">

     {
       props.groupslist.map((group )=>(
          <div class="three column row">
              <div class="five wide column">  <b> <h2> <a className="one column author">{group}</a></h2></b> </div>
              <div class="four wide column">  <a><i className="one column user blue big plus icon"></i></a> </div>
              <div class="four wide column"> <a><i className="one column close red big  icon"></i></a></div>
          </div>

       ))
    }
  </div>
  );
}
const Mygroupslist = (props) => {
  return (
    <div className="row">
      <div className="ui column grid">
        <div className="six wide column"></div>
            <div className="nine wide column">
              <div className="ui raised  segment">
                  <h2 className="ui teal big ribbon label">My Groups</h2>

                  <div className="four column row" style={{height:40}}></div>
                <Groups groupslist={props.groupslist} />

                    </div>
                </div>
          </div>
        </div>
  );
}

const Search = (props) => {
  return(
    <div className="ui grid">
         <div className="sixteen wide column " style={{height:40}}></div>

      <div className="four wide column"><h3 className="ui small segment  "> {props.lable}</h3></div>
      <div className="six wide column">
           <div className="ui small icon input">
             <input placeholder={props.searchPlaceHolder} type="text"/><i className="at icon"></i>
            </div>
      </div>
     <div className="four wide column">
           <button className="ui  small teal  button">
             <i className="icon user"></i>
              {props.buttonName}
           </button>
     </div>
    </div>

    );

}
const Card = (props) => {
  if (!props.friendsList) {
           return <p> No friends yet !!</p>;
       }
  else
      return(
     <div className="ui cards"  style={{margineTop:100}}>

      {props.friendsList.map((friend ) => (
        <div  className="ui card"  style={{width: '30%' ,height:'20%'}}>
              <img class="ui meduim image" style={{width: '100%' ,height:'100px'}} src={friend.image} alt={"logo"}/>
                      <div className="content">
                         <div className="ui two column grid">
                              <div className="column"><h4 className="header"> {friend.name}</h4>  </div>
                              <div className="column">
                                 <button className="ui mini inverted red button">remove</button>
                              </div>
                   </div>

                 </div>

          </div>

      ) )}

  </div>
 )


}
const Mygroupdetail=(props)=>{
return (

  <div className="row">
    <div className="ui column grid">
          <div className="fifteen wide column">
            <div className="ui raised  segment">
                <h2 className="ui teal big ribbon label">group Name</h2>
                <Search lable={"You Friend Email"} buttonName={"Add Friend"} searchPlaceHolder={"User Email"} />

                <div class="four column row" style={{height:40}}>
                <div class="left floated column"></div>
                <div class="right floated column"></div>
              </div>

              <Card friendsList={props.friendsList} />

                  </div>
              </div>

        </div>
      </div>  );
}

class GroupBody extends Component{

  constructor(props){
    super(props);
    this.groupslist=[
       "os","sad","iot"
    ]

    this.friendsList=[
     {name: "John", id: 120, date: 2012, friendsNum: 10,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvwWWjLxIoXHQPTP_J0UmnJZQICqDeAb_5WztSnJpZfVTOwnz'},
     {name: "Beth", id: 443, date: 2012, friendsNum: 20,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjwE7fe4F0uEm7mb1s_veNU21MZMTtF4TsoqPfRZpv6NElYJS'},
     {name: "Jane", id: 510, date: 2012, friendsNum: 30,image:'http://www.wallpapereast.com/static/images/dice-hd-wallpapers.jpg'},
     {name: "John", id: 120, date: 2012, friendsNum: 10,image:'https://images.pexels.com/photos/17679/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'},
     {name: "Beth", id: 443, date: 2012, friendsNum: 20,image:'https://images.pexels.com/photos/17679/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'},
     {name: "Jane", id: 510, date: 2012, friendsNum: 30,image:'https://lh3.googleusercontent.com/F-h4eU1-yNmBHMVlymMGS2MqSvT9Cnz29kQLyS7KqONnP7hu3tzjJ0V7QnPRj5msxw7I=w300'}
    ]

  }
   render() {
      return(
        <div className="ui two column row ">
        <div className="one wide column"> </div>
             <div className="five wide column">
               <Mygroupslist groupslist={this.groupslist}/>
              </div>
             <div className="eight wide column">
                <Mygroupdetail friendsList={this.friendsList} />
             </div>
       </div>

        );
      }
}
export default GroupBody;
