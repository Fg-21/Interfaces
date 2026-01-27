import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DepartamentosStack from './departamentos/_layout';
import HomeScreen from './index';
import PersonasStack from './personas/_layout';

export type RootDrawerParamList = {
  Home: undefined;
  DepartamentosStack: undefined;
  PersonasStack: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function RootLayout() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fff',
          width: 280,
        },
        headerStyle: {
          backgroundColor: '#6200ee',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        drawerActiveTintColor: '#6200ee',
        drawerInactiveTintColor: '#666',
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Inicio',
          drawerIcon: ({ color, size }) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="DepartamentosStack"
        component={DepartamentosStack}
        options={{
          title: 'Departamentos',
          headerTitle: 'Gestión de Departamentos',
          drawerIcon: ({ color, size }) => (
            <Icon name="business" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="PersonasStack"
        component={PersonasStack}
        options={{
          title: 'Personas',
          headerTitle: 'Gestión de Personas',
          drawerIcon: ({ color, size }) => (
            <Icon name="people" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}