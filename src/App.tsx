import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';
import './App.css';

class App extends Component {
  renderMenu = () => {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rds">Resize & Drag & Snap</Link></li>
      </ul>
    );
  };

  render() {
    return (
      <div className="App">
        <div className="Sidebar">{this.renderMenu()}</div>
        <article className="Main">{routes}</article>
      </div>
    );
  }
}

export default App;
