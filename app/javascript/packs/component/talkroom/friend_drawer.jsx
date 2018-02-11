import React from 'react';
import ListDrawer from './drawer';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import {StyleSheet, css} from 'aphrodite';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class FriendDrawer extends React.Component {


  render(){
    const styles = StyleSheet.create({
      raisedButton: {
        position: 'fixed',
        top: '12%',
        right: '2%'
      }
    })

    const icon = (!this.props.drawerOpen) ? <ContentAdd /> : <ContentClear />

    return(
      <div>
        <MuiThemeProvider>
          <FloatingActionButton
            onClick={this.props.handleToggle}
            className={css(styles.raisedButton)}
          >
            {icon}
          </FloatingActionButton>
        </MuiThemeProvider>
        <MuiThemeProvider>
          <ListDrawer
            drawerOpen={this.props.drawerOpen}
            followingData={this.props.followingData}
            fetchfollowerData={(data) => this.props.fetchfollowerData(data)}
            clickList={ i => this.props.clickList(i) }
            loadingFollowing={this.props.loadingFollowing}
            getFollowingError={this.props.getFollowingError}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default FriendDrawer;
