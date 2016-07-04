import React, {Component} from 'react';
import DrawerComp from '../components/DrawerComp.jsx';
import SettingsComp from '../components/SettingsComp.jsx';


export default class Settings extends Component {
    render() {
        return (
            <div>
              <DrawerComp/>
              <SettingsComp/>
            </div>
        );
    }
}
