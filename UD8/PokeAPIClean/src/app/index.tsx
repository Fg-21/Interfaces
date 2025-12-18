import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { container } from "../Core/Container";
import { TYPES } from "../Core/Types";
import { PokemonsViewModel } from "../Presentation/PokemonsViewModel";

const Index: React.FC = observer(() => {
  const [viewModel] = useState(() => 
    container.get<PokemonsViewModel>(TYPES.PokemonsViewModel)
  );

  const handleLoadPokemons = () => {
    viewModel.loadPokemons();
  };

  const renderPokemonCard = ({ item, index }: { item: any; index: number }) => (
    <View style={styles.card}>
      <Text style={styles.pokemonName}>{item.nombre}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Pokémon</Text>
      
      <TouchableOpacity
        style={[
          styles.button,
          viewModel.isLoading && styles.buttonDisabled
        ]}
        onPress={handleLoadPokemons}
        disabled={viewModel.isLoading}
      >
        <Text style={styles.buttonText}>
          {viewModel.isLoading ? "Cargando..." : "Cargar Pokémon"}
        </Text>
      </TouchableOpacity>

      {viewModel.isLoading && (
        <ActivityIndicator size="large" color="#007bff" style={styles.loader} />
      )}

      {viewModel.error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error: {viewModel.error}</Text>
        </View>
      )}

      {viewModel.pokemons.length === 0 && !viewModel.isLoading ? (
        <Text style={styles.emptyText}>
          No hay pokémon cargados. Pulsa el botón para cargar.
        </Text>
      ) : (
        <FlatList
          data={viewModel.pokemons}
          renderItem={renderPokemonCard}
          keyExtractor={(item, index) => `pokemon-${index}`}
          numColumns={2}
          contentContainerStyle={styles.listContainer}
          columnWrapperStyle={styles.row}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonDisabled: {
    backgroundColor: "#ccc",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  loader: {
    marginVertical: 20,
  },
  errorContainer: {
    backgroundColor: "#fee",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  errorText: {
    color: "#c00",
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
  card: {
    flex: 1,
    backgroundColor: "#f8f9fa",
    borderWidth: 2,
    borderColor: "#007bff",
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 80,
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  emptyText: {
    textAlign: "center",
    color: "#666",
    fontSize: 16,
    marginTop: 20,
  },
});

export default Index;
