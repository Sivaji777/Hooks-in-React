import React, { Component } from 'react';
import Post from './post';

export class Delete extends Component{

    constructor(props) {
        super(props);
        this.state = {show: true};
      }
      delHeader = () => {
        this.setState({show: false});
      }
render(){
  return <div>
    <h1>Delete Component..........</h1>
    

       { 
               
        this.state.show === true ? <Post /> : ''
         }
           <button type="button" onClick={this.delHeader}>Delete Header</button> 
  </div>;
}
}

export default Delete;
