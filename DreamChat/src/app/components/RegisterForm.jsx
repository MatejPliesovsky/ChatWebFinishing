import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
var {Link, IndexLink} = require('react-router');
import Paper from 'material-ui/Paper';

const styles={
  pap:{height: 500,
  width: 400,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block'},
  pos:{marginTop:1+'%'},
};

export default class RegisterForm extends React.Component {
  render() {
    return (
      <div style={styles.pos}>
      <center>
      <Paper style={styles.pap} zDepth={1} >
  <div>
    <h1>REGISTER</h1>
    <form method="post" action="/register">
      <TextField
        hintText="Please enter your nickname"
        name="nickname"
      /><br />
      <TextField
        hintText="Please enter your e-mail adress"
        name="email"
      /><br />
      <TextField
        hintText="Please enter your password"
        name="password"
        type="password"
      /><br />
      <TextField
        hintText="Please enter your phone"
        name="phone"
      /><br />
      <TextField
        hintText="Please enter your name"
        name="name"
      /><br />
      <TextField
        hintText="Please enter your suername"
        name="suername"
      /><br />
    <RaisedButton style={{marginTop:20}} type="submit" label="REGISTER" primary={true}/>
       <div><h4 className="text-center"><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>BACK TO HOME</IndexLink></h4></div>
    </form>
  </div>
</Paper>
</center>
</div>
  );
 }
}
