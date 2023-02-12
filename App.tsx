import {SafeAreaView, StyleSheet, View} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import Renderer from "./src/components/Renderer";
import { Routes } from "./src/libs/enums";
import routesMap from "./src/libs/routes";

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
                <Stack.Navigator initialRouteName={Routes.Home} screenOptions={OPTIONS}>
                    {routesMap.map(([key, value]) => <Stack.Screen name={key} component={value} key={key} />)}
                </Stack.Navigator>
            </View>

            <Renderer />
          </NavigationContainer>
        </LinearGradient>
      </SafeAreaView>
  )
}