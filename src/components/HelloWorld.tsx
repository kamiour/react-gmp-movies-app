import React from 'react';

export default function HelloWorld() {
  const componentTitleElement = React.createElement('h3', {}, 'React.createElement:');

  return React.createElement('div', {}, componentTitleElement, 'Hello world');
}
