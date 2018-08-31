import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import FaceBookMain from "./FaceBookMain";
import YouTube from "./YouTube";
import FaceBookRightPage from "./FaceBookRightPage";

<<<<<<< HEAD
//ReactDOM.render(<FaceBookMain/>, document.getElementById('root'));
ReactDOM.render(<FaceBookRightPage/>, document.getElementById('root'));
=======
ReactDOM.render(<FaceBookMain/>, document.getElementById('root'));
// ReactDOM.render(<YouTube/>, document.getElementById('root'));
>>>>>>> 127b116cbc07ba447ff8f2a794789b7730289fcf
registerServiceWorker();
