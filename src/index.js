import { render } from 'inferno';
import { Provider } from 'inferno-redux';
import { createStore } from 'redux';
import App from './App';
import './assets/main.css';

const store = createStore(function(state, action) {
  switch (action.type) {
    case 'CHANGE_NAME':    
      return {
        name: action.name
      }
    default:
      return {
        name: 'TOM'
      };
  }
})

render(
    <Provider store={ store }>
        <App />
    </Provider>
    , document.getElementById('app')
 );