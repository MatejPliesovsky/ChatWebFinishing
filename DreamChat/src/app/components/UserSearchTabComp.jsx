import React, {Component, PropTypes} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FriendsProfileComp from './FriendsProfileComp.jsx';
import OthersPComp from './OthersPComp.jsx';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 200,
  },
  mapping: {
    marginTop: 10,
    marginLeft:260,
  },
};

export default class UserSearchTabComp extends React.Component {

  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div className="user-desk-form">
      <Tabs style={styles.mapping}>
        <Tab label="Friends" value="a" >
          <div>
            <center>
              <h2 style={styles.headline}>Friends</h2>
            <p>
          <FriendsProfileComp/>
            </p>
            </center>
          </div>
        </Tab>
        <Tab label="Others" value="b">
          <div>
            <center>
              <h2 style={styles.headline}>Others</h2>
            <p>
            <OthersPComp/>
            </p>
            </center>
          </div>
        </Tab>
      </Tabs>
      </div>
    );
  }
}
