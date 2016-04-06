'use strict';

import React from 'react';
import ReactDOM from 'react-dom/server';

class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>
  }
}

class World extends React.Component {
  render() {
    return <h1>World</h1>
  }
}
 
var html = ReactDOM.renderToString(<Hello/>);
html 	+= ReactDOM.renderToString(<World/>);
console.log(html);
