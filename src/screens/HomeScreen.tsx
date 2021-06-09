/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MenuItem} from '../interfaces/appInterfaces';
import {styles} from '../themes/appThemes';
import FlatListMenuItem from '../components/FlatListMenuItem';

const menuData: MenuItem[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Animation101',
    icon: 'cube-outline',
    components: 'Animation101Screen',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abddb28ba',
    title: 'Animation102',
    icon: 'albums-outline',
    components: 'Animation102Screen',
  },
];

const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  // const renderMenuItem = (menu: MenuItem) => {
  //   return (

  //   );
  // };

  const renderListHeader = () => {
    return (
      <View>
        <Text style={{...styles.title, marginTop: top + 20, marginBottom: 20}}>
          Opciones de menu
        </Text>
      </View>
    );
  };
  const itemSeparator = () => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          opacity: 0.5,
          marginVertical: 5,
          borderBottomColor: 'gray',
        }}></View>
    );
  };
  return (
    <View style={styles.globalMargin}>
      <FlatList
        data={menuData}
        renderItem={({item}) => <FlatListMenuItem menuItem={item} />}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => renderListHeader()}
        ItemSeparatorComponent={itemSeparator}
      />
    </View>
  );
};

export default HomeScreen;
