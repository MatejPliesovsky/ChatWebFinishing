import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
  text:{fontSize: 30, marginLeft:30},
  circular:{width:240,height:240,borderRadius:100+'%'},
};

export default class ProfileCard extends React.Component {
  render() {
    return (
      <center>
      <div style ={{marginTop:20}}>
      <div>
      <img style={styles.circular} src="http://cdnstatic.visualizeus.com/thumbs/c1/b3/oink-c1b32f19ddb794be29d5194c1031e8c4_h.jpg"/>
      </div>
      <span style={styles.text}>
      <table>
        <tr>
          <td> First & Last Name: Miloš Kočan</td>
        </tr>
        <tr>
          <td>Nickname: Kocarik</td>
        </tr>
        <tr>
          <td>E-mail: kocarik123@gmail.com</td>
        </tr>
        <tr>
          <td>Age: 22</td>
        </tr>
        <tr>
          <td>Adress: Sobrance,XXX XX</td>
        </tr>
        <tr>
          <td>School: SSOŠ Dneperska 1, Košice</td>
        </tr>
        </table>
        </span>
    </div>
    </center>
  );
 }
}
