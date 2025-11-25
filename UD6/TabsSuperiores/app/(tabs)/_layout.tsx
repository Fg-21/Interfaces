import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
        <Tabs.Screen name="index" options={{title: "Inicio"}}/>
        <Tabs.Screen name="config" options={{title: "Configuracion"}}/>
        <Tabs.Screen name="Profile" options={{title: "Perfil", headerShown: false}}/>
    </Tabs>
  );
}