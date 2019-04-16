import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from './routes';
import './App.css';
import { inject } from './lib/reduxStoreInjector';
import { Dispatch } from 'redux';
import { TodoState } from './reduxStore/todo';

interface AppProps {
  dispatch?: Dispatch;
  todo?: TodoState;
}

@(inject(['todo']) as any)
class App extends Component<AppProps> {
  renderMenu = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rds">Resize & Drag & Snap</Link>
        </li>
        <li>
          <Link to="/counter">MobX Counter</Link>
        </li>
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

  componentDidMount() {}
}

export default App;
