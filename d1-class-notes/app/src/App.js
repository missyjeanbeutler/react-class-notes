import React, { Component } from 'react'; // React is the whole thing and component is just biting off a slice. 
// react === {
//   Component: {

//   },
//   Render: function() {

//   },
//   doStuff: function() {

//   }
// }
// React is the whole object. Component is just the Componenet property (this is ES6 destructuring)

// ??????????????????????????  *************** ////////////////// Is the whole react object the default export and the component is included in that? Or is the component separate from the react object? ****************

import './App.css';

import Calculator from './Calculator' // you can now create a self closing tag with this name in the return statement below and it will render this component.

class App extends Component {
  render() {
    return ( // you don't need parenthesis, they're there to help with the indentation of the html. Makes life easier and cleaner. What IS necessary is wrapping everything in a div so everything will be returned. Stuff goes in there.
      <div>
        <Calculator/>
      </div>
    );
  }
}

export default App;

// two ways to export. Export and export default. 
// You can export multiple things unlike node. 



// File test.js
// --------

// export default {

// },
// export function functionName () {

// },
// export const otherVariable = '',
// export const otherObject = {

// }



// If you ... 
// import Test from './test' 
// --- you will get the export default
// if you ... 
// import {Test} from './test' 
// --- you will get nothing because there is no property being exported named Test... you can however... 
// import {functionName, otherVariable, otherObject} from './test' 
// because those things are being exported and will be saved to those variable names. 
// You can also ... 
// import Dummy, {functionName, otherVariable, otherObject} from './test' 
// --- Dummy can be whatever name you want, it doesn't matter, it will just be the value of the default export
// You can only have one default per file. 
