import {Suspense} from "react";
import {View, Text, SafeAreaView} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Canvas } from '@react-three/fiber/native';
import { Environment, ContactShadows } from '@react-three/drei/native';
import Model from "./src/components/model";

export default function App() {
  // Linair gradient from: #333333 to #111214
  return (
      <SafeAreaView style={{flex: 1, position: 'relative', backgroundColor: '#333333'}}>
        <StatusBar style="light" />

        <View style={{flex: 1, flexDirection: "column", paddingTop: 30, padding: 20, paddingBottom: 0, justifyContent: "space-between"}}>
          <View style={{marginTop: 20}}>
            <View style={{top: 0}}>
              <Text style={{color: "#828385", fontWeight: "bold", fontSize: 25}}>Tesla</Text>
              <Text style={{color: "white", fontWeight: "bold", fontSize: 40}}>Roadster</Text>
            </View>
          </View>

          <View style={{flexDirection: "column"}}>
            <View style={{justifyContent: "center", minHeight: 50, width: '100%', marginBottom: 10}}>
              <Text style={{fontSize: 18, color: "white", marginBottom: 5}}>Controls</Text>
              <Text style={{fontSize: 12, color: "#828385"}}>Control your Tesla from outside the car</Text>
            </View>
            <View style={{justifyContent: "center", minHeight: 50, width: '100%', marginBottom: 10}}>
              <Text style={{fontSize: 18, color: "white", marginBottom: 5}}>Climate</Text>
              <Text style={{fontSize: 12, color: "#828385"}}>Interior 20°C</Text>
            </View>
            <View style={{justifyContent: "center", minHeight: 50, width: '100%', marginBottom: 10}}>
              <Text style={{fontSize: 18, color: "white", marginBottom: 5}}>Location</Text>
              <Text style={{fontSize: 12, color: "#828385"}}>Lincoln Boulevard, near Doyle Drive and Fort Point, San Francisco, CA 94129</Text>
            </View>
            <View style={{justifyContent: "center", minHeight: 50, width: '100%', marginBottom: 10}}>
              <Text style={{fontSize: 18, color: "white", marginBottom: 5}}>Summon</Text>
              <Text style={{fontSize: 12, color: "#828385"}}>Your Tesla will drive itself towards you</Text>
            </View>
            <View style={{justifyContent: "center", minHeight: 50, width: '100%', marginBottom: 10}}>
              <Text style={{fontSize: 18, color: "white", marginBottom: 5}}>Security</Text>
              <Text style={{fontSize: 12, color: "#828385"}}>Samsung Galaxy S22 - disconnected</Text>
            </View>
            <View style={{justifyContent: "center", minHeight: 50, width: '100%', marginBottom: 10}}>
              <Text style={{fontSize: 18, color: "white", marginBottom: 5}}>Upgrades</Text>
              <Text style={{fontSize: 12, color: "#828385"}}>Version 2.01.04.2-beta is ready for installation</Text>
            </View>
          </View>
        </View>

        <View style={{flex: 1, height: "100%", width: "100%", position: "absolute", bottom: 40}}>
          <Canvas gl={{physicallyCorrectLights: true}} camera={{position: [0, 2.5, 5]}}>
              <Suspense>
                <Model />

                <ContactShadows position={[0, 0, 0]} opacity={0.4} width={5} height={5} blur={0.5} />

                <Environment preset="sunset" />
              </Suspense>
          </Canvas>
        </View>
      </SafeAreaView>
  )
}