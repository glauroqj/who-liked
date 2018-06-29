import Inferno from 'inferno';
import { Provider } from 'inferno-redux';
import { createStore } from 'redux';
import App from './App';
import './assets/main.css';

/* store */
// import storage from './store/store'
// const store = createStore(storage);

require('inferno-devtools');

Inferno.render(
    <Provider>
        <App />
    </Provider>
    , document.getElementById('app')
 );