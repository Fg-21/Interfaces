import { Link, useRouter } from "expo-router";
import React from "react";
import { View } from "react-native";
import { BotonPersonalizado } from "./components/BotonPersonalizado";

export default function Index() {
  const router = useRouter()

  const irHome = () => {
    router.push('/home')
  }
  
  return (
    <View>
      <View>
      <BotonPersonalizado text="Login" onClick={irHome}></BotonPersonalizado>
      <Link href="/register">Registrarse</Link>
      </View>
    </View>
  );
}