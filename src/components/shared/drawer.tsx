import { ReactNode, useState, useRef } from "react";
import { useWindowDimensions, View, LayoutChangeEvent } from "react-native";
import { GestureDetector, Gesture, } from "react-native-gesture-handler";
import Animated, { useAnimatedStyle, useSharedValue, interpolate } from "react-native-reanimated";

// Magic number :/
const OVERLAY_OFFSET = 3.5;

type Props = {
    min: number,
    children: ReactNode;
}

export default function Drawer({min = 0, children}: Props) {
    const {height} = useWindowDimensions();

    const [overalyHeight, setOverlayHeight] = useState(height);
    const start = useRef(0);

    const current = useSharedValue(0);
    const offset = useSharedValue(0);

    function onLayout({nativeEvent}: LayoutChangeEvent) {
        const position = Math.max(0, nativeEvent.layout.height - min);
        const overlay = height - nativeEvent.layout.height + nativeEvent.layout.height - min - OVERLAY_OFFSET;
        
        setOverlayHeight(overlay);
        offset.value = position;
        start.current = position;
    }

    const animatedStyles = useAnimatedStyle(() => {
        return {
          transform: [
            { translateY: offset.value,
            },
          ],
        };
    });

    const overlay = useAnimatedStyle(() => {
        const y = start.current - offset.value;

        return {
            opacity: interpolate(y, [0, 50], [0, 1]),
            transform: [
                { 
                    translateY: -y,
                },
            ],
        };
    });

    const gesture = Gesture.Pan()
    .onStart(() => {
        current.value = offset.value;
    })
    .onUpdate((event) => {
        offset.value = Math.max(Math.min(event.translationY + current.value, start.current), 0);
    })

    return (
        <>
            <Animated.View style={[{top: -20, position: 'absolute', height: overalyHeight, width: '100%', backgroundColor: 'rgba(22, 23, 24, .9)'}, overlay]}></Animated.View>
            <GestureDetector gesture={gesture}>
                <Animated.View style={[{width: '100%'}, animatedStyles]} onLayout={onLayout}>
                    {/* <View style={{height: 100, width: '100%', backgroundColor: "rgba(0, 0, 255, .3)"}} /> */}
                    {children}
                    <View style={{height: 100, width: '100%', backgroundColor: "rgba(0, 255, 0, .3)", borderWidth: 5, borderColor: 'red'}} />
                </Animated.View>
            </GestureDetector>
        </>
    );
}