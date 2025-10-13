import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type botonazoProps = {
    texto: string;
}

const Botonazo: React.FC<botonazoProps> = ({texto}) => {
    return (
        <Pressable style = {styles.pressable}>
            <Text style = {styles.text}>{texto}</Text>
        </Pressable>
    )
}


//#region styles
    const styles = StyleSheet.create({
        pressable: {
            backgroundColor: "purple",
            padding: 12,
            borderRadius: 10,
            width: 100,
            margin: 10
        },

        text: {
            color: "white",
        }
    })
//#endregion

export default Botonazo