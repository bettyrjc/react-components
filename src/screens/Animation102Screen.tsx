import React, {useContext, useRef} from 'react';
import {View, Animated, PanResponder, StyleSheet, Button} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import useAnimation from '../hooks/useAnimation';

const Animation101Screen = () => {
  const {startMoving, position, opacity, fadeOut, fadeIn} = useAnimation();
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      {useNativeDriver: false},
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        {toValue: {x: 0, y: 0}, useNativeDriver: false}, // Back to zero
      ).start();
    },
  });
  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), {...styles.purpleBox}]}
      />
    </View>
  );
};

export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: 'gray',
    width: 100,
    height: 100,
  },
});
