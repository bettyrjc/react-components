/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {useState} from 'react';
import {View, Text, Button, Modal} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../themes/appThemes';

const ModalScreen = () => {
  const [state, setState] = useState(false);
  const openModal = () => {};
  const {
    theme,
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <View style={styles.globalMargin}>
      <Text>Hola modalcito</Text>
      <HeaderTitle title="ModalScreen" />

      <Button title="abrir modal" onPress={() => setState(true)} />

      <Modal animationType="fade" visible={state}>
        <View
          style={{
            backgroundColor: colors.background,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View
            style={{
              backgroundColor: theme.background,
              justifyContent: 'center',
              alignItems: 'center',
              height: 200,
              width: 300,
              borderRadius: 5,
              padding: 10,
            }}>
            <Text
              style={{
                fontSize: 26,
                marginBottom: 16,
                textAlign: 'center',
                fontWeight: 'bold',
                color: colors.text,
              }}>
              Titulo del modal
            </Text>
            <Text style={{fontSize: 16, marginBottom: 16, color: colors.text,}}>
              Cuerpo del modal
            </Text>
            <Button title="cerrar modal" onPress={() => setState(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
