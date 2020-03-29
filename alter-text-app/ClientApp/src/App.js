import React from 'react';
import { Route } from 'react-router';

import Main from './pages/Main'
import Header from './pages/Header'

export default function App() {
    return (
        <div className="root-grid">
            <Header />
            <Route path='/'>
                <Main />
            </Route>
        </div>
    )
}
