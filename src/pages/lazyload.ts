import * as React from 'react';
import * as PropTypes from 'prop-types';

export interface LazyLoadProps {}

export default class LazyLoad extends React.Component<LazyLoadProps, any> {
  constructor(props: LazyLoadProps) {
    super(props);
  }

  static PropTypes = {};

  state = {
    a: 111,
  };

  componentWillMount(nextProps: LazyLoadProps): void {}
}
