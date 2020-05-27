import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {configureStore} from "./store"
import * as serviceWorker from './serviceWorker';
// import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
const persistor = persistStore(store)

ReactDOM.render(
  <Provider store = {store}>
    <PersistGate
      persistor = { persistor }
      loading = {<div>Loading..</div>}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
