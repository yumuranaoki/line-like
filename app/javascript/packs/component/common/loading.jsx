import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class CircularLoading extends React.Component {
  render(){
    return(
      <MuiThemeProvider>
        <CircularProgress size={80} thickness={5} value={10}/>
      </MuiThemeProvider>
    );
  }
}

export default CircularLoading;
