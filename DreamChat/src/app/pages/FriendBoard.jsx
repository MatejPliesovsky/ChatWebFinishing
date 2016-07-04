import React from 'react';
import DrawerComp from '../components/DrawerComp.jsx';
import UserSearchTabComp from '../components/UserSearchTabComp.jsx';

export default class FriendBoard extends React.Component {
    render() {
        return (
            <div>
              <DrawerComp/>
              <UserSearchTabComp/>
            </div>
        );
    }
}
