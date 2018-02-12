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
        var _newThreadData = Object.assign({}, state.threadData);
        var _newTalkData = Object.assign({}, state.talkData);
        var newThread = { user_id: action.selectedUser['id'], user: action.selectedUser['name'], comment: "" };
        var _newTalk = [{ user_id: '', content: '' }];
        var tmp = [];
        for (var _i in _newThreadData) {
          tmp.push(_newThreadData[_i]);
        }
        tmp.unshift(newThread);
        var tmpTalk = [];
        for (var _i2 in _newTalkData) {
          tmpTalk.push(_newTalkData[_i2]);
        }
        tmpTalk.unshift(_newTalk);
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
      return Object.assign({}, state, { threadData: action.threadData });

    case "FETCH_FOLLOWING_SUCCESS":
      return Object.assign({}, state, { followingData: action.followingData });

    //action cableで値を受けっったときの処理
    //talkを追加
    //listのcommentを編集
    case "FETCH_TALK_BY_DATA":
      //duplicate state.talkData and state.threadData
      var newTalkData = Object.assign({}, state.talkData);
      var newThreadData = Object.assign({}, state.threadData);
      var message = action.talkDataByData["message"];
      var messageId = action.talkDataByData["message_id"];
      var roomId = action.talkDataByData["room_id"];
      var fromUserId = action.talkDataByData["from_user_id"];
      var fromUserName = action.talkDataByData["from_user_name"];
      var toUserId = action.talkDataByData["to_user_id"];
      var toUserName = action.talkDataByData["to_user_name"];
      var newTalk = { user_id: fromUserId, content: message, id: messageId };
      //現在選択されているトークにつっこんでしまっている
      //action.talkDataからfrom_userを取得
      var currentUserId = document.getElementById("object_id").getAttribute("reactdata");
      if (fromUserId == currentUserId) {
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
        var tmpThreadArray = [];
        var subtmpTalkArray = [];
        var tmpTalkArray = [];
        for (var _i3 in newThreadData) {
          if (_i3 == state.selected) {
            continue;
          }
          tmpThreadArray.push(newThreadData[_i3]);
        }
        for (var _i4 in newTalkData) {
          if (_i4 == state.selected) {
            subtmpTalkArray.push(newTalkData[_i4]);
            subtmpTalkArray[0].push({ user_id: fromUserId, content: message, id: messageId });
            continue;
          }
          tmpTalkArray.push(newTalkData[_i4]);
        }
        tmpThreadArray.unshift({ id: roomId, user: toUserName, user_id: toUserId, comment: message });
        var mixedtmpTalkArray = subtmpTalkArray.concat(tmpTalkArray);
        return Object.assign({}, state, {
          talkData: mixedtmpTalkArray,
          threadData: tmpThreadArray,
          selected: 0
        });
      } else {
        //from_userが他人なら
        //threadDataのuser_listの中にいるか確認
        var _userList = [];
        for (var _i5 in state.threadData) {
          _userList.push(state.threadData[_i5].user_id);
        }
        if (_userList.includes(fromUserId)) {
          //いれば
          //newTalk,Thread[何番目か]をarrayの先頭に
          //newTalkData[0].push(newTalk);
          //newThreadData[o]['comment'] = message;
          var renewTalkData = Object.assign({}, state.talkData);
          var renewThreadData = Object.assign({}, state.threadData);
          var _index = _userList.indexOf(fromUserId);
          var _tmpThreadArray = [];
          var _tmpTalkArray = [];
          var _subtmpTalkArray = [];
          for (var _i6 in renewThreadData) {
            if (_i6 == _index) {
              continue;
            }
            _tmpThreadArray.push(renewThreadData[_i6]);
          }
          for (var _i7 in renewTalkData) {
            if (_i7 == _index) {
              _subtmpTalkArray.push(renewTalkData[_i7]);
              _subtmpTalkArray[0].push({ user_id: fromUserId, content: message, id: messageId });
              continue;
            }
            _tmpTalkArray.push(renewTalkData[_i7]);
          }
          //特定のtalkとthreadをコピー、削除 + 先頭に追加
          //thredとtalkで配列の構造が少し違うので注意
          _tmpThreadArray.unshift({ id: roomId, user: fromUserName, user_id: fromUserId, comment: message });
          var _mixedtmpTalkArray = _subtmpTalkArray.concat(_tmpTalkArray);
          var newSelected = _index > state.selected ? state.selected + 1 : state.selected;
          return Object.assign({}, state, {
            talkData: _mixedtmpTalkArray,
            threadData: _tmpThreadArray,
            selected: newSelected
          });
        } else {
          //いなければ
          //先頭にThread, Talkを作成
          var _tmpThreadArray2 = [];
          var _tmpTalkArray2 = [];
          for (var _i8 in newThreadData) {
            _tmpThreadArray2.push(newThreadData[_i8]);
          }
          for (var _i9 in newTalkData) {
            _tmpTalkArray2.push(newTalkData[_i9]);
          }
          _tmpThreadArray2.unshift({ id: roomId, user_id: fromUserId, user: fromUserName, comment: message });
          _tmpTalkArray2.unshift([{ id: messageId, user_id: fromUserId, content: message }]);
          return Object.assign({}, state, {
            threadData: _tmpThreadArray2,
            talkData: _tmpTalkArray2,
            selected: state.selected + 1
          });
        }
      }

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
//# sourceMappingURL=talkroom-3fa44292af8f517b5349.js.map