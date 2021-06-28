/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../context/themeContext/ThemeContext';
interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}
const {width: ScreenWidth} = Dimensions.get('window');

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

const SlidesScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          justifyContent: 'center',
          padding: 40,
          borderRadius: 5,
        }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 450,
            resizeMode: 'center',
          }}
        />
        <Text style={{...styles.title, color: colors.text}}>{item.title}</Text>
        <Text style={{...styles.subTitle, color: colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 50,
      }}>
      <Carousel
        data={items}
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={ScreenWidth}
        itemWidth={ScreenWidth}
        layout="default"
        onSnapToItem={index => setActiveIndex(index)}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        {activeIndex === 2 ? (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.background,
              width: 140,
              height: 50,
              borderRadius: 10,
              marginTop: 20,
              marginBottom: 20,
            }}
            onPress={() => navigation.navigate('HomeScreen')}
            activeOpacity={0.8}>
            <Text style={{...styles.btnText, color: colors.text}}>Entrar</Text>
            <Icon
              name="chevron-forward-outline"
              color={colors.text}
              size={30}
            />
          </TouchableOpacity>
        ) : (
          <Pagination
            dotsLength={items.length}
            activeDotIndex={activeIndex}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 10,
              backgroundColor: colors.primary,
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default SlidesScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856d9',
  },
  subTitle: {
    fontSize: 16,
  },
  btnText: {
    fontSize: 25,
    color: 'white',
  },
});
