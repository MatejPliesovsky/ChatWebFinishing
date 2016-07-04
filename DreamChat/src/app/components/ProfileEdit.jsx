import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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

export default class ProfileEdit extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      <Tabs style={styles.mapping} >
        <Tab label="EDIT PROFILE" value="a" >
          <div>
            <center>
            <TextField
                id="text-field-default"
                defaultValue="Kocarik"
                /><br />
                <TextField
                  hintText="Password"
                  type="password"
                  /><br />
                <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="SUBMIT" primary={true}/>
                </center>
          </div>
        </Tab>
      </Tabs>
      </div>
    );
  }
}
