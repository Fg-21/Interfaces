import { Tabs } from "expo-router";
export default function RootLayout(){
    return    <Tabs screenOptions={{tabBarActiveTintColor: "#1de6ba", tabBarInactiveTintColor: "#0c5943ff"}}>
            <Tabs.Screen name="index" options={{title: "Home"}}></Tabs.Screen>
            <Tabs.Screen name="profile" options={{title: "Perfil"}}></Tabs.Screen>
            <Tabs.Screen name="search" options={{title: "Búsqueda"}}></Tabs.Screen>
        </Tabs>
    
}   