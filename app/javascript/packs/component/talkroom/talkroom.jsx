import React from 'react';
import List from './list';
import Content from './content';
import TextInput from './textinput';
import FriendDrawer from './friend_drawer';
import {Grid, Row, Col} from 'react-bootstrap';
import {StyleSheet, css} from 'aphrodite';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Talkroom extends React.Component {

  componentWillMount() {
    const currentUserId = document.getElementById("object_id").getAttribute("reactdata");
    const talkUrl = 'http://localhost:3000/user_talks/' + document.getElementById("object_id").getAttribute("reactdata");
    const threadUrl = 'http://localhost:3000/user_rooms/' + document.getElementById("object_id").getAttribute("reactdata");
    this.props.fetchTalkData(talkUrl);
    this.props.fetchThreadData(threadUrl);
  }

  componentDidMount() {
    this.subscriptChannel();
  }

  componentDidUpdate() {
    this.scrollDown();
  }

  subscriptChannel() {
      console.log("checked")
      App.room = App.cable.subscriptions.create({
        channel: "RoomChannel",
        user_id: document.getElementById("object_id").getAttribute("reactdata")
      }, {
        connected: function() {},
        disconnected: function() {},
        received: function(data) {
          console.log("受信しました!");
          console.log(data);
          this.props.receivedData(data);
        }.bind(this),
        speak: function(message, user_id, user_name, room_id) {
          return this.perform('speak', {
            message: message,
            from_user_id: document.getElementById("object_id").getAttribute("reactdata"),
            to_user_id: user_id,
            from_user_name: document.getElementById("object_name").getAttribute("reactdata"),
            to_user_name: user_name,
            room_id: room_id
          });
        }
      });
    }

  scrollDown() {
      let obj = document.getElementById("scroll");
      obj.scrollTop = obj.scrollHeight;
    }




  render(){

    const styles = StyleSheet.create({
      rowcolumn: {
        padding: "0px"
      },
      scroll: {
        overflowY: "auto",
        height: "50%",
        minHeight: "100%"
      },
      height: {
        height: "100%"
      },
      contentHeight: {
        height: "90%",
        backgroundColor: "#cecece"
      },
      border: {
        border: "1px solid #cecece"
      },
      positionParent: {
        position: "relative"
      },
      positionChild: {
        position: "absolute",
        width: '100%',
        height: "10%",
        bottom: '-10%',
        margin: "0px",
        backgroundColor: '#cecece'
      },
      eighty: {
        backgroundColor: "rgba(127, 221, 251, 0.34)"
      }
    })

    return(
      <Grid className={css(styles.height)}>
        <Row className={css(styles.height, styles.rowcolumn)}>
          <Col sm={5} className={css(styles.rowcolumn, styles.scroll, styles.border)}>
            <List
              threadData={this.props.threadData}
              onThread={ index => this.props.clickThread(index) }
              selected={this.props.selected}
              loadingThread={this.props.loadingThread}
              getThreadError={this.props.getThreadError}
            />
          </Col>
          <Col sm={7} className={css(styles.rowcolumn, styles.columnColor, styles.contentHeight, styles.border, styles.positionParent)}>
            <div className={css(styles.scroll, styles.eighty)} id="scroll">
              <Content
                threadData={this.props.threadData}
                selected={this.props.selected}
                talkData={this.props.talkData}
                loadingTalk={this.props.loadingTalk}
                getTalkError={this.props.getTalkError}
              />
            </div>
            <div className={css(styles.positionChild)}>
              <TextInput nowThreadData={this.props.threadData[this.props.selected]}/>
            </div>
          </Col>
        </Row>
        <FriendDrawer
          handleToggle={this.props.handleToggle}
          drawerOpen={this.props.drawerOpen}
          followingData={this.props.followingData}
          fetchfollowerData={ url => this.props.fetchfollowerData(url)}
          clickList={ num => this.props.clickList(num) }
          loadingFollowing={this.props.loadingFollowing}
          getFollowingError={this.props.getFollowingError}
        />
      </Grid>
    );
  }
}

export default Talkroom;
