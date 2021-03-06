import React from 'react';
import prompt from 'react-native-prompt-android';
import {View, Button, Alert} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    const showAlertPrompt = () => {
      prompt(
        'Enter password',
        'Enter your password to claim your $1.5B in lottery winnings',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: password =>
              console.log('OK Pressed, password: ' + password),
          },
        ],
        {
          type: 'secure-text',
          cancelable: false,
          defaultValue: 'test',
          placeholder: 'placeholder',
        },
      );
    };

    return (
      <View>
        <HeaderTitle title="Alerts" />
        <Button title="mostrar alerta" onPress={() => showAlert()} />
        <Button title="mostrar alerta" onPress={() => showAlertPrompt()} />
      </View>
    );
  };
};
export default AlertScreen;
