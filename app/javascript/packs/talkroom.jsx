import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import TalkroomConnected from './container/talkroom';
import store from './store/talkroom';



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store} >
      <TalkroomConnected />
    </Provider>,
    document.getElementById('talkroom-content'),
  )
})
