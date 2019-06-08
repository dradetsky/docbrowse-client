import React from 'react'
import { HotKeys } from 'react-hotkeys'

import { ResultGroup } from './comp'
import client from './client'

class Search extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
    }
    // i forget why we do this
    this.handleTyping = this.handleTyping.bind(this)
    if (props.initQuery) {
      this.queryAndDisplay(props.initQuery)
    }
  }

  // still req'd with autoFocus? or even relevant?
  componentDidUpdate () {
    this.box.focus()
  }

  get isSearchBoxFocused () {
    return (this.box === document.activeElement)
  }

  toggleBoxFocus () {
    if (this.isSearchBoxFocused) {
      this.notBox.focus()
    } else {
      this.box.focus()
    }
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

  handlers = {
    SWITCH_FOCUS: event => {
      this.toggleBoxFocus()
    }
  }

  render () {
    return (
      <HotKeys handlers={this.handlers}>
        <div>
          <div id='notBox'
               tabindex={-99}
               ref={(notBox) => { this.notBox = notBox }} />
          <input autoFocus
                 id='box'
                 ref={(box) => { this.box = box }}
                 type='text'
                 defaultValue={this.props.initQuery}
                 onChange={this.handleTyping} />
          <ResultGroup data={this.state.data} />
        </div>
      </HotKeys>
    )
  }
}

export default Search
