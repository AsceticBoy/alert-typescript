import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Container from './container'

export interface EntryProps {
  name?: string,
}

class Entry extends React.Component<EntryProps, any> {
  render() {
    const { name } = this.props
    return (
      <p>{`hello ${name}`}</p>
    )
  }
}

ReactDOM.render(<Entry name='world'/>, document.getElementById('root'))