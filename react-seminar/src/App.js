import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SingleTodo from './SingleToto'

class App extends Component {
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //     </div>
  //   );
  // }
  
  // constructor() {
  //   super();
  //   this.state = {
  //     count: 0
  //   };
  // }
  // increment = () => {
  //   this.setState({ count: this.state.count + 1 });
  // }
  // render() {
  //   return (
  //     <div>
  //       <button onClick = {this.increment}>Increment</button>
  //       {this.state.count}
  //     </div>
  //   );
  // }
  constructor() {
    super();
    this.state = {
      todos: [],
      currentTodo: ''
    };
  }
  onInputChange = e => {
    this.setState({ currentTodo: e.target.value });
  }
  onClick = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);
    this.setState({ todos: todosCopy, currentTodo: '' });
  }
  deletetodo = i => {
    let todosCopy = this.state.todos.slice();
    todosCopy.splice(i, 1);
    this.setState({ todos: todosCopy});
  }
  render() {
    let bulletedTodos = this.state.todos.map((e, i) => {
        return(
          <SingleTodo todo = {e} delete = {() => this.deletetodo(i)}/>
        );
    });
    return (
      <div>
        <input placeholder = 'Enter todo' value = {this.state.currentTodo}
        onChange = {this.onInputChange}/>
        <button onClick = {this.onClick}>ADD!</button>
        <br />
        { this.state.todos.length === 0 ? 'nothing to do' : <ul>{bulletedTodos}</ul>}
      </div>
    );
  }
}

export default App;
