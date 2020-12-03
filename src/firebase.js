import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBrblBI3c-HrXiGd8LA0Oslr7KqAIRg-lI',
  authDomain: 'chat-demo-kazu0.firebaseapp.com',
  projectId: 'chat-demo-kazu0',
  storageBucket: 'chat-demo-kazu0.appspot.com',
  messagingSenderId: '275798182518',
  appId: '1:275798182518:web:6ce95049d0b81e41242d57',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export const messagesRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messagesRef.push({ name, text });
};
