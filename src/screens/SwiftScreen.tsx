/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../themes/appThemes';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';

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
  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Switches" />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 25}}>isActive</Text>

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
        <Text style={{fontSize: 25}}>isHungry</Text>

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
        <Text style={{fontSize: 25}}>isHappy</Text>

        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={{fontSize: 25}}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

export default SwiftScreen;
