import React from 'react';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import {Navigation} from 'react-native-navigation';

import {FirstScreen} from './FirstScreen';
import {SecondScreen} from './SecondScreen';
import {Overlay} from './Overlay';

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

Navigation.registerComponent('First screen', () => FirstScreen);
Navigation.registerComponent('Second screen', () => SecondScreen);

Navigation.registerComponent(
  'Overlay',
  () => props => {
    return (
      <KeyboardProvider statusBarTranslucent navigationBarTranslucent>
        <Overlay {...props} />
      </KeyboardProvider>
    );
  },
  () => Overlay,
);

Navigation.events().registerAppLaunchedListener(async () => {
  await Navigation.showOverlay({component: {name: 'Overlay'}});
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
