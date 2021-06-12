import React from 'react';
import {View, Animated, StyleSheet, Button} from 'react-native';
import useAnimation from '../hooks/useAnimation';

const Animation101Screen = () => {
  const {startMoving, position, opacity, fadeOut, fadeIn} = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [
            {
              translateX: position,
            },
          ],
        }}
      />
      <Button
        title="FadeIn"
        onPress={() => {
          fadeIn();
          startMoving(-200);
        }}
      />
      <Button title="FadeOut" onPress={fadeOut} />
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
    backgroundColor: '#5856D6',
    width: 100,
    height: 100,
  },
});
