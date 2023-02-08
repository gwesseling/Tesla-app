import {Suspense} from "react";
import {View, Text, SafeAreaView} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import { Canvas } from '@react-three/fiber/native';
import { Environment, ContactShadows } from '@react-three/drei/native';
import Topbar from "./src/components/Topbar";
import Model from "./src/components/Model";

export default function App() {
  return (
      <SafeAreaView style={{flex: 1, position: 'relative', backgroundColor: '#333333'}}>
        <StatusBar style="light" />

        <LinearGradient
          colors={['#161718', '#333333', '#161718']}
          locations={[0.15, 0.35, 0.55]}
          style={{flex: 1}}
        >
          <Topbar />

          <View style={{flex: 1, height: "100%", width: "100%", position: "absolute", bottom: 50}}>
            <Canvas gl={{physicallyCorrectLights: true}} camera={{position: [0, 2.5, 5]}}>
                <Suspense>
                  <Model />

                  <ContactShadows position={[0, 0, 0]} opacity={0.4} width={5} height={5} blur={0.5} />

                  <Environment preset="sunset" />
                </Suspense>
            </Canvas>
          </View>
        </LinearGradient>
      </SafeAreaView>
  )
}