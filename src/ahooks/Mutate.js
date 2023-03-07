// import { message } from 'antd';
import React, { useState, useRef } from 'react';
import { useRequest } from "ahooks"
// import Mock from 'mockjs';

function getUsername(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("123");
    }, 1000);
  });
}

function editUsername(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve();
      } else {
        reject(new Error('Failed to modify username'));
      }
    }, 1000);
  });
}

export default function Mutate(Props) {
  // store last username
  const lastRef = useRef();

  const [state, setState] = useState('');

  // get username
  const { data: username, mutate } = useRequest(getUsername);

  // edit username
  const { run: edit } = useRequest(editUsername, {
    manual: true,
    onSuccess: (result, params) => {
      setState('');
      alert(`The username was changed to "${params[0]}" !`);
    },
    onError: (error) => {
      alert(error.message);
      mutate(lastRef.current);
    },
  });

  const onChange = () => {
    lastRef.current = username;
    mutate(state);
    edit(state);
  };

  return (
    <div>
      <p>Username: {username}</p>
      <input
        onChange={(e) => setState(e.target.value)}
        value={state}
        placeholder="Please enter username"
        style={{ width: 240, marginRight: 16 }}
      />
      <button type="button" onClick={onChange}>
        Edit
      </button>
    </div>
  );
};