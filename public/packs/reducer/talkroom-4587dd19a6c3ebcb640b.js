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
/******/ 	return __webpack_require__(__webpack_require__.s = 464);
/******/ })
/************************************************************************/
/******/ ({

/***/ 464:
/*!***************************************************!*\
  !*** ./app/javascript/packs/reducer/talkroom.jsx ***!
  \***************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'CLICK_THREAD':
      return Object.assign({}, state, { selected: action.selected });

    case 'HANDLE_LIST':
      var userList = [];
      for (var i in state.threadData) {
        userList.push(state.threadData[i].user_id);
      }
      //threadDataに選択したともだちが存在するかで場合分け
      if (userList.includes(action.selectedUser['id'])) {
        var index = userList.indexOf(action.selectedUser['id']);
        return Object.assign({}, state, { selected: index, drawerOpen: !state.drawerOpen });
      } else {
        var newThreadData = Object.assign({}, state.threadData);
        var newTalkData = Object.assign({}, state.talkData);
        var newThread = { user_id: action.selectedUser['id'], user: action.selectedUser['name'], comment: "" };
        var newTalk = [{ user_id: '', content: '' }];
        var tmp = [];
        for (var _i in newThreadData) {
          tmp.push(newThreadData[_i]);
        }
        tmp.unshift(newThread);
        var tmpTalk = [];
        for (var _i2 in newTalkData) {
          tmpTalk.push(newTalkData[_i2]);
        }
        tmpTalk.unshift(newTalk);
        return Object.assign({}, state, {
          selected: 0,
          threadData: tmp,
          talkData: tmpTalk,
          drawerOpen: !state.drawerOpen
        });
      }
      return Object.assign({}, state, { selectedUser: action.selectedUser });

    case "FETCH_TALK_SUCCESS":
      return Object.assign({}, state, { talkData: action.talkData });

    case "FETCH_THREAD_SUCCESS":
      console.log(state.threadData[state.selected]);
      var newSelected = 0;
      if (state.threadData[state.selected] !== undefined) {
        var selectedId = state.threadData[state.selected]['id'];
        console.log(selectedId);
        for (var _i3 in action.threadData) {
          if (action.threadData[_i3]['id'] == selectedId) {
            newSelected = _i3;
            break;
          }
        }
      }
      return Object.assign({}, state, {
        threadData: action.threadData,
        selected: newSelected
      });

    case "FETCH_FOLLOWING_SUCCESS":
      return Object.assign({}, state, { followingData: action.followingData });

    case 'HANDLE_DRAWER':
      return Object.assign({}, state, { drawerOpen: !state.drawerOpen });

    case 'GET_TALK_ERROR':
      return Object.assign({}, state, { talkError: action.hasError });
    case 'GET_THREAD_ERROR':
      return Object.assign({}, state, { threadError: action.hasError });
    case 'GET_FOLLOWING_ERROR':
      return Object.assign({}, state, { followingError: action.hasError });
    case 'LOADING_TALK':
      return Object.assign({}, state, { loadingTalk: action.isLoading });
    case 'LOADING_THREAD':
      return Object.assign({}, state, { loadingThread: action.isLoading });
    case 'LOADING_FOLLOWING':
      return Object.assign({}, state, { loadingFollowing: action.isLoading });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

/******/ });
//# sourceMappingURL=talkroom-4587dd19a6c3ebcb640b.js.map