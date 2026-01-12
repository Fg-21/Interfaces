import React, { useEffect, useState, useMemo } from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { container } from '../core/container';
import PDGameVM from './vms/PDGameVM';
import PersonaTrimmedYListaDepartamentosDtoYColor from '../app/models/PersonaTrimmed&ListaDepartamentosDto&Color';
import Departamento from '../domain/entities/Departamento';

const GameScreen = () => {
  const vm = useMemo(() => container.get<PDGameVM>(PDGameVM), []);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<PersonaTrimmedYListaDepartamentosDtoYColor[]>([]);

  // Estado visual
  const [mostrarResultados, setMostrarResultados] = useState(false);
  const [aciertos, setAciertos] = useState(0);
  const [verificado, setVerificado] = useState(false);

  useEffect(() => {
    const cargarDatos = async () => {
      await vm.loadList();
      setData([...vm.dataCompleted]);
      setLoading(false);
      if (vm.error) Alert.alert("Error", vm.error);
    };
    cargarDatos();
  }, [vm]);


  //comprobacion de cada uno de los id de los departamentos seleccionados con el idDepartamento de la clase
  const comprobarResultados = () => {
    let contadorAciertos = 0;

    data.forEach(persona => {
      if (persona.checkSelectedDepartamento()) {
        contadorAciertos++;
      }
    });

    // actualizar VM
    vm.aciertos = contadorAciertos;
    vm.checkRegisters();

    // actualizar estado de la vista
    setAciertos(contadorAciertos);
    setVerificado(true);
    setMostrarResultados(true);
  };


  if (loading) return <ActivityIndicator size="large" style={styles.center} />;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Adivina el Departamento</Text>

      {/* Contador de aciertos */}
      {mostrarResultados && (
        <View style={[
          styles.contadorContainer,
          vm.allRegistersGuessed ? styles.contadorGanador : styles.contadorNormal
        ]}>
          <Text style={styles.contadorTexto}>
            {vm.allRegistersGuessed ? '🎉 ' : ''}
            Aciertos: {aciertos} / {vm.registros}
            {vm.allRegistersGuessed ? ' 🎉' : ''}
          </Text>
          {vm.allRegistersGuessed && (
            <Text style={styles.mensajeGanador}>¡FELICIDADES! Has ganado</Text>
          )}
        </View>
      )}

      <FlatList
        data={data}
        keyExtractor={(item) => item.idPersona.toString()}
        renderItem={({ item }) => {
          return (
            <View style={[
              styles.card,
              { borderLeftColor: item.color, borderLeftWidth: 10 },

            ]}>
              <View style={styles.rowContainer}>
                <View style={styles.nameContainer}>
                  <Text style={styles.name}>

                    {item.nombrePersona} {item.apellidosPersona}
                  </Text>
                </View>

                <View style={[
                  styles.pickerContainer,

                ]}>
                  <Picker
                    selectedValue={item.departamentoSelected || undefined}
                    onValueChange={(itemValue) => {
                      const updateData = data.map(p => {
                        if (p.idPersona === item.idPersona) {
                          p.setDepartamentoSelected(itemValue);
                        };
                        return p;
                      });


                      setData([...updateData]);
                      setVerificado(false);
                      setMostrarResultados(false);

                    }}
                    style={[
                      styles.picker,

                    ]}

                  >
                    <Picker.Item
                      label="Selecciona..."
                      value={undefined}
                      color="#999"
                    />
                    {item.listaDepartamentos.map((depto) => (
                      <Picker.Item
                        key={depto.id}
                        label={depto.nombre}
                        value={depto.id}
                      />
                    ))}
                  </Picker>
                </View>
              </View>

            </View>
          );
        }}
      />

      <TouchableOpacity
        style={[
          styles.mainButton,
          (verificado && vm.allRegistersGuessed) ? styles.mainButtonSuccess : undefined
        ]}
        onPress={comprobarResultados}
      >
        <Text style={styles.mainButtonText}>
          {verificado ? 'VOLVER A COMPROBAR' : 'COMPROBAR RESULTADOS'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f4f4f4'
  },
  center: {
    flex: 1,
    justifyContent: 'center'
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
    color: '#333'
  },
  contadorContainer: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  contadorNormal: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#007bff'
  },
  contadorGanador: {
    backgroundColor: '#d4edda',
    borderWidth: 2,
    borderColor: '#28a745'
  },
  contadorTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333'
  },
  mensajeGanador: {
    fontSize: 16,
    color: '#28a745',
    fontWeight: 'bold',
    marginTop: 5
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 8,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4
  },
  cardAcierto: {
    borderWidth: 2,
    borderColor: '#28a745',
    backgroundColor: '#f8fff9'
  },
  cardFallo: {
    borderWidth: 2,
    borderColor: '#dc3545',
    backgroundColor: '#fff5f5'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  nameContainer: {
    flex: 1,
    marginRight: 10
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333'
  },
  pickerContainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    backgroundColor: '#fafafa',
    overflow: 'hidden',
    minHeight: 50
  },
  picker: {
    height: 50,
    width: '100%'
  },
  feedbackContainer: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
  feedbackAcierto: {
    color: '#28a745',
    fontWeight: 'bold',
    fontSize: 14
  },
  feedbackFallo: {
    color: '#dc3545',
    fontWeight: 'bold',
    fontSize: 14
  },
  mainButton: {
    backgroundColor: '#28a745',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2
  },
  mainButtonSuccess: {
    backgroundColor: '#ffc107'
  },
  mainButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default GameScreen; 7