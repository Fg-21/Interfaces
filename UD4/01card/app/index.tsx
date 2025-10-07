import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.div}>
      <Image source={require("../assets/images/ranog.webp")} style={styles.image}></Image>
      <Text style={styles.texto}>Fran</Text>
    </View>
  );
}

const styles = StyleSheet.create({     
div: {
  borderColor: "black",
  borderWidth: 3, 
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
  margin: 10
},
image : {
  borderRadius: 40,
  width: 80,
  height: 80,
  margin: 30,
  marginBottom: 10
},
texto: {
  fontWeight: "bold",
  marginBottom: 20
},
})
