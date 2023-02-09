import {Suspense} from "react";
import {View, StyleSheet, Text} from "react-native";
import {Canvas} from '@react-three/fiber/native';
import {Environment, ContactShadows} from '@react-three/drei/native';
import Model from "./Model";
import { Vector3 } from "three";

const DEFAULT_CAMERA_POSITION = new Vector3(0, 2.5, 5);

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        height: "100%", 
        width: "100%", 
        position: "absolute", 
        bottom: 50,
        zIndex: 0,
    }
});

export default function Renderer() {
    return (
        <View style={styles.container}>
            <Canvas gl={{physicallyCorrectLights: true}} camera={{position: DEFAULT_CAMERA_POSITION}}>
                <Suspense>
                    <Model />

                    <ContactShadows position={[0, 0, 0]} opacity={0.4} width={5} height={5} blur={0.5} />

                    <Environment preset="sunset" />
                </Suspense>
            </Canvas>
        </View>
    );
}