import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Toggle from 'material-ui/Toggle';

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
  win:{marginLeft:750},
  text:{fontSize: 30, marginLeft:30},
};

export default class UserTabsComp extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
      <Tabs style={styles.mapping} >
        <Tab label="SETTINGS" value="a" >
          <center>
          <div style={{marginTop:20}}>
            <span style={styles.text}> Notifications:</span><br/><br/>
            <Toggle defaultToggled={true} style={styles.win}/><br/><br/>
              <span style={styles.text}> Sounds:</span><br/><br/>
              <Toggle defaultToggled={true} style={styles.win}/>
          </div>
          </center>
        </Tab>
      </Tabs>
      </div>
    );
  }
}
