"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getNavigationBarHeight = getNavigationBarHeight;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'react-native-android-navbar-height' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo managed workflow\n';
const AndroidNavbarHeight = _reactNative.NativeModules.AndroidNavbarHeight ? _reactNative.NativeModules.AndroidNavbarHeight : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function getNavigationBarHeight() {
  return AndroidNavbarHeight.getNavigationBarHeight();
}
//# sourceMappingURL=index.js.map