import React from 'react';
import {useState} from 'react';
import {View, Text, Button, Modal} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {styles} from '../themes/appThemes';

const ModalScreen = () => {
  const [state, setState] = useState(false);
  const openModal = () => {};
  return (
    <View style={styles.globalMargin}>
      <Text>Hola modalcito</Text>
      <HeaderTitle title="ModalScreen" />

      <Button title="abrir modal" onPress={() => setState(true)} />

      <Modal animationType="fade" visible={state}>
        <View
          style={{
            backgroundColor: 'rgba(0,0,0,0.5)',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
              height: 200,
              width: 300,
              borderRadius: 5,
              padding: 10
            }}>
            <Text style={{fontSize: 26, marginBottom: 16, textAlign:'center', fontWeight: 'bold'}}>
              Titulo del modal
            </Text>
            <Text style={{fontSize: 16, marginBottom: 16}}>
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
