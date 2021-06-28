/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, RefreshControl, ScrollView, Text} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const PullToRefreshScreen = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const {top} = useSafeAreaInsets();
  const [refresh, setRefresh] = useState(false);
  const [data, setData] = useState('');
  const onRefresh = () => {
    setRefresh(true);
    setTimeout(() => {
      console.log('Terminamos');
      setRefresh(false);
      setData('Hola betty');
    }, 1500);
  };
  return (
    <ScrollView
      style={{
        marginTop: refresh ? top : 0,
      }}
      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor={colors.primary}
          colors={['white', 'red', 'yellow']}
          style={{backgroundColor: colors.primary}}
          tintColor={colors.text}
          title="Refreshing"
        />
      }>
      <View>
        <HeaderTitle title="Pull to Refresh" />
        <Text style={{color: colors.text}}>{data}</Text>
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
