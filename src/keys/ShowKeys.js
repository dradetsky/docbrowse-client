import React from 'react'

import keymap from './keymap'

class ShowKeys extends React.Component {
  style () {
    const s = {
      zIndex: 2,
      position: 'absolute',
      background: 'rgba(255, 255, 255, 1)',
      top: '50px',
      right: '100px'
    }

    return s
  }

  renderKeymap () {
    const elts = Object.entries(keymap).map(([cmd, keybinds], idx) => {
      return (<KeyEntry key={idx} cmd={cmd} keybinds={keybinds} />)
    })
    return elts
  }

  render () {
    return (
      <div style={this.style()}>
        <div>
          the ShowKeys element
        </div>
        <div>
          {this.renderKeymap()}
        </div>
      </div>
    )
  }
}

class KeyEntry extends React.Component {
  keybinds () {
    const binds = this.props.keybinds
    if (Array.isArray(binds)) {
      return binds.join('|')
    } else {
      return binds
    }
  }

  out0 () {
    return (
      <div>
        <strong>{this.props.cmd}:</strong>
        <span> </span>
        {this.keybinds()}
      </div>
    )
  }

  out1 () {
    const style = {
      width: 40,
      display: 'inline-block'
    }
    return (
      <div>
        <strong>
          {this.keybinds()}
        </strong>
        <span style={style} > </span>
        {this.props.cmd}
      </div>
    )
  }

  render () {
    return this.out1()
  }
}

export default ShowKeys
