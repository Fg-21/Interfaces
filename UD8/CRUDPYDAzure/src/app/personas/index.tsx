import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
        {/* Barra de búsqueda */}
        <View style={styles.searchContainer}>
          <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar por nombre o apellidos..."
            value={viewModel.searchQuery}
            onChangeText={(text) => viewModel.setSearchQuery(text)}
            placeholderTextColor="#999"
          />
          {viewModel.searchQuery.length > 0 && (
            <TouchableOpacity
              onPress={() => viewModel.clearSearch()}
              style={styles.clearButton}
            >
              <Icon name="close" size={20} color="#666" />
            </TouchableOpacity>
          )}
        </View>

        {/* Contador de resultados */}
        {viewModel.searchQuery.length > 0 && (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsText}>
              {viewModel.personasFiltradas.length} {viewModel.personasFiltradas.length === 1 ? 'resultado' : 'resultados'}
            </Text>
          </View>
        )}

        {viewModel.error && (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{viewModel.error}</Text>
          </View>
        )}

        <FlatList
          data={viewModel.personasFiltradas}
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
              <Text style={styles.emptyIcon}>
                {viewModel.searchQuery.length > 0 ? '🔍' : '👥'}
              </Text>
              <Text style={styles.emptyText}>
                {viewModel.searchQuery.length > 0
                  ? 'No se encontraron resultados'
                  : 'No hay personas registradas'}
              </Text>
              <Text style={styles.emptySubtext}>
                {viewModel.searchQuery.length > 0
                  ? 'Intenta con otros términos de búsqueda'
                  : 'Toca el botón + para agregar una'}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 16,
    marginBottom: 8,
    paddingHorizontal: 12,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: '#333',
  },
  clearButton: {
    padding: 4,
  },
  resultsContainer: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  resultsText: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
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
    textAlign: 'center',
  },
});