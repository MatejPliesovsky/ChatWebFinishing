import React, {Component, PropTypes} from 'react';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {blue500, yellow600} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';

let SelectableList = MakeSelectable(List);

const styles = {
  style:{margin: 12},
  win:{marginLeft:280},
  text:{fontSize: 30, marginLeft:1+'%'},
  circular:{width:50,height:50,borderRadius:5000+'%'},
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

export default class FriendsProfileComp extends React.Component {
  render() {
      return (
        <table style={{width:800}}>
  <div>
    <SelectableList>
        <div>
          <span style={{marginRight:10+'%'}}>
            <img style={styles.circular} src="http://showbizgeek.com/wp-content/uploads/2013/04/Screen-Shot-2013-04-29-at-18.57.55.png"/>
            <span style={styles.text}>Tomas Muransky</span>
        </span>
        <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="SEND MESSAGE" secondary={true} style={{margin:10}}/>
        <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="VIEW PROFILE" primary={true} style={{margin:10}}/>
      </div>
      <div>
        <span style={{marginRight:10+'%'}}>
          <img style={styles.circular} src="http://img.csfd.cz/files/images/film/photos/159/259/159259152_2d7948.jpg?w700"/>
        <span style={styles.text}> Samuel Plavcik</span>
      </span>
      <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="SEND MESSAGE" secondary={true} style={{margin:10}}/>
      <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="VIEW PROFILE" primary={true} style={{margin:10}}/>
    </div>
    <div>
      <span style={{marginRight:10+'%'}}>
        <img style={styles.circular} src="http://strategie.hnonline.sk/sites/default/files/obrazky/sprava/tucniacizmadagaskaru.jpg"/>
        <span style={styles.text}>Michael Gorbacov</span>
    </span>
    <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="SEND MESSAGE" secondary={true} style={{margin:10}}/>
    <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="VIEW PROFILE" primary={true} style={{margin:10}}/>
  </div>
  <div>
    <span style={{marginRight:10+'%'}}>
      <img style={styles.circular} src="http://images5.fanpop.com/image/photos/31200000/Alex-M3EMW-madagascar-3-31228226-1366-768.png"/>
    <span style={styles.text}>Pavel Pavlovsky</span>
  </span>
  <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="SEND MESSAGE" secondary={true} style={{margin:10}}/>
  <RaisedButton onClick={this.handleSubmitButtonClick} type="submit" label="VIEW PROFILE" primary={true} style={{margin:10}}/>
</div>
    </SelectableList>
  </div>
  </table>
  );
 }
}
