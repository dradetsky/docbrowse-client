import React from 'react'

import { hex } from './color-hexer'


class ResultItemDocsetName extends React.Component {
  color () {
    return hex(this.props.name)
  }

  colorStyle () {
    return {color: this.color()}
  }

  render () {
    // I should probably figure out css/typestyle
    return (
      <strong>
        <em style={this.colorStyle()}>
          {this.props.name}
        </em>
      </strong>
    )
  }
}

export default ResultItemDocsetName
