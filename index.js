import React from 'react';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import {Navigation} from 'react-native-navigation';

import {FirstScreen} from './FirstScreen';
import {SecondScreen} from './SecondScreen';

Navigation.setDefaultOptions({
  topBar: {
    visible: false,
  },
  animations: {
    push: {
      waitForRender: true,
    },
  },
});

Navigation.registerComponent(
  'First screen',
  () => props => {
    return (
      <KeyboardProvider>
        <FirstScreen {...props} />
      </KeyboardProvider>
    );
  },
  () => FirstScreen,
);

Navigation.registerComponent(
  'Second screen',
  () => props => {
    return (
      <KeyboardProvider>
        <SecondScreen {...props} />
      </KeyboardProvider>
    );
  },
  () => SecondScreen,
);

Navigation.events().registerAppLaunchedListener(() => {
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
