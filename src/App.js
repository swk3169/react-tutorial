import React, { Component, Fragment } from 'react';
import MyName from './MyName';
import Counter from './Counter';
import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <MyName name="리액트" />
        </div>
        <div>
          <Counter />
        </div>
      </Fragment>
    );
  }
}

export default App;
