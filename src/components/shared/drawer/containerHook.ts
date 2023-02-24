import { useState } from "react";
import { useWindowDimensions, LayoutChangeEvent } from "react-native";
import { Gesture, } from "react-native-gesture-handler";
import { useSharedValue } from "react-native-reanimated";

export default function useDrawer(offset: number) {
    const [start, setStart] = useState(0);
    const {height} = useWindowDimensions();

    const current = useSharedValue(0);
    const position = useSharedValue(0);

    function onLayout({nativeEvent}: LayoutChangeEvent) {
        const pos = Math.max(0, nativeEvent.layout.height - (height * offset));

        position.value = pos;
        current.value = pos;

        setStart(pos);
    }

    const gesture = Gesture.Pan()
    .onStart(() => {
        current.value = position.value;
    })
    .onUpdate((event) => {
        position.value = Math.max(Math.min(event.translationY + current.value, start), 0);
    })

    return {start, position, gesture, onLayout}
}