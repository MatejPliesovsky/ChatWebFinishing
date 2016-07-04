import React from 'react';
import DrawerComp from '../components/DrawerComp.jsx';
import Welcome from '../components/Welcome.jsx';

export default class WelcomePage extends React.Component {
    render() {
        return (
            <div>
              <DrawerComp />
              <Welcome />
            </div>
        );
    }
}
