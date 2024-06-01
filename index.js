/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from './src/Root';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';
import './global.css';

const originalWarn = console.warn;

console.warn = (message, ...args) => {
  if (
    message.includes('Sending `appearanceChanged` with no listeners registered')
  ) {
    return;
  }
  originalWarn(message, ...args);
};

AppRegistry.registerComponent(appName, () => Root);
