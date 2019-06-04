import React from 'react'
import colorspace from 'colorspace'


class ResultItemType0 extends React.Component {
  color () {
    return colorspace(this.props.name)
  }

  colorStyle () {
    return {color: this.color()}
  }

  render () {
    return (
      <strong style={this.colorStyle()}>
        {this.props.name}:
        <span> </span>
      </strong>
    )
  }
}

class ResultItemType extends React.Component {
  render () {
    return (
      <span>
        {this.props.name}:
      </span>
    )
  }
}


export default ResultItemType
