import React, { useState } from 'react';
import Signin from './Signin';
import Main from './main';
import config from '../config.json';

export default () => {
  const [name, setName] = useState(''); //useStateの中身に初期値を設定可能

  if (config.signInEnabled && name === '') {
    return <Signin setName={setName} />;
  } else {
    return <Main name={name} />;
  }
};
