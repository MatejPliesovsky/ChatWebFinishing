import React, {Component} from 'react';
import {Link} from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  content: {
    marginLeft: 200,
  },

  headline: {
    fontSize: 68,
    padding: 15,
    marginBottom: 2 + '%',
    fontWeight: 200,
  },

  line1: {
    width:600,
    marginTop: 5 + '%',
    marginBottom: 5 + '%',
    border:'1px solid black'
  },

  line2: {
    width:500,
    marginTop: 5 + '%',
    marginBottom: 5 + '%',
    border:'1px solid black'
  },

  btnGetStarted: {
    width:200,
    height:65,
  },
};

export default class Welcome extends Component {
  constructor(props) {
      super(props);
  }

    render() {
      return(
        <center>
          <div style={styles.content}>
              <div style={styles.headline}>WELCOME FIRSTNAME TO</div>
              <div>
                <img src="http://s33.postimg.org/o0duu0dbj/logo_dereamchat.png"/>
                <div style={styles.line1}></div>
                <div style={styles.line2}></div>
                <RaisedButton onClick={this.handleSubmitButtonClick} containerElement={<Link to="/dashboard" />} type="submit" label="GET STARTED" primary={true}/>
              </div>
          </div>
        </center>
      );
    }
}
