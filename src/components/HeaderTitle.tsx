import React from 'react';
import {View, Text} from 'react-native';
import {styles} from '../themes/appThemes';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  title: string;
}
const HeaderTitle = ({title}: Props) => {
  const {top} = useSafeAreaInsets();

  return (
    <View>
      <Text style={{...styles.title, marginTop: top + 20, marginBottom: 20}}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderTitle;
