import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContainer from './container/appContainer';
import HeadMessagerContainer from "./container/headMessagerContainer";
import { store } from './app/store';
import { Provider } from 'react-redux';
import { BrowserRouter,HashRouter  } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root')
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(

    <Provider store={store}>
      <BrowserRouter>
        < HeadMessagerContainer />
        < AppContainer />
      </BrowserRouter>
    </Provider>,
  
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
