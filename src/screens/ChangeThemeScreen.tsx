/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../themes/appThemes';
import {color} from 'react-native-reanimated';

const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Themes" />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 10,
          }}
          onPress={setLightTheme}
          activeOpacity={0.8}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 20,
            }}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: colors.primary,
            justifyContent: 'center',
            width: 150,
            height: 50,
            borderRadius: 10,
          }}
          onPress={setDarkTheme}
          activeOpacity={0.8}>
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 20,
            }}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChangeThemeScreen;
