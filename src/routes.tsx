import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const loadDynamic = (dynamicImport: Promise<any>) =>
  Loadable({
    loader: () => dynamicImport,
    loading: Loading,
  });

const Home = loadDynamic(import('./containers/Home'));
const ResizeDragSnap = loadDynamic(import('./containers/ResizeDragSnap'));
const Counter = loadDynamic(import('./containers/Counter'));
const RxPlayground = loadDynamic(import('./containers/RxPlayground'));

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rds" component={ResizeDragSnap} />
    <Route exact path="/counter" component={Counter} />
    <Route exact path="/rx" component={RxPlayground} />
  </Switch>
);
