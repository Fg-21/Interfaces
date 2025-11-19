import React from "react";
import { Pressable, Text, Image, View, StyleSheet} from "react-native";
import { BotonPersonalizado } from "./BotonPersonalizado";

type TarjetaProducto = {
    name: string,
    price: number,
    imageSrc: string,
    onAddtoCart: () => void
}

export function TarjetaProducto({name, price, imageSrc, onAddtoCart}: TarjetaProducto){
    return(
        <View style={styles.card}>
            <Image source={{uri: imageSrc}} style = {styles.imagen}></Image>
            <Text style={styles.texto}>{name}</Text>
            <Text style={styles.texto}>€{price} EUR</Text>
            <BotonPersonalizado text="Add to Cart" onClick={onAddtoCart}></BotonPersonalizado>
        </View>
    );
}

const styles = StyleSheet.create({
    card:  {
        backgroundColor: "#FFFF",
        justifyContent: "center",
        alignItems: "center",
        
        
        width: 150,
        height: 300,
        margin: 20,
        padding: 20,

        borderRadius: 8,
        borderColor: "black",
        borderWidth: 2,

        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    imagen: {
        width: "100%",
        height: undefined,
        resizeMode: "contain",
        borderRadius: 8,
        margin: 10,
        aspectRatio: 1
    },

    texto: {
        fontFamily: "Verdana",
        margin: 5
    }


})