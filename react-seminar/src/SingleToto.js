import React, { Component } from 'react';
// class SingleTodo extends Component {
  // constructor() {
  //   super();
  // }

//   render() {
//     return(
      
//     );
//   }
// }
const SingleTodo = props => {
  return(
    <li>{props.todo}<button onClick = {props.delete}>X</button></li>
  );
}

export default SingleTodo;