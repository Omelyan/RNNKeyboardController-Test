import React from 'react';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import {Navigation} from 'react-native-navigation';

import {FirstScreen} from './FirstScreen';
import {SecondScreen} from './SecondScreen';

Navigation.setDefaultOptions({
  statusBar: {
    drawBehind: true,
    translucent: true,
    style: 'light',
    backgroundColor: '#0004',
  },

  topBar: {
    visible: false,
  },

  navigationBar: {
    backgroundColor: 'transparent',
  },

  animations: {
    push: {
      waitForRender: true,
    },
  },
});

Navigation.registerComponent(
  'First screen',
  () => props =>
    (
      <KeyboardProvider statusBarTranslucent navigationBarTranslucent>
        <FirstScreen {...props} />
      </KeyboardProvider>
    ),
  () => FirstScreen,
);

Navigation.registerComponent(
  'Second screen',
  () => props =>
    (
      <KeyboardProvider statusBarTranslucent navigationBarTranslucent>
        <SecondScreen {...props} />
      </KeyboardProvider>
    ),
  () => SecondScreen,
);

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {component: {name: 'First screen'}},
          //
        ],
      },
    },
  });
});
