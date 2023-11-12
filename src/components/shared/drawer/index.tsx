import {ReactNode} from "react";
import {StyleSheet} from "react-native";
import {GestureDetector} from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import useDrawer from "./containerHook";

type Props = {
    offset: number;
    children: ReactNode;
};

const styles = StyleSheet.create({
    overlay: {
        height: "100%",
        width: "100%",
        position: "absolute",
        backgroundColor: "rgba(22, 23, 24, .9)",
    },
    drawer: {
        position: "absolute",
        width: "100%",
        bottom: 0,
    },
});

export default function Drawer({offset = 0.5, children}: Props) {
    const {animatedStyles, overlayStyles, gesture, onLayout} = useDrawer(offset);

    return (
        <>
            <Animated.View style={[styles.overlay, overlayStyles]} />
            <GestureDetector gesture={gesture}>
                <Animated.View style={[styles.drawer, animatedStyles]} onLayout={onLayout}>
                    {children}
                </Animated.View>
            </GestureDetector>
        </>
    );
}
