import {SafeAreaView} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import Topbar from "./src/components/Topbar";
import Renderer from "./src/components/Renderer";


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

          <Renderer />
        </LinearGradient>
      </SafeAreaView>
  )
}