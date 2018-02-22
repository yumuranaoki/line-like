const reducer = (state, action) => {
  switch (action.type) {
    case 'CLICK_THREAD':
      return Object.assign({}, state, {selected: action.selected})

    case 'CLICK_LIST':
      let userList = [];
      for (let i in state.threadData){
        userList.push(state.threadData[i].user_id)
      }
      //threadDataに選択したともだちが存在するかで場合分け
      if (userList.includes(action.selectedUser['id'])){
        const index = userList.indexOf(action.selectedUser['id'])
        return Object.assign({}, state, {selected: index, drawerOpen: !state.drawerOpen})
      } else {
        let newThreadData = Object.assign({}, state.threadData);
        let newTalkData = Object.assign({}, state.talkData);
        let newThread = {user_id: action.selectedUser['id'], user:action.selectedUser['name'], comment: ""}
        let newTalk = [{user_id: '', content: ''}];
        let tmp = []
        for (let i in newThreadData) {
          tmp.push(newThreadData[i])
        }
        tmp.unshift(newThread);
        let tmpTalk = []
        for (let i in newTalkData) {
          tmpTalk.push(newTalkData[i])
        }
        tmpTalk.unshift(newTalk)
        return Object.assign({}, state, {
          selected: 0,
          threadData: tmp,
          talkData: tmpTalk,
          drawerOpen: !state.drawerOpen
        })
      }
      return Object.assign({}, state, {selectedUser: action.selectedUser})

    case "FETCH_TALK_SUCCESS":
      return Object.assign({}, state, {talkData: action.talkData})

    case "FETCH_THREAD_SUCCESS":
      console.log(state.threadData[state.selected]);
      let newSelected = 0
      if (state.threadData[state.selected] !== undefined) {
        const selectedId = state.threadData[state.selected]['id']
        console.log(selectedId)
        for (let i in action.threadData) {
          if (action.threadData[i]['id'] == selectedId) {
            newSelected = i
            break
          }
        }
      }
      return Object.assign({}, state, {
        threadData: action.threadData,
        selected: newSelected
      })

    case "FETCH_FOLLOWING_SUCCESS":
      return Object.assign({}, state, {followingData: action.followingData})

    case 'HANDLE_TOGGLE':
      return Object.assign({}, state, {drawerOpen: !state.drawerOpen})

    case 'GET_TALK_ERROR':
      return Object.assign({}, state, {talkError: action.hasError})
    case 'GET_THREAD_ERROR':
      return Object.assign({}, state, {threadError: action.hasError})
    case 'GET_FOLLOWING_ERROR':
      return Object.assign({}, state, {followingError: action.hasError})
    case 'LOADING_TALK':
      return Object.assign({}, state, {loadingTalk: action.isLoading})
    case 'LOADING_THREAD':
      return Object.assign({}, state, {loadingThread: action.isLoading})
    case 'LOADING_FOLLOWING':
      return Object.assign({}, state, {loadingFollowing: action.isLoading})

    default:
      return state;
  }
}

export default reducer;
