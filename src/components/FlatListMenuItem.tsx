import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {MenuItem} from '../interfaces/appInterfaces';

interface Props {
  menuItem: MenuItem;
}
const FlatListMenuItem = ({menuItem}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.components)}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Icon name={menuItem.icon} size={23} color="#5856d6" />
          <Text style={styles.itemText}>{menuItem.title}</Text>
        </View>
        <Icon name="chevron-forward-outline" size={23} color="#5856d6" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 5,
    fontSize: 19,
  },
});
export default FlatListMenuItem;
