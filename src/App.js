import React, { Component } from 'react';
import {Voyager} from 'graphql-voyager';
import fetch from 'isomorphic-fetch';

const graphqlUrl = "https://fakerql.com/graphql";
class App extends Component {
  render() {
    function introspectionProvider(query) {
      return fetch(graphqlUrl, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({query: query}),
      }).then(response => response.json());
    }

   return (
      <div className="App">
        <Voyager introspection={introspectionProvider} />
      </div>
    );
  }
}

export default App;
