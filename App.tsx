import {SafeAreaView, StyleSheet, View} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import Renderer from "./src/components/Renderer";

// Pages
import Home from "./src/components/screens/Home";
import Climate from "./src/components/screens/Climate";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', 
    backgroundColor: '#333333'
  },
  gradient: {
    flex: 1
  },
  content: {
    height: "100%",
    width: "100%",
    position: "absolute",
    paddingTop: 30, 
    zIndex: 1
  },
  screen: {
    flexDirection: "column", 
    justifyContent: "space-between",
    backgroundColor: "transparent",
    marginTop: 20, 
  },
});

const OPTIONS = {
  headerShown: false,
  contentStyle: styles.screen,
}

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />

        <LinearGradient
          colors={['#161718', '#333333', '#161718']}
          locations={[0.15, 0.35, 0.55]}
          style={styles.gradient}
        >
          <NavigationContainer>
            <View style={styles.content}>
                <Stack.Navigator initialRouteName="Home" screenOptions={OPTIONS}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Climate" component={Climate} />
                </Stack.Navigator>
            </View>

            <Renderer />
          </NavigationContainer>
        </LinearGradient>
      </SafeAreaView>
  )
}