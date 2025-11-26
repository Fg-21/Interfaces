import { Tabs } from "expo-router";
export default function RootLayout(){
    return ( 
        <Tabs screenOptions={{tabBarActiveTintColor: "#669ee9ff", tabBarInactiveTintColor: "#0c2346ff"}}>
            <Tabs.Screen name="index" options={{title: "Home"}}></Tabs.Screen>
            <Tabs.Screen name="profile" options={{title: "Perfil"}}></Tabs.Screen>
        </Tabs>
    );
}