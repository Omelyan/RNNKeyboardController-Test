/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, TextInput, TouchableOpacity, View} from 'react-native';
import {useReanimatedKeyboardAnimation} from 'react-native-keyboard-controller';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

export const SecondScreen: NavigationFunctionComponent = ({componentId}) => {
  const {progress} = useReanimatedKeyboardAnimation();

  const style = useAnimatedStyle(() => ({
    height: withTiming(40 * progress.value),
  }));

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{
        backgroundColor: 'tomato',
      }}
      contentContainerStyle={{
        flexGrow: 1,
        padding: 20,
        paddingTop: 80,
      }}>
      <View
        style={{
          alignSelf: 'center',
          width: 70,
          aspectRatio: 0.6,
          borderWidth: 5,
          borderRadius: 10,
          marginBottom: 20,
          borderColor: 'white',
        }}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              left: -1,
              right: -1,
              bottom: -1,
              backgroundColor: 'white',
            },
            style,
          ]}
        />
      </View>

      <View style={{padding: 10, borderWidth: 10}}>
        <TextInput
          style={{
            height: 40,
            marginBottom: 10,
            backgroundColor: 'white',
          }}
        />
        <TouchableOpacity
          style={{
            height: 50,
            backgroundColor: 'green',
          }}
          onPress={() => {
            Navigation.pop(componentId);
          }}
        />
      </View>
    </ScrollView>
  );
};
