import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

function App() {
    return (
        <div className="App">
            <Comment author={{ name: 'coco' }} text={'hello'} />
        </div>
    );
}

export default App;
