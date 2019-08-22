import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Store from './store.js'
const store = new Store()
ReactDOM.render(<App store= {store} />, document.getElementById('root'));

serviceWorker.unregister();
