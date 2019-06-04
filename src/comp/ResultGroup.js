import React from 'react'
import Columned from 'react-columned'

import ResultItem from './ResultItem'

class ResultGroup extends React.Component {
  items () {
    let items = this.props.data.map((data, idx) => {
      let key = idx
      return (<ResultItem key={key} data={data} />)
    })
    return items
  }

  normal () {
    return (<div>{this.items()}</div>)
  }

  columned () {
    return (
      <Columned columns={3} >
        {this.items()}
      </Columned>
    )
  }

  render () {
    return this.columned()
  }
}

export default ResultGroup
