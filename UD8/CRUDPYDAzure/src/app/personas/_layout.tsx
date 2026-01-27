import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import PersonasFormScreen from './form';
import PersonasListScreen from './index';

export type PersonasStackParamList = {
  PersonasList: undefined;
  PersonasForm: { personaId?: number };
};

const Stack = createNativeStackNavigator<PersonasStackParamList>();

export default function PersonasStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // El header lo maneja el Drawer o custom header
      }}
    >
      <Stack.Screen
        name="PersonasList"
        component={PersonasListScreen}
      />
      <Stack.Screen
        name="PersonasForm"
        component={PersonasFormScreen}
      />
    </Stack.Navigator>
  );
}