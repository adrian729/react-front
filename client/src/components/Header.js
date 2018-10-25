import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'components/HeaderStyle.css';
import * as actions from 'actions';

class Header extends Component {
    renderLinks() {
        if (this.props.authenticated) {
            return (
                <div>
                    <Link to="/feature">Feature</Link>
                    <Link to="/c3">C3 Example</Link>
                    <Link to="/chartjs">Chartjs Example</Link>
                    <Link to="/" onClick={this.props.signout}>Sign Out</Link>
                </div>
            );
        } else {
            return (
                <div>
                    <Link to="/signin">Sign In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="header">
                <Link to="/">Home</Link>
                {this.renderLinks()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(Header);