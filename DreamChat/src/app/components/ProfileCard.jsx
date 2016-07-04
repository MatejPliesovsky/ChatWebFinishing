import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

const styles = {
  text:{fontSize: 30, marginLeft:30},
  circular:{width:240,height:240,borderRadius:100+'%'},
};


export default class ProfileCard extends React.Component {
  render() {
    return (
  <Card>
    <CardText>
        <center>
        <div style ={{marginTop:20}}>
        <div>
        <img style={styles.circular} src="http://img.lum.dolimg.com/v1/images/eu_finding_nemo_chi_squirt_n_1c9ff515.jpeg"/>
        </div>
        <span style={styles.text}>
        <table>
          <tr>
            <td> First & Last Name: Tomáš Muranský</td>
          </tr>
          <tr>
            <td>Nickname: KocurMurko</td>
          </tr>
          <tr>
            <td>E-mail: kocurmurko@gmail.com</td>
          </tr>
          <tr>
            <td>Age: 22</td>
          </tr>
          <tr>
            <td>Adress: Nad jazerom,Kosice,040 01</td>
          </tr>
          <tr>
            <td>School: SSOŠ Dneperska 1, Košice</td>
          </tr>
          </table>
          </span>
      </div>
      </center>
    </CardText>
  </Card>
  );
 }
}
