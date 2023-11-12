import {Suspense} from "react";
import {StyleSheet} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Canvas} from "@react-three/fiber/native";
import {Environment, ContactShadows} from "@react-three/drei/native";
import {Vector3} from "three";
import Model from "_COMPONENTS/Model";
import useRenderer from "./containerHook";

const DEFAULT_CAMERA_POSITION = new Vector3(0, 2.5, 5);

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        bottom: 50,
    },
});

export default function Renderer() {
    const spring = useRenderer();

    return (
        <LinearGradient
            colors={["#161718", "#333333", "#161718"]}
            locations={[0.15, 0.4, 0.55]}
            style={styles.container}
        >
            <Canvas camera={{position: DEFAULT_CAMERA_POSITION}}>
                <Suspense>
                    <Model rotation={spring.rotation} position={spring.position} />

                    <ContactShadows position={[0, 0, 0]} opacity={0.4} width={5} height={5} blur={0.5} />

                    <Environment preset="sunset" />
                </Suspense>
            </Canvas>
        </LinearGradient>
    );
}
