import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import PageName from './PageName'
import Headr from './header'
import { Dropdown ,Divider,Button,Icon,Label} from 'semantic-ui-react'



class Card extends Component {
 handleRemove=(index)=>{
   console.log(index,"sddddddddddd",this.props)
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
                <img className="ui avatar image" src={friend.image} alt="imageload"/> <b>{friend.name}</b>
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
    this.state={}
    this.foodOptions=[
      {text: 'Dinner',  value: 'Dinner'},
        {text: 'Breakfast',  value: 'Breakfast'},
          {text: 'launch',  value: 'launch'} ]

    this.matchedval=

    [
      { id:0},
       {id:1 ,text:'ahmed',value:'10', type:'friend',image:'images/person.png' },
        {id:2,text:'ahmedgroup',value:'20', type:'group',image:'images/friends.png'}
    ]

  }


handleSelectedFriend=()=>{

    const matchedval_index=this.refs['friends'].state.selectedIndex;
    console.log(matchedval_index,this.matchedval[matchedval_index])
    console.log("ssssssssssssss"+this.refs['friends'].state.selectedIndex)

    this.props.onSelectfriends([this.matchedval[matchedval_index]])
      //  this.matchedval=this.matchedval.splice(matchedval_index,1)
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
        console.log(reader.result)//base64
    }

      reader.readAsDataURL(file)

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
                 <Dropdown placeholder='Select meal' fluid selection options={this.foodOptions} />
             </div>

       </div>
       <div className="sixteen wide tablet  sixteen computer column">
           <Divider horizontal>write resturant name</Divider>
           <div className="ui left action input">
               <button className="ui teal labeled icon button">
               <i className="utensils icon"></i>
               From
               </button>
               <input type="text" className="form-control" placeholder="resturant name" name="resturant" />
           </div>
       </div>


       <div className="sixteen wide tablet  sixteen computer column">
        <Divider horizontal>write friend or group name</Divider>
       <div className="ui left action input">
           <button className="ui teal labeled icon button">
           <i className="group icon"></i>
           Friends
           </button>

            <Dropdown  placeholder='friends and groups'   value="" selection options={this.matchedval} ref='friends'
             onChange= {this.handleSelectedFriend} />
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
       <Button as='div' labelPosition='right'>
           <Button color='teal'>
             <Icon name='bullhorn' />
             Publish
           </Button>
           <Label as='a' basic color='teal' pointing='left'>Order Now</Label>
         </Button>

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
    this.state={
    invitedlist:[
     {name: "John", id: 120, date: 2012, friendsNum: 10,
     image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJvwWWjLxIoXHQPTP_J0UmnJZQICqDeAb_5WztSnJpZfVTOwnz'}
   ]}
   console.log(this.state.invitedlist[0])
  }

  handleSelectedfriends = (friendsList) => {

      this.setState({invitedlist: this.state.invitedlist.concat(friendsList)});
 }

 handleremovedfriend = (friendindex) => {

     console.log("back to handle",friendindex,"kkkkkkkkkkkkkkkkkkk",this.state.invitedlist)
    const newinv=this.state.invitedlist.splice(0,1)
    console.log("dddddddddd",newinv)
     this.setState({invitedlist: newinv});
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
                <Order onSelectfriends={this.handleSelectedfriends} />
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
