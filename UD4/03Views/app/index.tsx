import { matchForEmptyPath } from "expo-router/build/fork/getStateFromPath-forks";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View>
      <View style = {styles.header}>
        <Text>Header</Text>
      </View>
      <View style = {styles.flexor}>
        <View style = {styles.left}></View>
        <View style = {styles.body}></View>
        <View style = {styles.right}></View>
      </View>


    </View>
  );

}

//#region 
const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97c8ffff",
    width: "100%",
    height: "10%"
  },

  flexor :{
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "80%",
    backgroundColor: "#ff4545ff",
  },

  left: {
    
    
  },

  body: {

  },

  right: {
    
  }

  
})
//#endregion