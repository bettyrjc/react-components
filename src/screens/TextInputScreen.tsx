/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';

import {styles} from '../themes/appThemes';
import {useForm} from '../hooks/useForm';

import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import {ThemeContext} from '../context/themeContext/ThemeContext';

const TextInputScreen = () => {
  const {values, handleChange} = useForm({
    name: '',
    email: ' ',
    phone: '',
    isSubscribe: false,
  });
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <HeaderTitle title="text inputs" />
            <TextInput
              style={{...stylesScreen.input, borderColor: colors.border}}
              placeholder="Name"
              autoCorrect={false}
              autoCapitalize="words"
              onChangeText={value => handleChange(value, 'name')}
            />
            <HeaderTitle title={JSON.stringify(values, null, 3)} />
            <HeaderTitle title={JSON.stringify(values, null, 3)} />

            <TextInput
              style={{...stylesScreen.input, borderColor: colors.border}}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={value => handleChange(value, 'email')}
              keyboardType="email-address"
            />
            <TextInput
              style={{...stylesScreen.input, borderColor: colors.border}}
              placeholder="Phone"
              autoCorrect={false}
              onChangeText={value => handleChange(value, 'phone')}
              keyboardType="phone-pad"
              // value={text}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 25, color: colors.text}}>
                Subscribirse
              </Text>

              <CustomSwitch
                isOn={values.isSubscribe}
                onChange={value => handleChange(value, 'isSubscribe')}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  input: {
    marginVertical: 20,
    borderWidth: 1,
    height: 50,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 10,
    padding: 13,
  },
});
export default TextInputScreen;
