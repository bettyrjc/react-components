import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Animation102Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.purpleBox}></View>
    </View>
  );
};

export default Animation102Screen;

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