import Inferno from 'inferno';
import { Provider } from 'inferno-redux';
import { createStore } from 'redux';
import App from './App';
import './assets/main.css';

/* store */
import Home from './reducers/Home.js'

const store = createStore(function(Home){});

require('inferno-devtools');

Inferno.render(
    <Provider store={ store }>
        <App />
    </Provider>
    , document.getElementById('app')
 );