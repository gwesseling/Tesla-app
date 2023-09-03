import {StyleSheet, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import {NavigationContainer} from "@react-navigation/native";
import {StackAnimationTypes} from "react-native-screens";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import Renderer from "_COMPONENTS/Renderer";
import {Routes} from "_LIBS/enums";
import routesMap, {RouteMap} from "_LIBS/routes";

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
        backgroundColor: "#161718",
    },
    content: {
        height: "100%",
        width: "100%",
        position: "absolute",
        paddingTop: 25,
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
    animation: "fade" as StackAnimationTypes,
};

export default function Entrypoint() {
    function renderScreens([key, value]: RouteMap) {
        return <Stack.Screen name={key} component={value} key={key} />;
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor="#161718" />

            <NavigationContainer>
                <GestureHandlerRootView style={styles.content}>
                    <Stack.Navigator initialRouteName={Routes.Home} screenOptions={OPTIONS}>
                        {routesMap.map(renderScreens)}
                    </Stack.Navigator>
                </GestureHandlerRootView>

                <Renderer />
            </NavigationContainer>
        </View>
    );
}
