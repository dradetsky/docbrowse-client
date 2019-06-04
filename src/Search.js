import React from 'react'

import { ResultGroup } from './comp'
import client from './client'

class Search extends React.Component {
  constructor () {
    super()
    this.state = {
      data: [],
    }
    // i forget why we do this
    this.handleTyping = this.handleTyping.bind(this)
  }

  handleTyping (e) {
    let val = e.target.value
    this.queryAndDisplay(val)
  }

  queryAndDisplay (val) {
    if (val.length > 0) {
      client.query(val).then((res) => {
        this.setState({data: res.data})
      })
    } else {
      this.setState({data: []})
    }
  }

  render () {
    return (
      <div>
        <input
          id='box'
          ref={(box) => { this.box = box }}
          type='text'
          onChange={this.handleTyping} />
        <ResultGroup data={this.state.data} />
      </div>
    )
  }
}

export default Search
