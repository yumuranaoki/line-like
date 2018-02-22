export const clickThread = index => {
  return {
    type: 'CLICK_THREAD',
    selected: index
  };
}

export const handleToggle = () => {
  return {
    type: 'HANDLE_TOGGLE'
  };
}

export const clickList = index => {
  return {
    type: 'CLICK_LIST',
    selectedUser: index
  };
}

export const fetchTalksSuccess = talk => ({
  type: "FETCH_TALK_SUCCESS",
  talkData: talk
})

export const fetchThreadSuccess = thread => ({
  type: "FETCH_THREAD_SUCCESS",
  threadData: thread
})

export const fetchFollowingSuccess = following => ({
  type: "FETCH_FOLLOWING_SUCCESS",
  followingData: following
})


export const getTalkError = status => ({
  type: 'GET_TALK_ERROR',
  hasError: status
})

export const loadingTalk = status => ({
  type: 'LOADING_TALK',
  isLoading: status
})

export const getThreadError = status => ({
  type: 'GET_THREAD_ERROR',
  hasError: status
})

export const loadingThread = status => ({
  type: 'LOADING_THREAD',
  isLoading: status
})

export const getFollowingError = status => ({
  type: 'GET_FOLLOWING_ERROR',
  hasError: status
})

export const loadingFollowing = status => ({
  type: 'LOADING_FOLLOWING',
  isLoading: status
})

export const fetchTalk = url => {
  return dispatch => {


    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadingTalk(false));
        return response;
      })
      .then((response) => response.json())
      .then((talk) => dispatch(fetchTalksSuccess(talk)))
      .catch(() => dispatch(getTalkError(true)));
  }
}

export const fetchThread = url => {
  return dispatch => {

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadingThread(false));
        return response;
      })
      .then((response) => response.json())
      .then((talk) => dispatch(fetchThreadSuccess(talk)))
      .catch(() => dispatch(getThreadError(true)));
  }
}

export const fetchFollower = url => {
  return dispatch => {
    dispatch(loadingFollowing(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadingFollowing(false));
        return response;
      })
      .then((response) => response.json())
      .then((following) => dispatch(fetchFollowingSuccess(following)))
      .catch(() => dispatch(getFollowingError(true)));
  }
}
