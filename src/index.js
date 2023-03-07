import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test from './ahooks/Test'
import Mutate from './ahooks/Mutate';
import TestCallBack from './react/testCallBack';
import UseState from "./react/useState"
import UseSetState1 from './ahooks/useSetState';
import App from './react/testUsememo-useCallback/testUsememo-useCallback';
import Demo from './react/testUsememo-useCallback/demos/demo2';
import UseBoolean from './ahooks/UseBoolean';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseBoolean />
    {/* <Test name="ajiao">a标签</Test> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
