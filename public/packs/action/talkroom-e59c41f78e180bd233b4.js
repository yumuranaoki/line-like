/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 340);
/******/ })
/************************************************************************/
/******/ ({

/***/ 340:
/*!**************************************************!*\
  !*** ./app/javascript/packs/action/talkroom.jsx ***!
  \**************************************************/
/*! exports provided: handleThread, handleDrawer, handleList, fetchTalksSuccess, fetchThreadSuccess, fetchFollowingSuccess, fetchTalkByData, getTalkError, loadingTalk, getThreadError, loadingThread, getFollowingError, loadingFollowing, fetchTalk, fetchThread, fetchFollower */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleThread", function() { return handleThread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDrawer", function() { return handleDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleList", function() { return handleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTalksSuccess", function() { return fetchTalksSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThreadSuccess", function() { return fetchThreadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFollowingSuccess", function() { return fetchFollowingSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTalkByData", function() { return fetchTalkByData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTalkError", function() { return getTalkError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingTalk", function() { return loadingTalk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThreadError", function() { return getThreadError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingThread", function() { return loadingThread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFollowingError", function() { return getFollowingError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingFollowing", function() { return loadingFollowing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTalk", function() { return fetchTalk; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThread", function() { return fetchThread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchFollower", function() { return fetchFollower; });
var handleThread = function handleThread(index) {
  return {
    type: 'CLICK_THREAD',
    selected: index
  };
};

var handleDrawer = function handleDrawer() {
  return {
    type: 'HANDLE_DRAWER'
  };
};

var handleList = function handleList(index) {
  return {
    type: 'HANDLE_LIST',
    selectedUser: index
  };
};

var fetchTalksSuccess = function fetchTalksSuccess(talk) {
  return {
    type: "FETCH_TALK_SUCCESS",
    talkData: talk
  };
};

var fetchThreadSuccess = function fetchThreadSuccess(thread) {
  return {
    type: "FETCH_THREAD_SUCCESS",
    threadData: thread
  };
};

var fetchFollowingSuccess = function fetchFollowingSuccess(following) {
  return {
    type: "FETCH_FOLLOWING_SUCCESS",
    followingData: following
  };
};

var fetchTalkByData = function fetchTalkByData(data) {
  return {
    type: "FETCH_TALK_BY_DATA",
    talkDataByData: data
  };
};

var getTalkError = function getTalkError(status) {
  return {
    type: 'GET_TALK_ERROR',
    hasError: status
  };
};

var loadingTalk = function loadingTalk(status) {
  return {
    type: 'LOADING_TALK',
    isLoading: status
  };
};

var getThreadError = function getThreadError(status) {
  return {
    type: 'GET_THREAD_ERROR',
    hasError: status
  };
};

var loadingThread = function loadingThread(status) {
  return {
    type: 'LOADING_THREAD',
    isLoading: status
  };
};

var getFollowingError = function getFollowingError(status) {
  return {
    type: 'GET_FOLLOWING_ERROR',
    hasError: status
  };
};

var loadingFollowing = function loadingFollowing(status) {
  return {
    type: 'LOADING_FOLLOWING',
    isLoading: status
  };
};

var fetchTalk = function fetchTalk(url) {
  return function (dispatch) {
    dispatch(loadingTalk(true));

    fetch(url).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(loadingTalk(false));
      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (talk) {
      return dispatch(fetchTalksSuccess(talk));
    }).catch(function () {
      return dispatch(getTalkError(true));
    });
  };
};

var fetchThread = function fetchThread(url) {
  return function (dispatch) {
    dispatch(loadingThread(true));
    fetch(url).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(loadingThread(false));
      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (talk) {
      return dispatch(fetchThreadSuccess(talk));
    }).catch(function () {
      return dispatch(getThreadError(true));
    });
  };
};

var fetchFollower = function fetchFollower(url) {
  return function (dispatch) {
    dispatch(loadingFollowing(true));
    fetch(url).then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      dispatch(loadingFollowing(false));
      return response;
    }).then(function (response) {
      return response.json();
    }).then(function (following) {
      return dispatch(fetchFollowingSuccess(following));
    }).catch(function () {
      return dispatch(getFollowingError(true));
    });
  };
};

/***/ })

/******/ });
//# sourceMappingURL=talkroom-e59c41f78e180bd233b4.js.map