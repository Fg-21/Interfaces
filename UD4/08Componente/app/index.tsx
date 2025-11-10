import { useState } from "react";
import { Alert, Modal, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {

  const [visibilidad, setVisibilidad] = useState(false);
  return (
    <View>
      <Modal 
        animationType="slide" 
        transparent={true}
        visible={visibilidad}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setVisibilidad(!visibilidad);
        }}>

        {/*Tarjeta de esconder el modal*/}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Esto es un modal :D</Text>
            <Pressable style={[styles.button, styles.buttonClose]}
              onPress={() => setVisibilidad(!visibilidad)}>
              <Text style={styles.textStyle}>Ocultar Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/*Tarjeta de mostrar el modal*/}
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setVisibilidad(true)}>
          <Text style={styles.textStyle}>Mostrar Modal</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#342b7eff',
  },
  buttonClose: {
    backgroundColor: '#f38721ff',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});