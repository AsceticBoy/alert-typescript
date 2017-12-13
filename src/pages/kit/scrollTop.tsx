import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

interface ScrollTopProps {
  children: React.ReactNode;
}

type ScrollRouteProps = ScrollTopProps & RouteComponentProps<any>;

class ScrollTop extends React.Component<ScrollRouteProps, any> {
  componentDidUpdate(prevProps: ScrollRouteProps) {
    if (prevProps.location !== this.props.location && window.scrollTo) {
      // toggle route need scroll to top
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter<ScrollRouteProps>(ScrollTop);
