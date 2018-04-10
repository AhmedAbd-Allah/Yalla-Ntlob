import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon, Button, Modal } from 'semantic-ui-react'
import axios from 'axios'
import '../index.css'



const deleteGroup=(Gid,handleFun)=>{

  axios.delete(`http://localhost:3000/groups/${Gid}`)
  .then(response => {
    console.log("DeletGroup",response)
    handleFun();
  })
  .catch(error => console.log(error))
}


const ConfirmMessage = (props) => (
    <Modal
      className='modleStyle'
      style={{align: 'center'}}
      size={'mini'}
      trigger={props.element}
      header='Attention!'
      content={props.content}
      actions={[
          <Button  key={props.groupName} color='red'> <Icon name='remove' /> No</Button>,
          <Button  key={props.groupName+'confirm'} color='green' onClick={()=>deleteGroup(props.groupId,props.handleGroupDel)} > <Icon name='checkmark'  /> Yes </Button>
      ]}
    />
  )

const Groups=(props)=>{

  const handlename=(name)=>{
      if(name.length>5){
       return name.substring(0,5)+"..";
     }
      else {
        return name.substring(0,7);
      }
    }
  const handleGroupChange=(groupname,gid)=> {
     console.log(groupname,props)
      props.onSelectGroup(groupname,gid);
  }

    if(props.groupslist.length===0)
         return <b><h4 style={{color:'blue'}}>no groups yet !!</h4></b>
    else
    return(
         <div className="ui grid">
           {
             props.groupslist.map((group )=>(
                <div  key={group.id}className="three column row">
                    <div className="seven wide column">
                    <b> <h2> <a className="one column author">{handlename(group.name)}</a></h2></b>
                    </div>
                <div className="four wide column">  <a><i className="one column user blue big plus icon"
                     style={{ cursor: 'pointer' }}
                    onClick={()=>handleGroupChange(group.name,group.id)}></i></a>
                </div>
                <div className="four wide column" style={{ cursor: 'pointer' }}>
                   <ConfirmMessage groupName={group.name} groupId={group.id} handleGroupDel={props.handleGroupDel} element={<i className="one column close red big  icon"></i>} content={`Are you sure you want to Delete ${group.name} group`} />
                </div>
              </div>  ))
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
                <Groups groupslist={props.groupslist} onSelectGroup={props.onSelectGroup} handleGroupDel={props.handleGroupDel}/>

                    </div>
                </div>
          </div>
        </div>
  );
}

class Search extends Component{//= (props) => {


   AddFriendToGroup=(handleaddFrienfun)=>{

    const friendEmail=this.refs['friendEmail'].value;
    const Gid=this.props.groupId
    const body={"name":friendEmail,"group_id": Gid}

    axios.post('http://localhost:3000/group_members',body)
    .then(response => {
      console.log("add friend to group reponse",response)
      handleaddFrienfun(Gid,response);
    })
    .catch(error => console.log(error))
  }
  render(){
  return(
        <div className="ui grid">
             <div className="sixteen wide column " style={{height:40}}></div>

          <div className="four wide column"><h3 className="ui small segment  "> {this.props.lable}</h3></div>
          <div className="six wide column">
               <div className="ui small icon input">
                 <input placeholder={this.props.searchPlaceHolder} type="text" ref={"friendEmail"} />
                </div>
          </div>
         <div className="four wide column">
               <button className="ui  small teal  button"  onClick={()=>{this.AddFriendToGroup(this.props.handleaddFrienfun)}}>
                 <i className="icon user"></i>
                  {this.props.buttonName}
               </button>
         </div>
        </div>

        );
  }

}


const Card = (props) => {


   const removeFriendfromGroup=(Gid,Fid,handleFun)=>{
       console.log("remove friend from group",Fid,Gid)

       axios.delete(`http://localhost:3000/group_members/${Fid}`,{ headers: { "group-id":Gid } })
       .then(response => {
         console.log("Delete friend from group reponse",response)
         handleFun(Gid,"");
       })
       .catch(error => console.log(error))
   }
   if (!props.friendsList||props.friendsList.length===0) {
           return <p> No friends yet !!</p>;
        }

    else
        return(
       <div className="ui cards"  style={{margineTop:100}}>

        {
          props.friendsList.map((friend,index ) => (
          <div key={index} className="ui card"  style={{width: '30%' ,height:'20%'}}>
            <img className="ui meduim image" style={{width: '100%' ,height:'100px'}} src={friend.image} alt={"logo"}/>
                <div className="content">
                   <div className="ui two column grid">
                        <div className="column"><h4 className="header"> {friend.name}</h4>  </div>
                        <div className="column">
                           <button className="ui mini inverted red button" onClick={()=>removeFriendfromGroup(props.groupId,friend.id,props.handleDeleteUser)}>remove</button>
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
                <h2 className="ui teal big ribbon label" >{props.groupName}</h2>
                <Search lable={"Friend Email"} handleaddFrienfun={props.handleaddFrienfun} buttonName={"Add Friend"} searchPlaceHolder={"User Email"} groupId={props.groupId}/>
                <h4 style={{color:'red'}}>{props.AddfrirndResultError}</h4>
                <div className="four column row" style={{height:40}}>
                <div className="left floated column"></div>
                <div className="right floated column"></div>
              </div>
              <Card friendsList={props.GfriendsList}  groupId={props.groupId} handleDeleteUser={props.handleDeleteUser} />
                  </div>
              </div>
        </div>
      </div>  );
}

class GroupBody extends Component{

  state=[]
  getgroupsFriend=(Gid,response)=>{
    axios.get(`http://localhost:3000/group_members/${Gid}`)
    .then(response => {
      console.log("group friend",response)
      this.setState({'GfriendsList':response.data})
      this.setState({friendsList: response.data ,addrespRes:this.state.addrespRes})
    })
    .catch(error => console.log(error))

    if(response)
       this.setState({'AddfrirndResultError':response.data.Error})
    else
      this.setState({'AddfrirndResultError':''})
  }

  handleSelectedGroup = (groupName,Gid) => {

    console.log("handle group selected change",groupName)
    this.getgroupsFriend(Gid);
    this.setState({'groupName':groupName})
    this.setState({'groupId':Gid})
    }

   render() {
      return(
        <div className="ui two column row ">
        <div className="one wide column"> </div>
             <div className="five wide column">
               <Mygroupslist groupslist={this.props.groupsList} onSelectGroup={this.handleSelectedGroup} handleGroupDel={this.props.handleGroupDel}/>
              </div>
             <div className="eight wide column">
                <Mygroupdetail  handleDeleteUser={this.getgroupsFriend} AddfrirndResultError={this.state.AddfrirndResultError}  handleaddFrienfun={this.getgroupsFriend} groupId={this.state.groupId} groupName={this.state.groupName} GfriendsList={this.state.GfriendsList}/>
             </div>
       </div> );
      }
}
export default GroupBody;
