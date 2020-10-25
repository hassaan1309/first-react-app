import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Hello from './Hello';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
    <App name = "Hassaan Ahmad"/>
    <br/>
    <h3>List of Items:</h3>
    <ul>
      <li>Books</li>
      <li>Pencils</li>
      <li>School Bags</li>
    </ul>
    <br/>
    <h3>List of Electronic Items:</h3>
    <ol>
      <li>Laptop</li>
      <li>Cell Phone</li>
      <li>Television {5+10}</li>
    </ol>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
