import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DepartamentosListScreen from './index';

export type DepartamentosStackParamList = {
  DepartamentosList: undefined;
};

const Stack = createNativeStackNavigator<DepartamentosStackParamList>();

export default function DepartamentosStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // El header lo maneja el Drawer
      }}
    >
      <Stack.Screen
        name="DepartamentosList"
        component={DepartamentosListScreen}
      />
    </Stack.Navigator>
  );
}