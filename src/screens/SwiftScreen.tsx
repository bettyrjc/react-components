/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';

import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const SwiftScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  const {isHungry, isHappy, isActive} = state;
  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Switches" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 25, color: colors.text}}>isActive</Text>

        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <Text style={{fontSize: 25, color: colors.text}}>isHungry</Text>

        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 25, color: colors.text}}>isHappy</Text>

        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={{fontSize: 25, color: colors.text}}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

export default SwiftScreen;
