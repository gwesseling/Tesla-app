import {useState} from "react";

export default function useClimate() {
    const [temperature, setTemperature] = useState(20.0);

    function increaseTemperature() {
        setTemperature((temp) => temp + 0.5);
    }

    function decreaseTemperature() {
        setTemperature((temp) => temp - 0.5);
    }

    return {
        temperature,
        increaseTemperature,
        decreaseTemperature,
    };
}
