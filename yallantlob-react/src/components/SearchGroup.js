import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios'


class SearchGroup extends Component{

  constructor(props) {
   super(props);
   this.lable=props.lable
   this.buttonName=props.buttonName
   this.searchPlaceHolder=props.searchPlaceHolder
 }


 handleBtnClick=()=>{

   console.log("btngroup handle han",this.refs['SearchVal'].value)
   const SearchValue=this.refs['SearchVal'].value;
   if(SearchValue==='')
     this.props.onAddGroup({'data':{"Error":"Enetr name for group "}});
    else{
       const body={ "group":{"user_id":"1","name":SearchValue}}
       axios.post('http://localhost:3000/groups',body)
       .then(response => {
         console.log("add Group reponse",response)
         this.props.onAddGroup(response);
       })
       .catch(error => console.log(error))
     }
}
   render() {
      return(
        <div className="row">
                     <div className="three wide column"> <span> </span></div>

                       <div className="two wide column">
                             <h3 className="ui center aligned segment  ">
                               {this.lable}
                              </h3>
                       </div>

                       <div className="four wide column">
                           <div className="ui huge icon input">
                            <input placeholder={this.searchPlaceHolder} type="text" ref='SearchVal'/>
                            <i className="users icon"></i>
                             </div>
                       </div>

                         <div className="five wide column">
                               <button className="ui  huge teal  button" onClick={this.handleBtnClick}>
                                 <i className="icon users"></i>
                                  {this.buttonName}
                               </button >
                         </div>
                     </div>

        );
      }
}
export default SearchGroup;
