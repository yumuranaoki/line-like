import React from 'react';
import Talkroom from '../component/talkroom/talkroom';
import {connect} from 'react-redux';
import {clickThread, fetchTalk, fetchThread,
        handleToggle, fetchFollower, clickList, getTalkError, getThreadError,
        getFollowingError, loadingTalk, loadingThread, loadingFollowing} from '../action/talkroom';


const mapStateToProps = state => ({
  threadData: state.threadData,
  selected: state.selected,
  selectedUser: state.selectedUser,
  talkData: state.talkData,
  followingData: state.followingData,
  drawerOpen: state.drawerOpen,
  loadingTalk: state.loadingTalk,
  loadingThread: state.loadingThread,
  loadingFollowing: state.loadingFollowing,
  talkError: state.talkError,
  threadError: state.threadError,
  followingError: state.followingError
})


const mapDispatchToProps = dispatch => ({
  clickThread: (index) => dispatch(clickThread(index)),
  clickList: (index) => dispatch(clickList(index)),
  fetchTalkData: (url) => dispatch(fetchTalk(url)),
  fetchThreadData: (url) => dispatch(fetchThread(url)),
  fetchfollowerData: (url) => dispatch(fetchFollower(url)),
  handleToggle: () => dispatch(handleToggle())
})


const TalkroomConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Talkroom);


export default TalkroomConnected;
