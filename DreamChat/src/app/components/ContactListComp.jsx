import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import {blue500, yellow600} from 'material-ui/styles/colors';

let SelectableList = MakeSelectable(List);

function wrapState(ComposedComponent) {
  return class SelectableList extends Component {
    static propTypes = {
      children: PropTypes.node.isRequired,
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

export default class ContactListComp extends React.Component {

  constructor(props) {
    super(props);
      this.handleSubmitButtonClick = this.handleSubmitButtonClick.bind(this);
  }

  handleSubmitButtonClick() {
      console.log('test');
this.props.history.pushState(null,"/");
  }

  render() {
    return (
  <div>
    <SelectableList>
      <ListItem
        value={1}
        primaryText="Brano David"
        secondaryText="branko"
        leftAvatar={
          <Avatar src="http://img.lum.dolimg.com/v1/images/07ff8e314e2798d32bfc8c39f82a9601677de34c.jpeg" />
        }
      />
      <ListItem
        value={2}
        primaryText="Matus Kokoska"
        secondaryText="Matus158"
        leftAvatar={
          <Avatar src="http://img.lum.dolimg.com/v1/images/07ff8e314e2798d32bfc8c39f82a9601677de34c.jpeg" />
        }
      />
      <ListItem
        value={3}
        onClick={this.handleSubmitButtonClick}
        primaryText="Tomas Muransky"
        secondaryText="KocurMurko"
        leftAvatar={
          <Avatar src="http://img.lum.dolimg.com/v1/images/eu_finding_nemo_chi_squirt_n_1c9ff515.jpeg" />
      }
      />
      <ListItem
        value={4}
        primaryText="Marian Osvald"
        secondaryText="Oskar"
        leftAvatar={
          <Avatar src="http://img.lum.dolimg.com/v1/images/eu_finding_nemo_chi_gurlgle_n_6eb7d6e3.jpeg" />
        }
      />
    </SelectableList>
  </div>
  );
 }
}
