import React, {Component, PropTypes} from 'react';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {pink800, yellow600} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

let SelectableList = MakeSelectable(List);

const styles = {
  style:{margin: 12},
  win:{marginLeft:280},
  circular:{width:50,height:50,borderRadius:5000+'%'},
  text:{fontSize: 30, marginLeft:1+'%'},
};

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
      defaultValue: PropTypes.number.isRequired,
    };

    componentWillMount() {
      this.setState({
        selectedIndex: this.props.defaultValue,
      });
    }

    handleRequestChange = (event, index) => {
      this.setState({
        selectedIndex: index,
      });
    };

    render() {
      return (
        <ComposedComponent
          value={this.state.selectedIndex}
          onChange={this.handleRequestChange}
          >
          {this.props.children}
        </ComposedComponent>
      );
    }
  };
}

SelectableList = wrapState(SelectableList);

export default class OthersPComp extends React.Component {
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
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
        />,
      <FlatButton
        label="Send"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
        />,
    ];
    return (
      <div>
        <Dialog
          title="Send Friend Request?"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          >
          Really want to send a friend request?
        </Dialog>
        <table style={{border:1,width:1000}}>
          <SelectableList>
          <div>
            <span style={{marginRight:10+'%'}}>
              <img style={styles.circular} src="http://images4.fanpop.com/image/photos/17500000/Look-at-this-face-and-try-to-say-no-penguins-of-madagascar-17540302-377-349.jpg"/>
              <span style={styles.text}>Robo Pokora</span>
            </span>
          <RaisedButton onClick={this.handleOpen} type="submit" label="SEND REQUEST" primary={true} style={{margin:10}}/>
          <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="SEND MESSAGE" secondary={true} style={{margin:10}}/>
          <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="VIEW PROFILE" primary={true} style={{margin:10}}/>
            </div>
          <div>
            <span style={{marginRight:10+'%'}}>
              <img style={styles.circular} src="https://i.ytimg.com/vi/dyn_JBebR2I/maxresdefault.jpg"/>
              <span style={styles.text}>Miro Palko</span>
            </span>
            <RaisedButton onClick={this.handleOpen} type="submit" label="SEND REQUEST" primary={true} style={{margin:10}} />
            <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="SEND MESSAGE" secondary={true} style={{margin:10}}/>
            <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="VIEW PROFILE" primary={true} style={{margin:10}}/>
            </div>
            <div>
            <span style={{marginRight:10+'%'}}>
              <img style={styles.circular} src="http://images5.fanpop.com/image/photos/30500000/beautiful-Gia-madagascar-3-30561090-653-650.jpg"/>
              <span style={styles.text}>Samanta Lukacova</span>
            </span>
            <RaisedButton onClick={this.handleOpen} type="submit" label="SEND REQUEST" primary={true} style={{margin:10}}/>
            <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="SEND MESSAGE" secondary={true} style={{margin:10}}/>
            <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="VIEW PROFILE" primary={true} style={{margin:10}}/>
          </div>
          <div>
            <span style={{marginRight:10+'%'}}>
              <img style={styles.circular} src="http://www.trbimg.com/img-54935c75/turbine/la-apphoto-dreamworks-animation-all-hail-king-jul-20141218/650/650x366"/>
              <span style={styles.text}>Maros Kovac</span>
            </span>
            <RaisedButton onClick={this.handleOpen} type="submit" label="SEND REQUEST" primary={true} style={{margin:10}}/>
            <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="SEND MESSAGE" secondary={true} style={{margin:10}}/>
            <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="VIEW PROFILE" primary={true} style={{margin:10}}/>
          </div>
        </SelectableList>
        </table>
      </div>
    );
  }
}
