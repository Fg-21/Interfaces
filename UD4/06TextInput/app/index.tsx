import { useState } from "react";
import { Text, TextInput, View } from "react-native";

export default function Index() {
  
const [texto, setTexto] = useState("")
  
  return (
      <View>
        <TextInput value = {texto} onChangeText={setTexto}/>
        <Text>Has escrito {texto}</Text>
      </View>
  );
}
