import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';
const {Navigator} = createMaterialTopTabNavigator()
const MaterialTopTabs = withLayoutContext(Navigator)

export default function RootLayout() {
  return (
        <MaterialTopTabs>
            <MaterialTopTabs.Screen name='index' options={{title: 'Posts'}}/>
            <MaterialTopTabs.Screen name='gallery' options={{title: 'Galería'}}/>
        </MaterialTopTabs>
  );
}