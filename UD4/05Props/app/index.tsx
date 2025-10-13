import { Text, View } from "react-native";
import Botonazo from "./views/components/Botonazo"
export default function Index() {
  return (
    <View>
      <Botonazo texto="Guardar" ></Botonazo>
      <Botonazo texto="Eliminar" ></Botonazo>
      <Botonazo texto="Ver" ></Botonazo>
      <Botonazo texto="Actualizar" ></Botonazo>
    </View>
  );
}
