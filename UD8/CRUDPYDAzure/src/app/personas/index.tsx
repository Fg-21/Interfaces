import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import {
    ActivityIndicator,
    Alert,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import container from '../../core/Container';
import FloatingButton from '../../ui/components/FloatingButton';
import PersonaCard from '../../ui/components/PersonaCard';
import PersonasVM from '../../ui/vms/PersonasVM';
import { PersonasStackParamList } from './_layout';

type PersonasListNavigationProp = NativeStackNavigationProp<
  PersonasStackParamList,
  'PersonasList'
>;

const PersonasListScreen = observer(() => {
  const viewModel = container.get<PersonasVM>('PersonasVM');
  const navigation = useNavigation<PersonasListNavigationProp>();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      viewModel.loadPersonas();
    });

    return unsubscribe;
  }, [navigation]);

  const handleEdit = (personaId: number) => {
    navigation.navigate('PersonasForm', { personaId });
  };

  const handleCreate = () => {
    navigation.navigate('PersonasForm', {});
  };

  const handleDelete = (id: number, nombre: string, apellidos: string) => {
    Alert.alert(
      'Confirmar eliminación',
      `¿Estás seguro de que deseas eliminar a ${nombre} ${apellidos}?`,
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Eliminar',
          style: 'destructive',
          onPress: () => viewModel.deletePersona(id),
        },
      ]
    );
  };

  if (viewModel.isLoading && viewModel.personas.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#03dac6" />
        <Text style={styles.loadingText}>Cargando personas...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {viewModel.error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{viewModel.error}</Text>
          </View>
        )}

        <FlatList
          data={viewModel.personas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PersonaCard
              persona={item}
              onEdit={() => handleEdit(item.id)}
            />
          )}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>👥</Text>
              <Text style={styles.emptyText}>
                No hay personas registradas
              </Text>
              <Text style={styles.emptySubtext}>
                Toca el botón + para agregar una
              </Text>
            </View>
          }
          refreshing={viewModel.isLoading}
          onRefresh={() => viewModel.loadPersonas()}
        />

        <FloatingButton
          icon="add"
          onPress={handleCreate}
          backgroundColor="#03dac6"
        />
      </View>
    </SafeAreaView>
  );
});

export default PersonasListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
    color: '#666',
  },
  listContent: {
    padding: 16,
    paddingBottom: 80,
  },
  errorContainer: {
    backgroundColor: '#ffebee',
    padding: 12,
    margin: 16,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#c62828',
  },
  errorText: {
    color: '#c62828',
    fontSize: 14,
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
    fontWeight: '600',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
  },
});