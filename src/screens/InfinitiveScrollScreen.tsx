/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const InfinitiveScrollScreen = () => {
  const [state, setState] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const loadMore = () => {
    const newArray: number[] = [];

    for (let i = 0; i < 5; i++) {
      newArray[i] = state.length + i;
    }
    setTimeout(() => {
      setState([...state, ...newArray]);
    }, 3500);
  };
  const renderItem = (item: number) => {
    return (
      <Image
        source={{uri: `https://picsum.photos/id/${item}/500/400`}}
        style={{width: '100%', height: 400}}
      />
    );
  };
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={state}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => renderItem(item)}
        ListHeaderComponent={<HeaderTitle title="infinitive Scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size={55} color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
};

export default InfinitiveScrollScreen;
