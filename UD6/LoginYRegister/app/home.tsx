import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { BotonPersonalizado } from "./components/BotonPersonalizado";

export default function Home(){
    const router = useRouter()
    const atras = () =>{
        router.push("/")
    }
    
    return(
        <View>
            <Text>Estas loggeado</Text>
            <BotonPersonalizado text="Volver" onClick={atras}></BotonPersonalizado>
        </View>
    )
}