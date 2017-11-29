import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface LazyLoadProps {
  children?: React.ReactElement<any>;
}

export default class LazyLoad extends React.Component<LazyLoadProps, any> {
  constructor(props: LazyLoadProps) {
    super(props);
  }

  static propTypes = {
    a: PropTypes.number,
  };

  state = {
    a: 111,
  };

  componentWillMount(): void {}

  render() {
    return (
      <div>
        <p>'you habe ss'</p>
      </div>
    );
  }
}
