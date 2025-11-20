import { Pressable, StyleSheet, Text } from "react-native";

type BotonPersonalizado = {
    text: string,
    onClick: () => void;
}

export function BotonPersonalizado({text, onClick}: BotonPersonalizado){
    return (
        <Pressable onPress={onClick} style = {styles.boton}>
            <Text style={styles.textoBoton}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    boton: {
        backgroundColor: "#349ad9ff",
        borderRadius: 8,
        width: "90%",
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },

    textoBoton: {
        color: "white",
        fontFamily: "Verdana",
        padding: 5,
    }


})