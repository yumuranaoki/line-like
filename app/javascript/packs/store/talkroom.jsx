import {applyMiddleware, createStore} from 'redux';
import reducer from '../reducer/talkroom';
import thunk from 'redux-thunk';


const initialState = {
  selected: 0,
  talkData: [
          [{id: 1, content: 'これはinitialStateです'},
          {id: 2, content: 'これはinitialStateです'},
          {id: 3, content: 'これはinitialStateです'},],
          [{id: 4, content: 'これはinitialStateです'},
          {id: 5, content: 'これはinitialStateです'}]
        ],
  threadData: [
          {name: 'taro', comment: 'hogvxe'},
          {name: 'john', comment: 'hogvxe'},
          {name: 'marin', comment: 'hogvxe'},
          {name: 'joi', comment: 'hogvxe'},
        ]
}


const store = createStore(reducer, initialState, applyMiddleware(thunk))

export default store;
