import { useRef, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import FAB from "./FAB";


//Datos de la lista
const data = [
    { id: "1",  name: "Antonio" },
    { id: "2",  name: "María" },
    { id: "3",  name: "Carlos" },
    { id: "4",  name: "Lucía" },
    { id: "5",  name: "Javier" },
    { id: "6",  name: "Sofía" },
    { id: "7",  name: "Miguel" },
    { id: "8",  name: "Laura" },
    { id: "9",  name: "Andrés" },
    { id: "10", name: "Paula" },
    { id: "11", name: "Diego" },
    { id: "12", name: "Elena" },
    { id: "13", name: "Héctor" },
    { id: "14", name: "Sandra" },
    { id: "15", name: "Raúl" },
    { id: "16", name: "Irene" },
    { id: "17", name: "Pablo" },
    { id: "18", name: "Claudia" },
    { id: "19", name: "Rubén" },
    { id: "20", name: "Natalia" },
    { id: "21", name: "Fernando" },
    { id: "22", name: "Patricia" },
    { id: "23", name: "Tomás" },
    { id: "24", name: "Verónica" },
    { id: "25", name: "Joaquín" },
    { id: "26", name: "Alicia" },
    { id: "27", name: "Mario" },
    { id: "28", name: "Beatriz" },
    { id: "29", name: "Sergio" },
    { id: "30", name: "Cristina" },
    { id: "31", name: "Gabriel" },
    { id: "32", name: "Rosa" },
    { id: "33", name: "Adrián" },
    { id: "34", name: "Teresa" },
    { id: "35", name: "Víctor" },
    { id: "36", name: "Julia" },
    { id: "37", name: "Óscar" },
    { id: "38", name: "Marta" },
    { id: "39", name: "Alejandro" },
    { id: "40", name: "Lorena" },
    { id: "41", name: "Esteban" },
    { id: "42", name: "Nuria" },
    { id: "43", name: "Guillermo" },
    { id: "44", name: "Bárbara" },
    { id: "45", name: "Eduardo" },
    { id: "46", name: "Silvia" },
    { id: "47", name: "Hugo" },
    { id: "48", name: "Ángela" },
    { id: "49", name: "Manuel" },
    { id: "50", name: "Celia" },
    { id: "51", name: "Rodrigo" },
    { id: "52", name: "Ariadna" },
    { id: "53", name: "Samuel" },
    { id: "54", name: "Isa" },
    { id: "55", name: "Félix" },
    { id: "56", name: "Carolina" },
    { id: "57", name: "Marc" },
    { id: "58", name: "Daniela" },
    { id: "59", name: "Ignacio" },
    { id: "60", name: "Rebeca" },
    { id: "61", name: "Bruno" },
    { id: "62", name: "Amalia" },
    { id: "63", name: "Luis" },
    { id: "64", name: "Pilar" },
    { id: "65", name: "Ricardo" },
    { id: "66", name: "Noelia" },
    { id: "67", name: "Álvaro" },
    { id: "68", name: "Gemma" },
    { id: "69", name: "Francisco" },
    { id: "70", name: "Inés" },
    { id: "71", name: "Raquel" },
    { id: "72", name: "Jon" },
    { id: "73", name: "Olga" },
    { id: "74", name: "Eric" },
    { id: "75", name: "Melanie" },
    { id: "76", name: "Kevin" },
    { id: "77", name: "Celeste" },
    { id: "78", name: "Nicolás" },
    { id: "79", name: "Eva" },
    { id: "80", name: "Santiago" }
];

export default function(){

    const scrollRef = useRef<FlatList<typeof data[0]> | null>(null);
    const [showButton, setShowButton] = useState(false)
    
    

    return (
        <View style={{flex: 1}}>
            <FlatList
            data={data}
            renderItem={({item}) => (<View style={styles.container}><Text style={styles.texto}>{item.name}</Text></View>)}
            keyExtractor={(item) => item.id}
            ref= {scrollRef}
            onScroll={(e) => {
                if (e.nativeEvent.contentOffset.y > 1500){
                    setShowButton(true)
                }
            }}
            scrollEventThrottle={16}>
            </FlatList>
            <FAB showButton = {showButton} onPress={() =>{
                scrollRef.current?.scrollToOffset({offset: 0, animated: true})
            }}></FAB>
        </View>
            
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 25,
        marginVertical: 10,
        marginHorizontal: 16,
        backgroundColor: "#0c76a7",
        borderRadius: 15,

        // Sombras para iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,

        // Elevación para Android
        elevation: 5,
    },

    texto: {
        fontSize: 18,
        fontWeight: "600",
        color: "white",
        letterSpacing: 0.5,
    }
})