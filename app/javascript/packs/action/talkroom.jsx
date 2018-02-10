export const handleThread = index => {
  return {
    type: 'CLICK_THREAD',
    selected: index
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

export const fetchTalk = url => {
  return dispatch => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((talk) => dispatch(fetchTalksSuccess(talk)))
  }
}

export const fetchThread = url => {
  return dispatch => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((talk) => dispatch(fetchThreadSuccess(talk)))
  }
}
