import React from 'react';
import { Route } from 'react-router';

import Body from './pages/Body'
import Header from './pages/Header'

export default function App() {
    return (
        <div className="root-grid">
            <Header />
            <Route path='/'>
                <Body />
            </Route>
        </div>
    )
}
