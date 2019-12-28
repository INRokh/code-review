import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header'

const Landing = () => <h2>Landing</h2>;
const Dashboard = () => <h2>Dashboard </h2>;
const GroupNew = () => <h2>Create group</h2>


const App = () => {
    return(
        <div className='container'>
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path='/' component={Landing} /> 
                    <Route exact path='/groups' component={Dashboard} />
                    <Route exact path='/groups/new' component={GroupNew} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;