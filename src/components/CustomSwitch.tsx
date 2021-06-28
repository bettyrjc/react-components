import React, {useContext, useState} from 'react';
import {Platform, Switch, View} from 'react-native';
import {ThemeContext} from '../context/themeContext/ThemeContext';
interface Props {
  isOn: boolean;
  onChange?: (value: boolean) => void;
}
const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View>
      <Switch
        trackColor={{false: '#d9d9db', true: colors.primary}}
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        ios_backgroundColor={colors.card}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default CustomSwitch;
