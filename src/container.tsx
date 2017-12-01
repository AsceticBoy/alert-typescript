import * as React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'mobx-react';
import AppStores from './stores/index';

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
