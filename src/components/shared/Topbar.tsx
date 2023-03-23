import {Pressable, StyleSheet, Text} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {useNavigation} from "@react-navigation/native";
import CheveronLeft from "_COMPONENTS/icons/CheveronLeft";
import Profile from "_COMPONENTS/Profile";

type Props = {
    title: string;
};

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: "100%",
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
});

export default function Topbar({title}: Props) {
    const navigation = useNavigation();

    function onPress() {
        navigation.goBack();
    }

    return (
        <LinearGradient style={styles.container} colors={["rgba(22, 23, 24, .5)", "transparent"]} locations={[0.8, 1]}>
            <Pressable hitSlop={10} onPress={onPress}>
                <CheveronLeft height={20} width={20} fill="white" />
            </Pressable>

            <Text style={styles.title}>{title}</Text>

            <Profile />
        </LinearGradient>
    );
}
