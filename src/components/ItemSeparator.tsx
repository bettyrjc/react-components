/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';

const ItemSeparator = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        opacity: 0.5,
        marginVertical: 5,
        borderBottomColor: 'gray',
      }}
    />
  );
};

export default ItemSeparator;
