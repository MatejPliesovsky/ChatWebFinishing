import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import UserProfile from './UserProfile.jsx';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  mapping: {
    marginTop: 10,
    marginLeft:260,
  },
};

export default class ProfileView extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      <Tabs style={styles.mapping} >
        <Tab label="Profile" value="a" >
          <div>
              <UserProfile/>
          </div>
        </Tab>
      </Tabs>
      </div>
    );
  }
}
