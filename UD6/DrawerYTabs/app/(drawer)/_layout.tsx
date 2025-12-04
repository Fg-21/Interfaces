import { MaterialIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
        <Drawer.Screen 
            name="(home)" 
            options={{
                drawerLabel: "Home", 
                title: "Home",
                drawerIcon: ({color, size}) =>(
                    <MaterialIcons name="home" size={size} color={color}/>
                )}}/>

        <Drawer.Screen 
            name="settings" 
            options={{
                drawerLabel: "Settings", 
                title: "Settings",
                drawerIcon: ({color, size}) =>(
                    <MaterialIcons name="settings" size={size} color={color}/>
                )}}/>
    </Drawer>
  );
}