import { Text, View, FlatList } from "react-native";
import { IndexVM } from "./viewmodels/IndexVM";
export default function Index() {
  return (
    <FlatList
    data={IndexVM.Personas}
    renderItem={({ item }) =>(
      <Text>{item.Id}: {item.Nombre} {item.Apellido}</Text>
    )}
    keyExtractor={(item) => item.Id.toString()}
    />
  );
}
