import {View, Text, StyleSheet} from "react-native";
import Topbar from "_SHARED/Topbar";
import LockIcon from "_COMPONENTS/icons/Lock";
import FlashIcon from "_COMPONENTS/icons/Flash";
import SoundIcon from "_COMPONENTS/icons/Sound";
import PowerIcon from "_COMPONENTS/icons/Power";
import FanIcon from "_COMPONENTS/icons/Fan";

const styles = StyleSheet.create({
    carOverlay: {
        height: "32.5%",
        width: "100%",
        top: "20%",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
    },
    open: {
        color: "white",
        fontSize: 18,
    },
    options: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: 20,
        paddingBottom: 10,
    },
    option: {
        alignItems: "center",
        justifyContent: "center",
    },
    optionText: {
        color: "#888a90",
        fontSize: 12,
        marginTop: 10,
    },
});

export default function Controls() {
    return (
        <>
            <Topbar title="Controls" />

            <View style={styles.carOverlay}>
                <Text style={styles.open}>Open</Text>

                <LockIcon height={30} width={30} fill="#888a90" />
            </View>

            <View style={styles.options}>
                <View style={styles.option}>
                    <FlashIcon height={20} width={20} fill="#888a90" />
                    <Text style={styles.optionText}>Flash</Text>
                </View>
                <View style={styles.option}>
                    <SoundIcon height={20} width={20} fill="#888a90" />
                    <Text style={styles.optionText}>Honk</Text>
                </View>
                <View style={styles.option}>
                    <PowerIcon height={20} width={20} fill="#888a90" />
                    <Text style={styles.optionText}>Start</Text>
                </View>
                <View style={styles.option}>
                    <FanIcon height={20} width={20} fill="#888a90" />
                    <Text style={styles.optionText}>Vent</Text>
                </View>
            </View>
        </>
    );
}
