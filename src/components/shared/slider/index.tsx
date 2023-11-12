import {View, StyleSheet} from "react-native";
import {GestureDetector} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import useSlider from "./containerHook";

const styles = StyleSheet.create({
    container: {
        height: 5,
        width: "100%",
        backgroundColor: "#45464a",
        borderRadius: 5,
        position: "relative",
    },
    value: {
        height: "100%",
        width: "80%",
        backgroundColor: "#14D67D",
        position: "absolute",
        borderRadius: 5,
    },
    thumb: {
        height: 15,
        width: 15,
        position: "absolute",
        backgroundColor: "white",
        borderRadius: 15,
        top: -5,
        left: -5,
    },
});

type Props = {
    min: number;
    max: number;
    value: number;
    onChange?: (value: number) => void;
};

export default function Slider({min, max, value, onChange}: Props) {
    const {animatedStyles, gesture, onLayout} = useSlider({min, max, value, onChange});

    return (
        <GestureDetector gesture={gesture}>
            <View style={styles.container} onLayout={onLayout}>
                <View style={styles.value} />

                <Animated.View style={[styles.thumb, animatedStyles]} />
            </View>
        </GestureDetector>
    );
}
