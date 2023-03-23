import {View, StyleSheet, Text} from "react-native";
import LockIcon from "_COMPONENTS/icons/Lock";
import FanIcon from "_COMPONENTS/icons/Fan";
import ElectricIcon from "_COMPONENTS/icons/Electric";
import CarIcon from "_COMPONENTS/icons/Car";
import Slider from "_SHARED/slider";
import useHotbar from "./containerHook";

const styles = StyleSheet.create({
    hotbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
    limit: {
        width: "100%",
        minHeight: 100,
        borderRadius: 5,
        backgroundColor: "#2c2d2f",
        marginBottom: 10,
        padding: 20,
    },
    limitText: {
        color: "white",
        fontSize: 15,
    },
    slider: {
        marginTop: 10,
        marginBottom: 10,
    },
    limitState: {
        color: "#888a90",
        fontSize: 15,
        marginBottom: 10,
    },
    voltage: {
        backgroundColor: "#45464a",
        width: "100%",
        height: 50,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    amount: {
        color: "white",
        fontSize: 16,
    },
});

export default function Hotbar() {
    const {limit, onChange} = useHotbar();

    return (
        <>
            <View style={styles.hotbar}>
                <LockIcon height={20} width={20} fill="#56585d" />
                <FanIcon height={20} width={20} fill="#56585d" />
                <ElectricIcon height={20} width={20} fill="white" />
                <CarIcon height={20} width={20} fill="#56585d" />
            </View>

            <View style={styles.limit}>
                <Text style={styles.limitText}>Charge limit: {limit}%</Text>

                <View style={styles.slider}>
                    <Slider onChange={onChange} value={limit} />
                </View>

                <Text style={styles.limitState}>2 kWh added during last charging session</Text>

                <View style={styles.voltage}>
                    <Text style={styles.amount}>48 A</Text>
                </View>
            </View>
        </>
    );
}
