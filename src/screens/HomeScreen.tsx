/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {useContext} from 'react';
import {View, Text, FlatList} from 'react-native';

import {styles} from '../themes/appThemes';
import FlatListMenuItem from '../components/FlatListMenuItem';
import {menuData} from '../data/data';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const HomeScreen = () => {
  const {theme} = useContext(ThemeContext);
  const itemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.5,
          marginVertical: 5,
          borderBottomColor: theme.dividerColor,
        }}></View>
    );
  };
  return (
    <View style={styles.globalMargin}>
      <FlatList
        data={menuData}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de menu" />}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

export default HomeScreen;
