import React, { Component } from 'react';
import './App.css';
import GraphiQL from 'graphiql';
import WindowChrome from './WindowChrome.js'
import fetch from 'isomorphic-fetch';
import '../node_modules/graphiql/graphiql.css'

function graphQLFetcher(graphQLParams) {
  return fetch('http://localhost:9797', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json());
}

class App extends Component {
  render() {
    return (
      <div className="root-container">
        <div className="window-chrome-container">
          <WindowChrome/>
        </div>
        <GraphiQL fetcher={graphQLFetcher} />
      </div>
    );
  }
}

export default App;
