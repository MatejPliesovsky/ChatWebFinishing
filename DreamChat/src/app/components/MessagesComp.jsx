import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

  const styles = {
  leftcard:{height: 100,
    width: 200,
    margin: 20,
    marginLeft:750,
    textAlign: 'center',
    display: 'inline-block',
  },
   rightcard:{
     height: 100,
       width: 200,
       margin: 20,
       marginRight:750,
       textAlign: 'center',
       display: 'inline-block',
   }
};

export default class MessagesComp extends React.Component {

  render() {
    return (
  <Card>
    <div>
        <Paper label="Ahoj" style={styles.rightcard} zDepth={4}><br/>AHoj</Paper><br />
        <Paper style={styles.leftcard} zDepth={4} ><br/>Čaueeees</Paper><br /><br />
        <Paper style={styles.rightcard} zDepth={4} ><br/>Ako sa máš</Paper><br />
        <Paper style={styles.leftcard} zDepth={4} ><br/>Senzačnéééé a ty</Paper><br /><br />
        <Paper style={styles.rightcard} zDepth={4} ><br/>Aj u mna to újde</Paper><br />
        <Paper style={styles.leftcard} zDepth={4} ><br/>Ideme pařít tento piatok?</Paper><br /><br />
      </div>
  </Card>
  );
 }
}
