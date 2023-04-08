import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';

import App from './App';
// import reducers from './reducers/index'

// const store = createStore(reducers, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  <BrowserRouter>
      {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);


