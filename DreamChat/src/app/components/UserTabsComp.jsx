import React, {Component, PropTypes} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ProfileCard from './ProfileCard.jsx';
import MessagesComp from './MessagesComp.jsx';
import {CardHeader} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import io from 'socket.io-client'
let socket = io();

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
  flouting: {
    marginRight: 20,
  },
};


export default class UserTabsComp extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
    this.loadDonationsFromServer = this.loadDonationsFromServer.bind(this);
  }
  loadDonationsFromServer() {
    // @TODO: Treba doriesit authorizaciu pre API! Potom pojde komunikovat cez API...
    $.ajax({
      url: 'http://localhost:8090/api/conversations',
      dataType: 'json',
      cache: false,
      success: function(data) {
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error("daco nedoooobre");
      }.bind(this)
    });
  }

  handleSubmitButtonClick() {
    console.log("test");
    let message = this.refs.messageField.getValue();
    const data = {
      user1: 2, // zatial hardcodovany userID
      user2: 3,
      message: message
    }
    socket.emit('send message', data);
  }


  render() {
    return (
      <div className="user-desk-form">
        <Tabs style={styles.mapping} >
          <Tab label="Profile" value="a" >
            <div>
              <center>
                <h2 style={styles.headline}>Profile</h2>
                <ProfileCard/>
                <FloatingActionButton style={styles.flouting}>
                  <ContentAdd />
                </FloatingActionButton>
              </center>
            </div>
          </Tab>
          <Tab label="Messages" value="b">
            <div>
              <center>
                <h2 style={styles.headline}>Messages</h2>
                <CardHeader
                  title="Tomas Muransky"
                  subtitle="KocurMurko"
                  avatar="http://img.lum.dolimg.com/v1/images/eu_finding_nemo_chi_squirt_n_1c9ff515.jpeg"
                />
                <MessagesComp/>
                <TextField
                  ref="messageField"
                  hintText="Type your message"
                />
                <RaisedButton onClick={this.loadDonationsFromServer} type="submit" label="LOAD SOMETHING" secondary={true}/>
                <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="SEND MESSAGE" secondary={true}/>
              </center>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
