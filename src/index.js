import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/css/style.css"
import Main from './pages/Main';
import Header from './components/UI/Header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
    <Header/>
     <Main/>
 </div>
);



