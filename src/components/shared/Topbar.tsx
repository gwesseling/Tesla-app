import { View, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CheveronLeft from "../icons/CheveronLeft";

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
});

export default function Topbar() {
    const navigation = useNavigation();

    function onPress() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Pressable hitSlop={10} onPress={onPress}>
                <CheveronLeft height={20} width={20} fill="white" />
            </Pressable>
        </View>
    );
}