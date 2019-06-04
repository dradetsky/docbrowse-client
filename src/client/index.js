import path from 'path'

import axios from 'axios'

const api = {
  uri: 'http://localhost:33333'
}

const inst = axios.create({
  baseURL: api.uri,
  headers: {
    'Access-Control-Allow-Origin': '*',
  }
})

function clientQuery(val) {
    // let url = searchUrl(val)
    let url = searchPath(val)
    let cfg = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Request-Origin': 'localhost'
      }
    }

  return inst.get(url, cfg)
}

function searchUrl(expr) {
  return path.join(api.uri, searchPath(expr))
}

function searchPath(expr) {
  const urlPath = `/search?expr=${expr}`
  return urlPath
}

const client = {}
client.query = clientQuery

export default client
