/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {useReanimatedKeyboardAnimation} from 'react-native-keyboard-controller';
import {NavigationFunctionComponent} from 'react-native-navigation';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

let sharedProgress: SharedValue<number>;

export const Overlay: NavigationFunctionComponent & {
  getSharedProgress: () => SharedValue<number>;
} = () => {
  const {progress} = useReanimatedKeyboardAnimation();
  sharedProgress = progress; // holy shit!

  const style = useAnimatedStyle(() => ({
    transform: [{scale: withTiming(progress.value, {duration: 160})}],
  }));

  return (
    <View
      style={{
        height: 50,
        padding: 15,
        justifyContent: 'center',
        backgroundColor: '#0003',
      }}>
      <Animated.View
        style={[
          {
            width: 20,
            aspectRatio: 1,
            borderRadius: 100,
            backgroundColor: 'yellow',
          },
          style,
        ]}
      />
    </View>
  );
};

Overlay.options = {
  overlay: {
    handleKeyboardEvents: true,
    interceptTouchOutside: false,
  },
};

Overlay.getSharedProgress = () => sharedProgress;
