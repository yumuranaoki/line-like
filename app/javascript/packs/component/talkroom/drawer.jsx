import React from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class ListDrawer extends React.Component {

  componentDidMount() {
    const followerUrl = 'http://localhost:3000/user_followers/' + document.getElementById("object_id").getAttribute("reactdata");
    this.props.fetchfollowerData(followerUrl);
  }


  render() {

    const list = [];
    for (let i in this.props.followingData) {
      list.push(
        <div key={i}>
          <ListItem onClick={() => this.props.clickList(this.props.followingData[i])}>
            {this.props.followingData[i].name}
          </ListItem>
        </div>
      );
    }

    return(
      <Drawer
        width={300}
        open={this.props.drawerOpen}
      >
        <List>
          <Subheader>ともだち一覧</Subheader>
          <a href="http://localhost:3000/search">
            <ListItem>ともだちをさがす</ListItem>
          </a>
            {list}
          <a href="http://localhost:3000/search"></a>
        </List>
      </Drawer>

    );
  }
}

export default ListDrawer;
