import React, {Component} from 'react';

const styles = {
  footer: {
    position: 'absolute',
    bottom: 0,
    padding: 1+'%',
    width: 98 + '%',
    textAlign:'center',
  },
};

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div style={styles.footer}>
        Dream Chat © 2016
      </div>
    );
  }

}
