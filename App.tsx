import {SafeAreaView, StyleSheet, View} from "react-native";
import { StatusBar } from "expo-status-bar";
import Renderer from "./src/components/Renderer";
import { Routes } from "./src/libs/enums";
import routesMap from "./src/libs/routes";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative', 
    backgroundColor: '#161718',
  },
  content: {
    height: "100%",
    width: "100%",
    position: "absolute",
    paddingTop: 30, 
    zIndex: 1,
  },
  screen: {
    flexDirection: "column", 
    justifyContent: "space-between",
    backgroundColor: "transparent",
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

          <NavigationContainer>
            <GestureHandlerRootView style={styles.content}>
                <Stack.Navigator initialRouteName={Routes.Home} screenOptions={OPTIONS}>
                    {routesMap.map(([key, value]) => <Stack.Screen name={key} component={value} key={key} />)}
                </Stack.Navigator>
            </GestureHandlerRootView>

            <Renderer />
          </NavigationContainer>
      </SafeAreaView>
  )
}