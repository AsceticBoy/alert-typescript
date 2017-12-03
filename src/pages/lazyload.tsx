import * as React from 'react';

// getComponent is a function that returns a promise for a component
// it will not be called until the first mount
export default function asyncComponent(
  getComponent: any
): React.ComponentClass {
  return class AsyncComponent extends React.Component {
    static Component: React.ComponentClass | null = null;

    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then((Component: React.ComponentClass) => {
          AsyncComponent.Component = Component;
          this.setState({ Component });
        });
      }
    }

    render() {
      const { Component } = this.state;
      if (Component) {
        return <Component {...this.props} />;
      }
      return null;
    }
  };
}
