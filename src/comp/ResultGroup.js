import React from 'react'

import ResultItem from './ResultItem'

class ResultGroup extends React.Component {
  render () {
    let items = this.props.data.map((data, idx) => {
      let key = idx
      return (<ResultItem key={key} data={data} />)
    })
    return (<div>{items}</div>)
  }
}

export default ResultGroup
