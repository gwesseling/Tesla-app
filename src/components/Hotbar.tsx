import {View, StyleSheet} from "react-native";
import LockIcon from "_COMPONENTS/icons/Lock";
import FanIcon from "_COMPONENTS/icons/Fan";
import ElectricIcon from "_COMPONENTS/icons/Electric";
import CarIcon from "_COMPONENTS/icons/Car";

const styles = StyleSheet.create({
    hotbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
    },
});

export default function Hotbar() {
    return (
        <View style={styles.hotbar}>
            <LockIcon height={20} width={20} fill="#56585d" />
            <FanIcon height={20} width={20} fill="#56585d" />
            <ElectricIcon height={20} width={20} fill="#56585d" />
            <CarIcon height={20} width={20} fill="#56585d" />
        </View>
    );
}
