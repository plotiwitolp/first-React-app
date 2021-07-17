import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


    const postsData = [
        {id: 1, msg: "These posts create by React's props", likesCount: 20},
        {id: 2, msg: "Hi! How are you?", likesCount: 15},
        {id: 3, msg: "It is my first post", likesCount: 7},
    ]


ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
