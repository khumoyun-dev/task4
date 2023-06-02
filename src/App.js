import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';

function App() {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route exact path="/" element={ <Login /> } />
                    <Route path="/register" element={ <Register /> } />
                    {/* <Route path="/admin-panel" component={AdminPanel} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
