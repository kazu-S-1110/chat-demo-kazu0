import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { pushMessage } from '../firebase';

const MessageField = ({ inputEl, name, setText, text }) => {
  const [isComposed, setIsComposed] = useState(false); //編集中であるか識別するState

  return (
    <TextField
      autoFocus
      inputRef={inputEl}
      onChange={(e) => setText(e.target.value)}
      fullWidth={true}
      onKeyDown={(e) => {
        if (isComposed) return;

        const text = e.target.value;
        if (text === '') return; //空文字の場合であればなにも処理しない
        if (e.key === 'Enter') {
          pushMessage({ name, text });
          setText('');
          e.preventDefault(); //画面のリロードを防げる
        }
      }}
      onCompositionStart={() => setIsComposed(true)} //入力文字を識別するオプション
      onCompositionEnd={() => setIsComposed(false)}
      value={text}
    />
  );
};

export default MessageField;
