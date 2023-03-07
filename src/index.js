import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test from './ahooks/Test'
import Mutate from './ahooks/Mutate';
import TestCallBack from './react/testCallBack';
import UseState from "./react/useState"
import UseSetState1 from './ahooks/useSetState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TestCallBack />
    {/* <Test name="ajiao">a标签</Test> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
