import {Suspense, useEffect} from "react";
import {View, StyleSheet} from "react-native";
import {useNavigationState} from '@react-navigation/native';
import {Canvas} from '@react-three/fiber/native';
import {Environment, ContactShadows} from '@react-three/drei/native';
import {useSpring} from '@react-spring/three';
import { Vector3 } from "three";
import Model from "./Model";
import ROUTES_CONFIG from "../libs/placement";

const DEFAULT_CAMERA_POSITION = new Vector3(0, 2.5, 5);

const styles = StyleSheet.create({
    container: {
        height: "100%", 
        width: "100%", 
        bottom: 50,
    }
});

export default function Renderer() {
    const routeName = useNavigationState((state) => state?.routes[state.index].name);

    const [spring, api] = useSpring(() => ({rotation: [0, -Math.PI / 4, 0], position: [0.4, 0, -1.5] }));

    useEffect(() => {
        if (ROUTES_CONFIG[routeName]) {
            const {rotation, position} = ROUTES_CONFIG[routeName]

            api.start({rotation, position});
            return;
        }

        api.start({rotation: [0, -Math.PI / 4, 0], position: [0.4, 0, -1.5]});
    }, [routeName]);

    return (
        <View style={styles.container}>
            <Canvas gl={{physicallyCorrectLights: true}} camera={{position: DEFAULT_CAMERA_POSITION}}>
                <Suspense>
                    <Model rotation={spring.rotation} position={spring.position} />

                    <ContactShadows position={[0, 0, 0]} opacity={0.4} width={5} height={5} blur={0.5} />

                    <Environment preset="sunset" />
                </Suspense>
            </Canvas>
        </View>
    );
}