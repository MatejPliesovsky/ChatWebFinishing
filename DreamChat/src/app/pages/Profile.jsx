import React, {Component} from 'react';
import DrawerComp from '../components/DrawerComp.jsx';
import ProfileView from '../components/ProfileView.jsx';
import ProfileEdit from '../components/ProfileEdit.jsx';


export default class Settings extends Component {
    render() {
        return (
            <div>
              <DrawerComp/>
              <ProfileView/>
              <ProfileEdit/>
            </div>
        );
    }
}
