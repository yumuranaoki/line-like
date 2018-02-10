import React from 'react';
import Talkroom from '../component/talkroom/talkroom';
import {connect} from 'react-redux';
import {handleThread, fetchTalk, fetchThread} from '../action/talkroom';


const mapStateToProps = state => ({
  threadData: state.threadData,
  selected: state.selected,
  talkData: state.talkData
})


const mapDispatchToProps = dispatch => ({
  clickThread: (index) => dispatch(handleThread(index)),
  fetchTalkData: (url) => dispatch(fetchTalk(url)),
  fetchThreadData: (url) => dispatch(fetchThread(url))
})


const TalkroomConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Talkroom);


export default TalkroomConnected;
