import * as React from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import { Provider } from 'mobx-react';
import AppStores from './stores';

export interface ContainerProps {}

export default class Container extends React.Component<ContainerProps, any> {
  render() {
    return (
      <Provider {...AppStores}>
        <Router />
      </Provider>
    );
  }
}
