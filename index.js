/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Root from './src/Root';
import {name as appName} from './app.json';

import 'react-native-gesture-handler';
import './global.css';

AppRegistry.registerComponent(appName, () => Root);
