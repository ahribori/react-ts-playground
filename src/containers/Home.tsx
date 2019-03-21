import React, { Component } from 'react';
import withHello from '../hoc/withHello';

@withHello
class Home extends Component {
  render() {
    return <div>Home</div>;
  }
}

export default Home;
