import { useState } from "react";

export const useCart = () => {
    const [cartCounter, setCounter] = useState(0)

    const sumarAlCarro = () =>{
        setCounter(prev => prev +1)
    }
}