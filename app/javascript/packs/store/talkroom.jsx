import {applyMiddleware, createStore} from 'redux';
import reducer from '../reducer/talkroom';
import thunk from 'redux-thunk';


const initialState = {
  selected: 0,
  selectedUser: '',
  talkData: '',
  threadData: '',
  drawerOpen: false,
  followingData:'',
  loadingTalk: true
}


const store = createStore(reducer, initialState, applyMiddleware(thunk))

export default store;
