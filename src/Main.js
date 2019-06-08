import React from 'react'
import { HotKeys } from 'react-hotkeys'

import Search from './Search'
import './typo'
import ShowKeys from './keys/ShowKeys'
import keymap from './keys/keymap'

class Main extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      showKeys: false
    }
  }

  toggleKeys () {
    const curr = this.state.showKeys
    this.setState({showKeys: !curr})
  }

  showKeys () {
    if (this.state.showKeys) {
      return (<ShowKeys/>)
    } else {
      return undefined
    }
  }

  handlers = {
    OMG: event => {
      console.log('omg')
    },
    SHOW_KEYS: event => {
      this.toggleKeys()
    },
    UNBOUND: event => {
      console.log('unbound key')
    }
  }

  render () {
    return (
      <HotKeys handlers={this.handlers}>
        <div>
          <Search initQuery={"as"} />
          {this.showKeys()}
        </div>
      </HotKeys>
    )
  }
}

export default Main
