import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View>
      <Text>Hola bienvinido a tranquilandia</Text>
      <Icon name="star-outline" size={30} color="black" />
    </View>
  );
};

export default HomeScreen;