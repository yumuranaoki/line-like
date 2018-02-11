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
/******/ 	return __webpack_require__(__webpack_require__.s = 472);
/******/ })
/************************************************************************/
/******/ ({

/***/ 472:
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
      console.log(state.threadData[state.selected].comment);
      console.log(state.selected);
      return Object.assign({}, state, { selected: action.selected });
    case "FETCH_TALK_SUCCESS":
      console.log('talk');
      return Object.assign({}, state, { talkData: action.talkData });
    case "FETCH_THREAD_SUCCESS":
      console.log('thread');
      return Object.assign({}, state, { threadData: action.threadData });
    case "FETCH_TALK_BY_DATA":
      //duplicate state.talkData and state.threadData
      var newTalkData = Object.assign({}, state.talkData);
      var newThreadData = Object.assign({}, state.threadData);
      var message = action.talkDataByData["message"];
      var roomId = action.talkDataByData["room_id"];
      var userId = action.talkDataByData["from_user_id"];
      var newTalk = { id: 0, user_id: userId, content: message };
      newTalkData[state.selected].push(newTalk);
      newThreadData[state.selected]['comment'] = message;
      return Object.assign({}, state, { talkData: newTalkData, threadData: newThreadData });
    case 'HANDLE_DRAWER':
      return Object.assign({}, state, { drawerOpen: !state.drawerOpen });
    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

/******/ });
//# sourceMappingURL=talkroom-c47837afe18c152ba791.js.map