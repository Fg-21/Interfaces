import { useRouter } from "expo-router";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { BotonPersonalizado } from "./components/BotonPersonalizado";

export function Regiter(){
    const router = useRouter()
    function irHome() {
        router.push("/")    
    }

    return(
        <View>
            <BotonPersonalizado text="Login" onClick={irHome}></BotonPersonalizado>
        </View>
    )
}