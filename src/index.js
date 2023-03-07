import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Test'
import Mutate from './Mutate';
import TestCallBack from './testCallBack';
import reportWebVitals from './reportWebVitals';
import UseState from "./useState"
import UseSetState1 from './useSetState';

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
reportWebVitals();
