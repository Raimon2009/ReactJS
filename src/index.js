import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import persistor, { store } from './store';
import { CircularProgress } from '@mui/material';

const myName = 'Alex';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<CircularProgress />}>
        <App myName={myName} topPosition={'100px'} showRed />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// export default index;