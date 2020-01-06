import React, {Component} from 'react';
import{connect} from 'react-redux';

class Header extends Component{
    renderContect(){
        console.log(this.props)
        switch (this.props.auth){
            case null:
                return <li><a href="/auth/github">Login with GitHub</a></li>;
            default:
                return <li><a href="/auth/logout">Log Out</a></li>
        }
    }
    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <a className="left brand-logo">Code-Review</a>
                    <ul className="right">
                        {this.renderContect()}
                    </ul>
                </div>
            </nav>
        )
    };
};

function mapStateToProps({auth}){
    return {auth}
}

export default connect(mapStateToProps)(Header);