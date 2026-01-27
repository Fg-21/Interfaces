import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RootDrawerParamList } from './_layout';

type HomeScreenNavigationProp = DrawerNavigationProp<RootDrawerParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Icon name="folder-open" size={80} color="#6200ee" style={styles.icon} />
        <Text style={styles.title}>Gestión de Datos</Text>
        <Text style={styles.subtitle}>
          Selecciona una opción para comenzar
        </Text>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={[styles.button, styles.departamentosButton]}
            onPress={() => navigation.navigate('DepartamentosStack')}
            activeOpacity={0.8}
          >
            <Icon name="business" size={48} color="#fff" />
            <Text style={styles.buttonText}>Departamentos</Text>
            <Text style={styles.buttonSubtext}>
              Gestionar departamentos de la empresa
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.personasButton]}
            onPress={() => navigation.navigate('PersonasStack')}
            activeOpacity={0.8}
          >
            <Icon name="people" size={48} color="#fff" />
            <Text style={styles.buttonText}>Personas</Text>
            <Text style={styles.buttonSubtext}>
              Gestionar empleados y personal
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 50,
    textAlign: 'center',
  },
  buttonsContainer: {
    width: '100%',
    gap: 20,
    marginBottom: 30,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  departamentosButton: {
    backgroundColor: '#6200ee',
  },
  personasButton: {
    backgroundColor: '#03dac6',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
  },
  buttonSubtext: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});