import { useContext } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { AuthContext } from "./AuthContext"


export default function AuthStatus(){

    const user = useContext(AuthContext)
    return(
         <View style={styles.container}>
            <Text style={styles.statusText}>
        Estado: {user?.isLoggedIn ? "Conectado" : "Desconectado"}
    </Text>

    {user?.isLoggedIn && (
        <Text style={styles.userText}>Usuario: {user.userName}</Text>
    )}

    <Pressable
        style={[styles.button, user?.isLoggedIn ? styles.btnLogout : styles.btnLogin]}
        onPress={() => {
            user?.isLoggedIn ? user.logoutUser() : user?.loginUser("Manolo");
        }}
    >
        <Text style={styles.buttonText}>
            {user?.isLoggedIn ? "Cerrar Sesión" : "Iniciar Sesión"}
        </Text>
    </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 12,
        backgroundColor: "#F3F4F6",
        borderRadius: 12,
        margin: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 4 },
        elevation: 5,
    },

    statusText: {
        fontSize: 20,
        fontWeight: "600",
        color: "#111827",
        marginBottom: 4,
    },

    userText: {
        fontSize: 18,
        fontWeight: "500",
        color: "#374151",
        marginBottom: 16,
    },

    button: {
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.15,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 3 },
        elevation: 4,
    },

    btnLogin: {
        backgroundColor: "#10B981", // verde bonito
    },

    btnLogout: {
        backgroundColor: "#EF4444", // rojo moderno
    },

    buttonText: {
        color: "white",
        fontSize: 17,
        fontWeight: "700",
        letterSpacing: 0.5,
    },
});

