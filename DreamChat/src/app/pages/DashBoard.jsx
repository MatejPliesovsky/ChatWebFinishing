import React from 'react';
import DrawerComp from '../components/DrawerComp.jsx';
import Welcome from '../components/Welcome.jsx';
import UserTabsComp from '../components/UserTabsComp.jsx';

export default class DashBoard extends React.Component {
    render() {
        return (
            <div>
              <DrawerComp />
              <UserTabsComp />
            </div>
        );
    }
}
