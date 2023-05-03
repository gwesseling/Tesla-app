import {useState, useEffect} from "react";
import {LayoutChangeEvent} from "react-native";
import {useSharedValue, useAnimatedStyle} from "react-native-reanimated";
import {
    Gesture,
    GestureTouchEvent,
    GestureUpdateEvent,
    PanGestureHandlerEventPayload,
} from "react-native-gesture-handler";

type TypeConfig = {
    min: number;
    max: number;
    value: number;
    onChange?: (value: number) => void;
};

export default function useSlider({min, max, value, onChange}: TypeConfig) {
    const [width, setWidth] = useState(0);
    const position = useSharedValue(0);

    useEffect(() => {
        const percentage = ((100 / max) * value) / 100;
        position.value = Math.max(Math.min(width * percentage, width), 0);
    }, [value, width, max, position]);

    function onLayout({nativeEvent}: LayoutChangeEvent) {
        setWidth(nativeEvent.layout.width);
    }

    function onUpdate({x}: GestureUpdateEvent<PanGestureHandlerEventPayload>) {
        position.value = Math.max(Math.min(x, width), 0);
        onValueChange();
    }

    function onTouchesDown({changedTouches}: GestureTouchEvent) {
        position.value = changedTouches[0].x;
    }

    function onTouchUp() {
        onValueChange();
    }

    function onValueChange() {
        const percentage = ((100 / width) * position.value) / 100;
        const val = Math.round(Math.max(Math.min(max * percentage, max), min));

        onChange?.(val);
    }

    // eslint-disable-next-line new-cap
    const pan = Gesture.Pan().maxPointers(1).hitSlop(10).onUpdate(onUpdate);

    // eslint-disable-next-line new-cap
    const tap = Gesture.Tap().numberOfTaps(1).hitSlop(10).onTouchesDown(onTouchesDown).onTouchesUp(onTouchUp);

    // eslint-disable-next-line new-cap
    const gesture = Gesture.Exclusive(pan, tap);

    const animatedStyles = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: position.value,
            },
        ],
    }));

    return {
        animatedStyles,
        gesture,
        onLayout,
        onValueChange,
    };
}
