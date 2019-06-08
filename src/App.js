import React from 'react'
import { HotKeys, configure } from 'react-hotkeys'

import Main from './Main'
import keymap from './keys/keymap'

configure({
  ignoreTags: ['select', 'textarea']
})

function App() {
  return (
    <HotKeys keyMap={keymap}>
      <Main/>
    </HotKeys>
  )
}

export default App
