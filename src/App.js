import React from 'react';
import PropTypes from "prop-types";

// state class component를 사용해야된다
class App extends React.Component{

  
  // 바꾸고 싶은 데이터를 state 안에 넣는다
  state = {
    count: 0
  };

  add = () => {
    // setState를 호출하면 statpe를 refresh하고 render()를 호출해준다.
    this.setState(current => ({count:current.count+1}))
  };
  minus = () => {
    // this.setState({count:this.state.count-1}) : 잘 사용하지 않는다.
    this.setState(current => ({count:current.count-1}))
  };

  render(){
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
