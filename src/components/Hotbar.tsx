import {useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import LockIcon from "_COMPONENTS/icons/Lock";
import FanIcon from "_COMPONENTS/icons/Fan";
import ElectricIcon from "_COMPONENTS/icons/Electric";
import CarIcon from "_COMPONENTS/icons/Car";
import Slider from "_SHARED/slider";

const styles = StyleSheet.create({
    hotbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
});

export default function Hotbar() {
    const [limit, setLimit] = useState(90);

    return (
        <>
            <View style={styles.hotbar}>
                <LockIcon height={20} width={20} fill="#56585d" />
                <FanIcon height={20} width={20} fill="#56585d" />
                <ElectricIcon height={20} width={20} fill="white" />
                <CarIcon height={20} width={20} fill="#56585d" />
            </View>

            <View
                style={{
                    width: "100%",
                    minHeight: 100,
                    borderRadius: 5,
                    backgroundColor: "#2c2d2f",
                    marginBottom: 10,
                    padding: 20,
                }}
            >
                <Text style={{color: "white", fontSize: 15}}>Charge limit: {limit}%</Text>

                <View style={{marginTop: 15, marginBottom: 15}}>
                    <Slider onChange={(value) => setLimit(value)} value={limit} />
                </View>

                <Text style={{color: "#888a90", fontSize: 15}}>2 kWh added during last charging session</Text>
            </View>
        </>
    );
}
