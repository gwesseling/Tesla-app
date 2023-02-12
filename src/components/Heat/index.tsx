import {StyleSheet, Pressable} from "react-native";
import { animated, useSpring } from "@react-spring/native";
import HeatIcon from "../icons/Heat";
import useToggle from "../../hooks/toggle";

const styles = StyleSheet.create({
    container: {
        height: 45,
        width: 45, 
        alignItems: 'center', 
        padding: 10, 
        borderRadius: 100, 
        borderWidth: 2
    },
});


export default function Heat() {
   const {isOn, toggle} = useToggle();
    const color = isOn ? "#e82127" : "#8A8B8B";

   const opacity = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 200,
    });

    const borderColor = useSpring({
        borderColor: color,
    });

    return (
        <Pressable hitSlop={10} onPress={toggle}>
            <animated.View style={[styles.container, opacity, borderColor]}>
                <HeatIcon height={20} width={20} fill={color} />
            </animated.View>
        </Pressable>
    );
}