import { Text, View, StyleSheet } from "react-native";
import { TarjetaProducto } from "./components/TarjetaProducto";

export default function Index() {


  
  return (
    <View style = {styles.vista}>
      <TarjetaProducto name="Reloj Tocho" price={2} imageSrc="https://timemark.es/1373-large_default/reloj-de-pulsera-para-caballero-.jpg" onAddtoCart={() => alert("Hola")}></TarjetaProducto>
    </View>
  );
}


const styles = StyleSheet.create({
  vista: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  }
})