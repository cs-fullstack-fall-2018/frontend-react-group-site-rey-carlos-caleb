import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import FaceBookMain from "./FaceBookMain";
import YouTube from "./YouTube";
import FaceBookRightPage from "./FaceBookRightPage";

//ReactDOM.render(<FaceBookMain/>, document.getElementById('root'));
ReactDOM.render(<FaceBookRightPage/>, document.getElementById('root'));
registerServiceWorker();
