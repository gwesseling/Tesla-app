import {Suspense, useMemo} from "react";
import {View} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Canvas } from '@react-three/fiber/native';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei/native';
import Model from "./src/components/model";

export default function App() {
  return (
      <View style={{flex: 1, backgroundColor: '#333333'}}>
        <StatusBar style="light" />
        <Canvas shadows gl={{physicallyCorrectLights: true}} camera={{position: [0, 1.3, 5]}}>
            <ambientLight intensity={0.7} />
            
            <Suspense>
              <Model />

              <ContactShadows position={[0, 0.0, 0]} opacity={0.4} width={5} height={5} blur={0.5} />

              <Environment preset="sunset" />
            </Suspense>
        </Canvas>
      </View>
  )
}