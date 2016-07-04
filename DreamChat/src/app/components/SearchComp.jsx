import React from 'react';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/search';

const styles={
  div:{marginLeft:5+'%'},
  write:{width:190},
};

export default class SearchComp extends React.Component {
  render() {
    return (
<form>
  <div style={styles.div}>
    <TextField
      hintText="Search" style={styles.write}/>
     <IconButton linkButton={true}
      href="/friendboard">
       <ActionHome />
     </IconButton>
    </div>
    </form>
  );
 }
}
