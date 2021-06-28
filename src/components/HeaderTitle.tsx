import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../themes/appThemes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ThemeContext} from '../context/themeContext/ThemeContext';

interface Props {
  title: string;
}
const HeaderTitle = ({title}: Props) => {
  const {top} = useSafeAreaInsets();
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View>
      <Text
        style={{
          ...styles.title,
          marginTop: top + 20,
          marginBottom: 20,
          color: colors.text,
        }}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderTitle;
