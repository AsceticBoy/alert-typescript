import * as React from 'react'
import * as ReactDOM from 'react-dom'
//import { HashRouter, Redirect, Route, Switch, Link } from 'react-router-dom';

export interface entryProps {
  name?: string,
}

class Entry extends React.Component<entryProps, any> {
  render() {
    const { name } = this.props
    return (
      <p>{`hello ${name}`}</p>
    )
  }
}

ReactDOM.render(<Entry name='world'/>, document.getElementById('root'))