import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const myName = 'Alex';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App myName={myName} topPosition={'100px'} showRed />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// export default index;