import {useState} from "react";

export default function useToggle() {
    const [isOn, setIsOn] = useState(false); 

    function toggle() {
        setIsOn((v) => !v);
    }

    return {isOn, toggle};
}