import { ReactNode, useState } from "react";
import { StyleSheet, View, LayoutChangeEvent } from "react-native";
import { GestureDetector, Gesture, } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, interpolate } from "react-native-reanimated";

type Props = {
    min: number,
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

export default function Drawer({min = 0, children}: Props) {
    const [start, setStart] = useState(0);

    const current = useSharedValue(0);
    const offset = useSharedValue(0);

    function onLayout({nativeEvent}: LayoutChangeEvent) {
        const position = Math.max(0, nativeEvent.layout.height - min);

        offset.value = position;
        current.value = position;

        setStart(position);
    }

    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [
                { 
                    translateY: offset.value,
                },
            ],
        };
    });

    const overlayStyles = useAnimatedStyle(() => {
        return {
            opacity: interpolate(offset.value, [0, start], [1, 0]),
        };
    });

    const gesture = Gesture.Pan()
    .onStart(() => {
        current.value = offset.value;
    })
    .onUpdate((event) => {
        offset.value = Math.floor(Math.max(Math.min(event.translationY + current.value, start), 0));
    })

    return (
        <>
            <Animated.View style={[styles.overlay, overlayStyles]}></Animated.View>
            <GestureDetector gesture={gesture}>
                <Animated.View style={animatedStyles} onLayout={onLayout}>
                    {/* <View style={{height: 100, width: '100%', backgroundColor: "rgba(0, 0, 255, .3)"}} /> */}
                    {children}
                    <View style={{height: 100, width: '100%', backgroundColor: "rgba(0, 255, 0, .3)", borderWidth: 5, borderColor: 'red'}} />
                </Animated.View>
            </GestureDetector>
        </>
    );
}