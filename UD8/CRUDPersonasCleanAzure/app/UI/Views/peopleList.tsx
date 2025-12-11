import { container } from "@/app/CORE/container";
import { Text, View, StyleSheet, FlatList, Pressable, SafeAreaView } from "react-native";
import { PersonasVM } from "../ViewModels/PersonasVM";
import { TYPES } from "@/app/CORE/types";
import { Persona } from "@/app/DOMAIN/Entities/Persona";
import { useRef } from "react";
 import { observer } from "mobx-react-lite";





const  PeopleList = observer( () => {


    // Crear una referencia que almacenará el VM
    const vmRef = useRef<PersonasVM | null>(null);


    // Instanciar el VM solo si no existe
    if (vmRef.current === null) {
       
        vmRef.current = container.get<PersonasVM>(TYPES.PersonasVM);
    }


    //Acceder a la instancia persistente
    const viewModel = vmRef.current;
 




const renderItem = ({ item }: { item: Persona }) => (
   <Pressable
    onPress={()=>{viewModel.PersonaSelected = item;}}>
      <Text style={styles.itemText}>{item.nombre} {item.apellidos}</Text>
    </Pressable>
  );


 


    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.titulo}>Listado de Personas</Text>
        <Text style={styles.titulo}>Persona seleccionada: {viewModel.PersonaSelected.nombre} {viewModel.PersonaSelected.apellidos}</Text>
       
        <FlatList
          data={viewModel.ListaPersonas}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={() => (
            <Text style={styles.textoVacio}>No hay personas registradas</Text>
    )}
        />
       
      </SafeAreaView>
    );
  });




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  item: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemPresionado: {
    backgroundColor: "#D0E8FF",
  },
  itemText: {
    fontSize: 16,
  },
  separator: {
    height: 10,
  },
  input: {
    width:"80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textoVacio: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#888",
  },
});


export default PeopleList;
