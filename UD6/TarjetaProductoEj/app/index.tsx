import { Text, View, StyleSheet, Image} from "react-native";
import { TarjetaProducto } from "./components/TarjetaProducto";
import { useCart } from "./hooks/addToCart";

const 

export default function Index() {
  return (
    <View>
      <View style = {styles.vista}>
        <View style = {{flexDirection: "row"}}>
          <TarjetaProducto name="Reloj Tocho" price={200} imageSrc="https://timemark.es/1373-large_default/reloj-de-pulsera-para-caballero-.jpg" onAddtoCart={() => }></TarjetaProducto>
          <TarjetaProducto name="Pelota Furbo" price={15} imageSrc="https://www.regalospublicitarios.com/recursos/Giving/img/GI8561/descriptivas/8561-prio-100.jpg" onAddtoCart={() => }></TarjetaProducto>
        </View>
        <Image style = {styles.carrito} source={{uri: "https://i.pinimg.com/564x/63/9c/6b/639c6bd8a7519138f441abae22b496ff.jpg"}}></Image>
        <Text>{}</Text>
      </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
  vista: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
    
  },

  carrito: {
    width: 50,
    height: 50,
  }
})