/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, TextInput, TouchableOpacity, View} from 'react-native';
import {Navigation, NavigationFunctionComponent} from 'react-native-navigation';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import {Overlay} from './Overlay';

export const SecondScreen: NavigationFunctionComponent = ({componentId}) => {
  const progress = Overlay.getSharedProgress();

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
        paddingHorizontal: 20,
        paddingVertical: 80,
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
            marginBottom: 20,
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
