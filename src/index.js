import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const name = 'Alex'
const text = 'I love the ReactJS'

ReactDOM.render(
  <React.StrictMode>
    <App myName={name} topPosition={'100px'} showRed />
  </React.StrictMode>,
  document.getElementById('root')
);

// export default index;