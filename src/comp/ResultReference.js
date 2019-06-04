import React from 'react'

const localUriBase = 'http://localhost:33333'

class ResultItemReference extends React.Component {
  uri () {
    if (this.isHttp()) {
      return this.localHttpUri()
    } else if (this.isFile()) {
      return this.fileUri()
    } else {
      throw new Error('issue determining browser protocol')
    }
  }

  // XXX: this is probably bad react style; pass down from root elt?
  isHttp () {
    return window.location.protocol === 'http:'
  }

  isFile () {
    return window.location.protocol === 'file:'
  }

  localHttpUri () {
    const path = this.props.link
    return `${localUriBase}/${path}`
  }

  fileUri () {
    return this.props.file
  }

  render () {
    return (
      <a href={this.uri()}>{this.props.name}</a>
    )
  }
}

export default ResultItemReference
