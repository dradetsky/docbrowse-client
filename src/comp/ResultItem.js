import React from 'react'

import DocsetName from './ResultItemDocsetName'
import Reference from './ResultReference'
import Type from './ResultItemType'

class ResultItem extends React.Component {
  style () {
    return {
      margin: 0
    }
  }

  // this is just to make experimenting with diff outputs easier
  current () {
    let data = this.props.data
    return (
      <div style={this.style()}>
        <Type name={data.type} />
        <span> </span>
        <Reference {...data} />
        <span> </span>
        <DocsetName name={data.set} />
      </div>
    )
  }

  render () {
    return this.current()
  }
}

export default ResultItem
