import {useState, useEffect} from "react";
import {LayoutChangeEvent} from "react-native";
import {useSharedValue} from "react-native-reanimated";
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

    function onLayout(e: LayoutChangeEvent) {
        setWidth(e.nativeEvent.layout.width);
    }

    function onUpdate(e: GestureUpdateEvent<PanGestureHandlerEventPayload>) {
        position.value = Math.max(Math.min(e.x, width), 0);
        onValueChange();
    }

    function onTouchesDown(e: GestureTouchEvent) {
        const firstTouch = e.changedTouches[0];
        position.value = firstTouch.x;
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
    const gesture = Gesture.Pan().onUpdate(onUpdate).onTouchesDown(onTouchesDown).onTouchesUp(onTouchUp);

    return {
        gesture,
        position,
        onLayout,
        onValueChange,
    };
}
