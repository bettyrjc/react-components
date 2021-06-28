/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, RefreshControl, ScrollView, Text} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PullToRefreshScreen = () => {
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
          progressBackgroundColor="#5856d6"
          colors={['white', 'red', 'yellow']}
          style={{backgroundColor: '#5856D6'}}
          tintColor="white"
          title="Refreshing"
        />
      }>
      <View>
        <HeaderTitle title="Pull to Refresh" />
        <Text>{data}</Text>
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
