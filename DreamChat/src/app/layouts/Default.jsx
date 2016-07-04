import React, {Component} from 'react';
import AppBar from '../components/AppBar.jsx';
import Footer from '../components/Footer.jsx'

export default class Login extends Component {
    render() {
        return (
            <div>
                <AppBar />
                <div>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
