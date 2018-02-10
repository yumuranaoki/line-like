import React from 'react';
import List from '../component/talkroom/list';
import {handleThread} from '../action/list';
import {connect} from 'react-redux';

function mapStateToProps(state) {
  return {
    threadData: state.threadData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clickThread() {
      dispatch(handleThread());
    }
  }
}

const ListConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ListConnected;
