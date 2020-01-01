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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/styles.scss */ \"./assets/scss/styles.scss\");\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _videoPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videoPlayer */ \"./assets/js/videoPlayer.js\");\n/* harmony import */ var _videoPlayer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_videoPlayer__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/videoPlayer.js":
/*!**********************************!*\
  !*** ./assets/js/videoPlayer.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const videoContainer = document.getElementById(\"jsVideoPlayer\");\nconst videoPlayer = document.querySelector(\"#jsVideoPlayer video\");\nconst playBtn = document.getElementById(\"jsPlayBtn\");\nconst volumeBtn = document.getElementById(\"jsVolumeBtn\");\nconst fullScrnBtn = document.getElementById(\"jsFullScreen\");\nconst currentTime = document.getElementById(\"currentTime\");\nconst totalTime = document.getElementById(\"totalTime\");\nconst volumeRange = document.getElementById(\"jsVolume\");\n\nfunction setTotalTime() {\n  const totalTimeString = formatDate(videoPlayer.duration);\n  totalTime.innerHTML = totalTimeString;\n  setInterval(getCurrentTime, 1000);\n}\n\nfunction getCurrentTime() {\n  const currentTimeString = formatDate(Math.floor(videoPlayer.currentTime));\n  currentTime.innerHTML = currentTimeString;\n}\n\nfunction handleEnded() {\n  videoPlayer.currentTime = 0;\n  playBtn.innerHTML = '<i class=\"fas fa-play\"></i>';\n}\n\nfunction handleDrag(event) {\n  const {\n    target: {\n      value\n    }\n  } = event;\n  videoPlayer.volume = value;\n\n  if (value >= 0.6) {\n    volumeBtn.innerHTML = '<i class=\"fas fa-volume-up\"></i>';\n  } else if (value >= 0.2) {\n    volumeBtn.innerHTML = '<i class=\"fas fa-volume-down\"></i>';\n  } else {\n    volumeBtn.innerHTML = '<i class=\"fas fa-volume-off\"></i>';\n  }\n}\n\nfunction init() {\n  videoPlayer.volume = 0.5;\n  videoPlayer.addEventListener(\"click\", handlePlayClick);\n  videoPlayer.addEventListener(\"loadedmetadata\", setTotalTime);\n  videoPlayer.addEventListener(\"ended\", handleEnded);\n  playBtn.addEventListener(\"click\", handlePlayClick);\n  volumeBtn.addEventListener(\"click\", handleVolumeClick);\n  volumeRange.addEventListener(\"input\", handleDrag);\n  fullScrnBtn.addEventListener(\"click\", goFullScreen);\n}\n\nconst formatDate = seconds => {\n  const secondsNumber = parseInt(seconds, 10);\n  let hours = Math.floor(secondsNumber / 3600);\n  let minutes = Math.floor((secondsNumber - hours * 3600) / 60);\n  let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;\n\n  if (hours < 10) {\n    hours = `0${hours}`;\n  }\n\n  if (minutes < 10) {\n    minutes = `0${minutes}`;\n  }\n\n  if (seconds < 10) {\n    totalSeconds = `0${totalSeconds}`;\n  }\n\n  return `${hours}:${minutes}:${totalSeconds}`;\n};\n\nfunction prefixExitFullScreen() {\n  if (document.exitFullscreen) {\n    document.exitFullscreen();\n  } else if (document.mozCancelFullScreen) {\n    document.mozCancelFullScreen();\n  } else if (document.webkitExitFullscreen) {\n    document.webkitExitFullscreen();\n  } else if (document.msExitFullscreen) {\n    document.msExitFullscreen();\n  }\n}\n\nfunction prefixGoFullScreen() {\n  if (videoContainer.requestFullscreen) {\n    videoContainer.requestFullscreen();\n  } else if (videoContainer.mozRequestFullScreen) {\n    videoContainer.mozRequestFullScreen();\n  } else if (videoContainer.webkitRequestFullscreen) {\n    videoContainer.webkitRequestFullscreen();\n  } else if (videoContainer.msRequestFullscreen) {\n    videoContainer.msRequestFullscreen();\n  }\n}\n\nfunction exitFullScreen() {\n  prefixExitFullScreen();\n  fullScrnBtn.innerHTML = '<i class=\"fas fa-expand\"></i>';\n  fullScrnBtn.removeEventListener(\"click\", exitFullScreen);\n  fullScrnBtn.addEventListener(\"click\", goFullScreen);\n}\n\nfunction goFullScreen() {\n  prefixGoFullScreen();\n  fullScrnBtn.innerHTML = '<i class=\"fas fa-compress\"></i>';\n  fullScrnBtn.removeEventListener(\"click\", goFullScreen);\n  fullScrnBtn.addEventListener(\"click\", exitFullScreen);\n}\n\nfunction handleVolumeClick() {\n  if (videoPlayer.muted) {\n    videoPlayer.muted = false;\n    volumeRange.value = videoPlayer.volume;\n\n    if (volumeRange.value >= 0.6) {\n      volumeBtn.innerHTML = '<i class=\"fas fa-volume-up\"></i>';\n    } else if (volumeRange.value >= 0.2) {\n      volumeBtn.innerHTML = '<i class=\"fas fa-volume-down\"></i>';\n    } else {\n      volumeBtn.innerHTML = '<i class=\"fas fa-volume-off\"></i>';\n    }\n  }\n}\n\nfunction handlePlayClick() {\n  if (videoPlayer.paused) {\n    videoPlayer.play();\n    playBtn.innerHTML = '<i class=\"fas fa-pause\"></i>';\n  } else {\n    videoPlayer.pause();\n    playBtn.innerHTML = '<i class=\"fas fa-play\"></i>';\n  }\n}\n\nif (videoContainer) {\n  init();\n}\n\n//# sourceURL=webpack:///./assets/js/videoPlayer.js?");

/***/ }),

/***/ "./assets/scss/styles.scss":
/*!*********************************!*\
  !*** ./assets/scss/styles.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./assets/scss/styles.scss?");

/***/ })

/******/ });