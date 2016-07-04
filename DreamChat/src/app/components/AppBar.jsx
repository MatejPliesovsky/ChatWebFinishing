import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import SettingIcon from 'material-ui/svg-icons/action/settings';
import {Link} from 'react-router';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/* import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession; */

export default class AppbarWithNav extends Component {
  constructor(props){
    super(props);
  }

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="NO"
        primary={true}
        onTouchTap={this.handleClose}
        />,
      <FlatButton
        label="YES"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
        />,
    ];

    const iconElementRight = <IconMenu
      iconButtonElement={
        <IconButton><SettingIcon /></IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
      <Link to="http://localhost:1337/profile"><MenuItem primaryText="Profile" /></Link>
      <Link to="http://localhost:1337/settings"><MenuItem primaryText="Settings" /></Link>
      <Link to="/"><MenuItem primaryText="Sign out" onTouchTap={this.handleOpen} /></Link>
    </IconMenu>

    return (
      <div>
        <AppBar title="Dream Chat" iconElementRight={iconElementRight} />
        <Dialog
          title="Sign out?"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          >
          Really you want to sign out?
        </Dialog>
      </div>
    );
  }
}
