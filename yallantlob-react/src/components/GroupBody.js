import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Button, Modal } from 'semantic-ui-react'




const ConfirmMessage = (props) => (
    <Modal
      size={'mini'}
      trigger={props.element}
      header='Attention!'
      content={props.content}
      actions={[
          <Button  key={props.groupName} color='red'> <Icon name='remove' /> No</Button>,
          <Button  key={props.groupName+'confirm'} color='green'> <Icon name='checkmark'  onClick={()=>console.log(props.groupName+"deleted")} /> Yes </Button>
      ]}
    />
  )

class Groups extends Component{

constructor(props){
    super(props)
    this.state={}
  }

handlename=(name)=>{
    if(name.length>7){
     return name.substring(0,5)+"..";
   }
    else {
      return name.substring(0,7);
    }
  }
andleGroupChange=(groupname,grouplist)=> {
   console.log(groupname,this.props)
   this.props.onSelectGroup(groupname);

}
  render(){
  return(
       <div className="ui grid">
         {
           this.props.groupslist.map((group )=>(
              <div  key={group.id}className="three column row">
                  <div className="five wide column">
                  <b> <h2> <a className="one column author">{this.handlename(group.name)}</a></h2></b>
                  </div>

              <div className="four wide column">  <a><i className="one column user blue big plus icon"
                   style={{ cursor: 'pointer' }}
                  onClick={()=>this.andleGroupChange(group.name,[])}></i></a>
              </div>

              <div className="four wide column" style={{ cursor: 'pointer' }}>
                 <ConfirmMessage groupName={group.name} element={<i className="one column close red big  icon"></i>} content={`Are you sure you want to Delete ${group.name} group`} />
              </div>

            </div>

           ))
        }
      </div>
    );
  }
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
                <Groups groupslist={props.groupslist} onSelectGroup={props.onSelectGroup}/>

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
        <div key={friend.id} className="ui card"  style={{width: '30%' ,height:'20%'}}>
              <img className="ui meduim image" style={{width: '100%' ,height:'100px'}} src={friend.image} alt={"logo"}/>
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
                <h2 className="ui teal big ribbon label">{props.groupName}</h2>
                <Search lable={"You Friend Email"} buttonName={"Add Friend"} searchPlaceHolder={"User Email"} />

                <div className="four column row" style={{height:40}}>
                <div className="left floated column"></div>
                <div className="right floated column"></div>
              </div>

              <Card friendsList={props.friendsList} />

                  </div>
              </div>

        </div>
      </div>  );
}

class GroupBody extends Component{

  constructor(props){
    //get all user groups and friends in the first group
    super(props);
    this.groupslist=[
       {id:'1' ,name:"osjjjjjjjjjjj"},
       {id:'2',name:"sad"},
       {id:'3',name:"iot"}
    ]
      this.friendsList=[
       {name: "John", id: 120, date: 2012, friendsNum: 10,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvwWWjLxIoXHQPTP_J0UmnJZQICqDeAb_5WztSnJpZfVTOwnz'},
       {name: "Beth", id: 443, date: 2012, friendsNum: 20,image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjwE7fe4F0uEm7mb1s_veNU21MZMTtF4TsoqPfRZpv6NElYJS'},
       {name: "Jane", id: 510, date: 2012, friendsNum: 30,image:'http://www.wallpapereast.com/static/images/dice-hd-wallpapers.jpg'},
       {name: "John", id: 220, date: 2012, friendsNum: 10,image:'https://images.pexels.com/photos/17679/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'},
       {name: "Beth", id: 243, date: 2012, friendsNum: 20,image:'https://images.pexels.com/photos/17679/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'},
       {name: "Jane", id: 210, date: 2012, friendsNum: 30,image:'https://lh3.googleusercontent.com/F-h4eU1-yNmBHMVlymMGS2MqSvT9Cnz29kQLyS7KqONnP7hu3tzjJ0V7QnPRj5msxw7I=w300'}
      ]
    this.state={ group: 'osjjjjjjjjjjj' ,  groupslist:  this.groupslist ,friendsList:this.friendsList}


  }

  handleSelectedGroup = (groupName,friendsGroupList) => {
     this.setState({group: groupName});
      this.setState({friendsList: friendsGroupList});
 }
   render() {
      return(
        <div className="ui two column row ">
        <div className="one wide column"> </div>
             <div className="five wide column">
               <Mygroupslist groupslist={this.state.groupslist} onSelectGroup={this.handleSelectedGroup}/>
              </div>
             <div className="eight wide column">
                <Mygroupdetail friendsList={this.state.friendsList} groupName={this.state.group}/>
             </div>
       </div>

        );
      }
}
export default GroupBody;
