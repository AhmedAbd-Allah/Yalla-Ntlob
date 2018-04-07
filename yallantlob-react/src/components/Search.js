import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';


class Search extends Component{

  constructor(props) {
   super(props);
   this.lable=props.lable
   this.buttonName=props.buttonName
   this.searchPlaceHolder=props.searchPlaceHolder

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
                            <input placeholder={this.searchPlaceHolder} type="text"/>
                            <i className="users icon"></i>
                             </div>
                       </div>

                         <div className="five wide column">
                               <button className="ui  huge teal  button">
                                 <i className="icon user"></i>
                                  {this.buttonName}
                               </button>
                         </div>
                     </div>

        );
      }
}
export default Search;
