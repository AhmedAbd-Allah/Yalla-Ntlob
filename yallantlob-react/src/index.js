import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Orders from './orders';
import MyOrder from './MyOrder';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('Header'));


ReactDOM.render(<Orders />, document.getElementById('Orders'));


// ReactDOM.render(<MyOrder />, document.getElementById('MyOrder'));



registerServiceWorker();
