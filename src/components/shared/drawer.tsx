import { ReactNode, useState } from "react";
import { StyleSheet, View, useWindowDimensions, LayoutChangeEvent } from "react-native";
import { GestureDetector, Gesture, } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, interpolate } from "react-native-reanimated";

type Props = {
    offset: number,
    children: ReactNode;
}

const styles = StyleSheet.create({
    overlay: {
        height: '100%',
        width: '100%',
        position: 'absolute', 
        backgroundColor: 'rgba(22, 23, 24, .9)'
    }
});

export default function Drawer({offset = 0.5, children}: Props) {
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

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { 
                    translateY: position.value,
                },
            ],
        };
    });

    const overlayStyles = useAnimatedStyle(() => {
        return {
            opacity: interpolate(position.value, [0, start], [1, 0]),
        };
    });

    const gesture = Gesture.Pan()
    .onStart(() => {
        current.value = position.value;
    })
    .onUpdate((event) => {
        position.value = Math.max(Math.min(event.translationY + current.value, start), 0);
    })

    return (
        <>
            <Animated.View style={[styles.overlay, overlayStyles]} />
            <GestureDetector gesture={gesture}>
                <Animated.View style={[{position: "absolute", width: '100%', bottom: 0}, animatedStyles]} onLayout={onLayout}>
                    {/* <View style={{height: 100, width: '100%', backgroundColor: "rgba(0, 0, 255, .3)"}} /> */}
                    {children}
                    {/* <View style={{height: 100, width: '100%', backgroundColor: "rgba(0, 255, 0, .3)", borderWidth: 5, borderColor: 'red'}} /> */}
                </Animated.View>
            </GestureDetector>
        </>
    );
}