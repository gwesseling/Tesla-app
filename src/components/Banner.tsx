import {View, Text, StyleSheet} from "react-native";
import BatteryIcon from "_COMPONENTS/icons/Battery";
import Profile from "_COMPONENTS/Profile";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    title: {
        color: "#888a90",
        fontWeight: "bold",
        fontSize: 25,
    },
    subtitle: {
        color: "white",
        fontWeight: "bold",
        fontSize: 40,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
    },
    range: {
        marginLeft: 10,
        color: "#888a90",
        fontWeight: "bold",
    },
});

export default function Banner() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Tesla</Text>
                <Text style={styles.subtitle}>Roadster</Text>

                <View style={styles.content}>
                    <BatteryIcon height={25} width={25} fill="#888a90" />
                    <Text style={styles.range}>510km</Text>
                </View>
            </View>

            <Profile />
        </View>
    );
}
