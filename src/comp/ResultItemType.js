import React from 'react'
import { hex } from './color-hexer'

class ResultItemType extends React.Component {
  color () {
    return hex(this.props.name)
  }

  // srsly, typestyle, asap
  style () {
    return {
      paddingLeft: 1,
      paddingRight: 1,
      borderRadius: 3,
      background: this.color()
    }
  }

  render () {
    return (
      <span style={this.style()}>
        {this.props.name}
      </span>
    )
  }
}

class ResultItemType1 extends React.Component {
  render () {
    return (
      <span>
        {this.props.name}:
      </span>
    )
  }
}


export default ResultItemType
