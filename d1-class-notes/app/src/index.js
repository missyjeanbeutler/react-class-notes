import React from 'react'; // name the variable on the left and the file on the right
import ReactDOM from 'react-dom';
import './index.css'; // no variable for the css. Just import the file and it will be included in the bundle file.
// CSS files are scoped to the file itself so there are no naming conflicts. Mmmmmm yeeesss... 
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root')); // ReactDOM reacts with the DOM. We tell it to render a component named App. It MUST be capitalized. JSX can be done anywere. It doesn't have to be in the render. Find the element with the id of root and render it there. 
registerServiceWorker();
