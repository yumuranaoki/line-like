const reducer = (state, action) => {
  switch (action.type) {
    case 'CLICK_THREAD':
      return Object.assign({}, state, {selected: action.selected})

    case 'HANDLE_LIST':
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
      return Object.assign({}, state, {threadData: action.threadData})

    case "FETCH_FOLLOWING_SUCCESS":
      return Object.assign({}, state, {followingData: action.followingData})

    //action cableで値を受けっったときの処理
    //talkを追加
    //listのcommentを編集
    case "FETCH_TALK_BY_DATA":
      //duplicate state.talkData and state.threadData
      let newTalkData = Object.assign({}, state.talkData);
      let newThreadData = Object.assign({}, state.threadData);
      let message = action.talkDataByData["message"];
      let messageId = action.talkDataByData["message_id"];
      let roomId = action.talkDataByData["room_id"];
      let fromUserId = action.talkDataByData["from_user_id"];
      let fromUserName = action.talkDataByData["from_user_name"];
      let toUserId = action.talkDataByData["to_user_id"];
      let toUserName = action.talkDataByData["to_user_name"];
      let newTalk = {user_id: fromUserId, content: message, id: messageId};
      //現在選択されているトークにつっこんでしまっている
      //action.talkDataからfrom_userを取得
      let currentUserId = document.getElementById("object_id").getAttribute("reactdata");
      if (fromUserId == currentUserId){
        //from_userが自分なら
        //newTalkData[state.selected].push(newTalk);
        //newThreadData[state.selected]['comment'] = message;

        /*
        newTalkData[state.selected].push(newTalk);
        newThreadData[state.selected]['comment'] = message;
        if (newThreadData[state.selected]['id'] === undefined) {
          newThreadData[state.selected]['id'] = roomId;
        }
        */
        let tmpThreadArray = [];
        let subtmpTalkArray = [];
        let tmpTalkArray = [];
        for (let i in newThreadData) {
          if (i == state.selected) {
            continue;
          }
          tmpThreadArray.push(newThreadData[i])
        }
        for (let i in newTalkData) {
          if (i == state.selected) {
            subtmpTalkArray.push(newTalkData[i])
            subtmpTalkArray[0].push({user_id: fromUserId, content: message, id: messageId})
            continue;
          }
          tmpTalkArray.push(newTalkData[i])
        }
        tmpThreadArray.unshift({id: roomId, user: toUserName, user_id: toUserId, comment: message})
        let mixedtmpTalkArray = subtmpTalkArray.concat(tmpTalkArray);
        return Object.assign({}, state, {
          talkData: mixedtmpTalkArray,
          threadData: tmpThreadArray,
          selected: 0
        })
      } else {
        //from_userが他人なら
        //threadDataのuser_listの中にいるか確認
        let userList = [];
        for (let i in state.threadData){
          userList.push(state.threadData[i].user_id)
        }
        if (userList.includes(fromUserId)) {
          //いれば
          //newTalk,Thread[何番目か]をarrayの先頭に
          //newTalkData[0].push(newTalk);
          //newThreadData[o]['comment'] = message;
          let renewTalkData = Object.assign({}, state.talkData);
          let renewThreadData = Object.assign({}, state.threadData);
          const index = userList.indexOf(fromUserId)
          let tmpThreadArray = [];
          let tmpTalkArray = [];
          let subtmpTalkArray = [];
          for (let i in renewThreadData) {
            if (i == index) {
              continue;
            }
            tmpThreadArray.push(renewThreadData[i])
          }
          for (let i in renewTalkData) {
            if (i == index) {
              subtmpTalkArray.push(renewTalkData[i])
              subtmpTalkArray[0].push({user_id: fromUserId, content: message, id: messageId})
              continue;
            }
            tmpTalkArray.push(renewTalkData[i])
          }
          //特定のtalkとthreadをコピー、削除 + 先頭に追加
          //thredとtalkで配列の構造が少し違うので注意
          tmpThreadArray.unshift({id: roomId, user: fromUserName, user_id: fromUserId, comment: message})
          let mixedtmpTalkArray = subtmpTalkArray.concat(tmpTalkArray);
          let newSelected = (index > state.selected) ? (state.selected + 1) : state.selected
          return Object.assign({}, state, {
            talkData: mixedtmpTalkArray,
            threadData: tmpThreadArray,
            selected: newSelected
          });
        } else {
          //いなければ
          //先頭にThread, Talkを作成
          let tmpThreadArray = [];
          let tmpTalkArray = [];
          for (let i in newThreadData) {
            tmpThreadArray.push(newThreadData[i])
          }
          for (let i in newTalkData) {
            tmpTalkArray.push(newTalkData[i])
          }
          tmpThreadArray.unshift({id: roomId, user_id: fromUserId, user: fromUserName, comment: message})
          tmpTalkArray.unshift([{id: messageId, user_id: fromUserId, content: message}])
          return Object.assign({}, state, {
            threadData: tmpThreadArray,
            talkData: tmpTalkArray,
            selected: state.selected + 1
          })
        }
      }

    case 'HANDLE_DRAWER':
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
