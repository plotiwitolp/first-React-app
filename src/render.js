import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import state from "./redux/state";
import {addPost} from "./redux/state";
import {addMyMessage} from "./redux/state";



export const rerenderEntireTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMyMessage={addMyMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

}
