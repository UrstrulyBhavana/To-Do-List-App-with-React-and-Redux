import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; // Connect Redux to React
import store from './Redux/store'; // Import Redux store
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
