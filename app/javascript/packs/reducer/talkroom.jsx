const reducer = (state, action) => {
  switch (action.type) {
    case 'CLICK_THREAD':
      console.log(state)
      console.log(state.selected)
      return Object.assign({}, state, {selected: action.selected})
    case "FETCH_TALK_SUCCESS":
      console.log('talk');
      return Object.assign({}, state, {talkData: action.talkData})
    case "FETCH_THREAD_SUCCESS":
      console.log('thread');
      return Object.assign({}, state, {threadData: action.threadData})
    default:
      return state;
  }
}

export default reducer;
