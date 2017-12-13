import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

interface FrameProps {
  children: React.ReactNode;
}

type FrameRouteProps = FrameProps & RouteComponentProps<any>;

class Frame extends React.Component<FrameRouteProps, any> {
  render() {
    return this.props.children;
  }
}

export default withRouter<FrameRouteProps>(Frame);
