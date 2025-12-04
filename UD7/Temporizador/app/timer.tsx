import { use, useEffect, useState } from "react";
import { Pressable, View, Text } from "react-native";


export default function Timer() {
    //UseStates
const [secondsLeft, setSeconds] = useState(60);
const [isRunning, setRunning] = useState(true);

//UseEffect
useEffect(()=> {
    if(isRunning && secondsLeft > 0){
            const intervalo = setInterval(() => {
                setSeconds(secondsLeft -1)
            }, 1000);

            return () => clearInterval(intervalo)
    }
},[isRunning, secondsLeft] )
    
    return (<View>
        <Text>{secondsLeft}</Text>
        <Pressable onPress={() => setSeconds(60)}>Reset</Pressable>
        <Pressable onPress={() => setRunning(!isRunning)}>Start/Stop</Pressable>
    </View>)
}