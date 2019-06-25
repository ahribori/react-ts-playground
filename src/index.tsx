import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { initializeStore, RootState } from './reduxStore';
import { Provider as MobxProvider } from 'mobx-react';
import * as MobxStores from './mobxStore';

ReactDOM.render(
  <Router>
    <ReduxProvider store={initializeStore({} as RootState)}>
      <MobxProvider {...MobxStores}>
        <App />
      </MobxProvider>
    </ReduxProvider>
  </Router>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
