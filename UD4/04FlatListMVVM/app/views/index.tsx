import {FlatList, Pressable } from "react-native-gesture-handler";
import { IndexVM } from "../viewmodels/IndexVM";

export default function Index() {
  const vm = new IndexVM();

  return (
        <FlatList
    data={vm.listaPersona}
    renderItem={({ item }) =>(
      <Pressable onPress={() => vm.personaSeleccionada = item}>{item.Nombre} {item.Apellido}</Pressable>
    )}
    keyExtractor={(item) => item.Id.toString()}
    />
  );
}