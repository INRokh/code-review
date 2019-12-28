import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header'

// const Landing = () => <h2>Landing</h2>;
//{/* <Route exact path='/' component={Landing} />  */}

class App extends React.Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    
    render() {
        return(
            <div className='container'>
                <BrowserRouter>
                    <div>
                        <Header />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);