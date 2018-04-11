import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import PageName from './PageName'
import Headr from './header'
import { Link } from 'react-router-dom';
import { Dropdown ,Divider,Button,Icon,Label} from 'semantic-ui-react'
import axios from 'axios'
import { Route,Redirect } from 'react-router-dom'
import Orders from './orders'



class Card extends Component {
 handleRemove=(index)=>{
    this.props.onRemoveFriend(index);
 }

render(){
      if (!this.props.invitedlist){
               return <p> No friends invited yet !!</p>;
           }
      else
          return(
         <div className="ui cards"  style={{margineTop:100}}>
          {this.props.invitedlist.map((friend,index ) => (
            <div key={friend.id+""+index} className="ui card"  style={{width:150}}>
              <div className="content">
                <div className="right floated meta"><button className="ui mini inverted red button"
                    onClick={()=>this.handleRemove(index)}>remove</button></div>
                <img className="ui avatar image" src={friend.image} alt="image"/> <b>{friend.name}</b>
              </div>
            </div>

          ) )}
      </div>
     )
    }


}
const InvitedFriendslist = (props) => {
  return (
    <div className="row">
      <div className="ui column grid">
            <div className="fifteen wide column">
              <div className="ui raised  segment">
                  <h2 className="ui teal big ribbon label">Friends invited</h2>
                  <div className="four column row" style={{height:40}}>
                  <div className="left floated column"></div>
                  <div className="right floated column"></div>
                </div>
                    <Card onRemoveFriend={props.onRemoveFriend} invitedlist={props.invitedlist} />
              </div>
            </div>
          </div>
        </div>
  );
}

class Order extends Component{


  constructor(props){

      super(props)
      this.state={Groups:[]}
      this.foodOptions=[{text: 'Dinner',  value: 'Dinner'},
      {text: 'Breakfast',  value: 'Breakfast'},  {text: 'launch',  value: 'launch'} ]
}


  getArrFordropDown(data){
    const GroupArray=[]
     for (let i=0;i<data.length;i++){
         GroupArray.push({text:data[i].name,value:data[i].id})
     }
     return GroupArray;
  }
  componentDidMount(){
    axios.get('http://localhost:3000/groups',{ headers: { "user-id":JSON.parse(localStorage.getItem('user')).id } })
    .then(response => {
      const GroupArray=this.getArrFordropDown(response.data);
     this.setState({Groups:GroupArray})

    })
    .catch(error => console.log(error))
  }

addFriendTolist=(handleAddfriendFun)=>{

  const friend={name:this.refs['friendEmail'].value}
  axios.get(`http://localhost:3000/friends/search`,{ headers: { "friendName":friend.name,"userId":JSON.parse(localStorage.getItem('user')).id} })
  .then(response => {
      console.log("returned invited friend",response.data)
      handleAddfriendFun(response.data)
  })
  .catch(error => console.log(error))
}

handleSelectedFriend=()=>{

    const Groups_index=this.refs['friends'].state.selectedIndex;
    const groupID=this.state.Groups[Groups_index].value;

    axios.get(`http://localhost:3000/group_members/${groupID}`)
    .then(response => {
      console.log("group friend",response.data)
      this.props.onSelectfriends(response.data)
    })
    .catch(error => console.log(error))
}

_handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
      reader.readAsDataURL(file)
}

publichOrder=()=>{
  // console.log("publish order function",this.state)
  const resturant=this.refs['resturant'].value;
  const Meal=this.refs['Meal'].state.selectedIndex;
  const MenueImage=this.state.imagePreviewUrl;
  const InvitedList=this.props.invitedList;
  const ids=[]
 for( let i=0;i<InvitedList.length;i++){
   console.log(InvitedList[i],InvitedList[i].id)
   ids.push(InvitedList[i].id)
 }
 console.log("ids.....",ids)

  const body={
	"order":{
		"order_type":Meal,
		"meal_image":MenueImage,
		"owner_id": "1" ,
                "restaurant":resturant
	},
       "ids":ids
}

 //request
     axios.post('http://localhost:3000/orders',body)
     .then(response => {
       console.log("Create order response",response)

     })
     .catch(error => console.log(error))

}
render(){
  return (
        <div className="row">
          <div className="ui column grid">
                <div className="fifteen wide column">
                  <div className="ui raised  segment">
                      <h2 className="ui teal big ribbon label">Order</h2>
                      <div className="four column row" style={{height:20}}>
                          <div className="left floated column"></div>
                          <div className="right floated column"></div>
                    </div>


          <div className="ui centered grid">

             <div className="sixteen wide tablet  sixteen computer column">

             <div className="ui left action input">
                 <button className="ui teal labeled icon button">
                 <i className="utensils icon"></i>
                 Order For
                 </button>
                 <Dropdown id="meal" placeholder='Select meal' fluid selection options={this.foodOptions} ref={"Meal"}/>
             </div>
       </div>
       <div className="sixteen wide tablet  sixteen computer column">
           <Divider horizontal>write resturant name</Divider>
           <div className="ui left action input">
               <button className="ui teal labeled icon button">
               <i className="utensils icon"></i>
               From
               </button>
               <input type="text" className="form-control" placeholder="resturant name" name="resturant"   ref={"resturant"}/>
           </div>
       </div>
       <div className="sixteen wide tablet  sixteen computer column">
        <Divider horizontal>write friend or group name</Divider>

        <div className="sixteen wide tablet  sixteen computer column">

            <div className="ui left action input">
                <button className="ui teal labeled icon button">
                <i className="user icon"></i>
                friend Email
                </button>
                <input type="text" className="form-control" placeholder="friend name" name="resturant" ref={'friendEmail'}/>
                <button className="ui small teal button" onClick={()=>{this.addFriendTolist(this.props.inviteFriend)}}>Invite</button>

            </div>
        </div>
       <Divider horizontal></Divider>
       <div className="ui left action input">
           <button className="ui teal labeled icon button">
           <i className="group icon"></i>
           Groups
           </button>

            <Dropdown  placeholder='friends and groups' selection options={this.state.Groups} ref='friends'/>
            <button className="ui small teal button"  onClick= {this.handleSelectedFriend}>Invite</button>
       </div>
       </div>
       <div className="sixteen wide tablet sixteen computer column">
               <div className="field">
                 <div className="ui action input">
                     <button className="ui teal labeled icon button">
                     <i className="images icon"></i>
                         Menue image
                     </button>

                     <label  className="ui icon button btn-file">
                      <i className="upload icon"></i>

                          <input type="file"  onChange={(e)=>this._handleImageChange(e)}  style={{display: "none"}}/>
                     </label>

                 </div>
             </div>
                 <img style={{width:100,height:100}} src={this.state.imagePreviewUrl}alt="imageload" />
       </div>
       <div className="six wide tablet eight wide computer column">

        <Link to="/Orders">
        <Button as='div' labelPosition='right'>
           <Button color='teal' onClick={()=>this.publichOrder()}>
             <Icon name='bullhorn' />
             Publish
           </Button>
           <Label as='a' basic color='teal' pointing='left'>Order Now</Label>
         </Button>
        </Link>
       </div>

      </div>
    </div>
        </div>
      </div>
    </div>


      );
 }
}
class createOrder extends Component {

  constructor(props){
    super(props);
    this.state={invitedlist:[]}
  }

 handleInviteFriend=(friend)=>{
    if(!friend.Error){
      let Exist=false
      for (let j=0;j<this.state.invitedlist.length;j++){
          if(friend.id==this.state.invitedlist[j].id){
             Exist=true;
            break;
        }
    }
      if(Exist==false)
         this.setState({invitedlist: this.state.invitedlist.concat([friend])})
   }
 }

  handleSelectedfriends = (friendsList) => {
      for(let i=0;i<friendsList.length;i++)
          this.handleInviteFriend(friendsList[i]);
 }

 handleremovedfriend = (friendindex) => {
    const newinv=this.state.invitedlist.splice(friendindex,1)
    this.setState({invitedlist: this.state.invitedlist});
}

render() {
    return (
     <div className=" ni centered">
         <Headr />
         <div className="ui grid">
           <div className="four column row"></div>
           <PageName pageName={"Add order"} />
            <div className="four column row" style={{height:40}}></div>

            <div className="ui two column row ">
            <div className="three wide column"> </div>
                 <div className="seven wide column">
                    <Order invitedList={this.state.invitedlist} inviteFriend={this.handleInviteFriend} onSelectfriends={this.handleSelectedfriends} />
                  </div>
                 <div className="six wide column" >
                <InvitedFriendslist  onRemoveFriend={this.handleremovedfriend} invitedlist={this.state.invitedlist} />
                 </div>
           </div>
          </div>
          </div>

        );
  }
}

export default createOrder;
