
import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));


//
//
// ReactDOM.render(<Header />, document.getElementById('Header'));
// ReactDOM.render(<Orders />, document.getElementById('Orders'));
// ReactDOM.render(<MyOrder />, document.getElementById('MyOrder'));

registerServiceWorker();
