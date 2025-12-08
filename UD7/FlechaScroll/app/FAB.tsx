import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

type FABProps = {
    showButton: boolean;
    onPress: () => void;
}



const FAB: React.FC<FABProps> = ({showButton, onPress}) =>{
    return(
        showButton && 
        (<TouchableOpacity style={styles.fab} onPress={onPress}>
             <Ionicons name="arrow-up" size={30} color="white" />
        </TouchableOpacity>)
    );
}


export default FAB

const styles = StyleSheet.create({
        fab: {
            position: "absolute",
            bottom: 30,
            right: 30,
            backgroundColor: "blue",
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
        }
    })