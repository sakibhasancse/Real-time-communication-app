import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { ContextProvider } from './SocketContext'
ReactDOM.render(<ContextProvider><App /></ContextProvider>, document.getElementById('root'))
