import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import container from '../../core/Container';
import DepartamentoCard from '../../ui/components/DepartamentoCard';
import DepartamentoModal from '../../ui/components/DepartamentoModal';
import FloatingButton from '../../ui/components/FloatingButton';
import DepartamentosVM from '../../ui/vms/DepartamentosVM';

const DepartamentosListScreen = observer(() => {
  const viewModel = container.get<DepartamentosVM>('DepartamentosVM');

  useEffect(() => {
    viewModel.loadDepartamentos();
  }, []);

  if (viewModel.isLoading && viewModel.departamentos.length === 0) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
        <Text style={styles.loadingText}>Cargando departamentos...</Text>
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
          data={viewModel.departamentos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <DepartamentoCard
              departamento={item}
              onEdit={() => viewModel.openEditModal(item)}
            />
          )}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyIcon}>📂</Text>
              <Text style={styles.emptyText}>
                No hay departamentos registrados
              </Text>
              <Text style={styles.emptySubtext}>
                Toca el botón + para agregar uno
              </Text>
            </View>
          }
          refreshing={viewModel.isLoading}
          onRefresh={() => viewModel.loadDepartamentos()}
        />

        <FloatingButton
          icon="add"
          onPress={() => viewModel.openCreateModal()}
          backgroundColor="#6200ee"
        />

        <DepartamentoModal
          visible={viewModel.isModalVisible}
          nombre={viewModel.editNombre}
          isEdit={viewModel.selectedDepartamento !== null}
          onChangeNombre={(text) => viewModel.setEditNombre(text)}
          onSave={() => viewModel.saveDepartamento()}
          onCancel={() => viewModel.closeModal()}
          isLoading={viewModel.isLoading}
        />
      </View>
    </SafeAreaView>
  );
});

export default DepartamentosListScreen;

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