import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root'))
// .render(
//   <>
//     <h1>Hello World</h1>
//     <App></App>
//   </>
// );

// works in alternative way also...
// ReactDOM.render(
//   <>
//     <h1>This is h1</h1>
//   </>,
//   document.getElementById('root')
// );

// above 16 version we can pass the array also...
// ReactDOM.render(
//   [
//     <h1>This is h1</h1>,
//     <h2>This is h2</h2>,
//     <h3>This is h3</h3>,
//   ],
//   document.getElementById('root')
// );

// above 16 version we can pass the array also...
// ReactDOM.render(
//   <React.Fragment>    
//     <h1>This is h1</h1>
//     <h2>This is h2</h2>
//     <h3>This is h3</h3>
//   </React.Fragment>,
//   document.getElementById('root')
// );


ReactDOM.render(
  <App></App>,
  document.getElementById('root')
);