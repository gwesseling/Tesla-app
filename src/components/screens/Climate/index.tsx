import { View, Text, StyleSheet, Pressable } from "react-native";
import PowerIcon from "../../icons/Power";
import FanIcon from "../../icons/Fan";
import Topbar from "../../shared/Topbar";
import useClimate from "./containerHook";
import CheveronLeftIcon from "../../icons/CheveronLeft";
import CheveronRightIcon from "../../icons/CheveronRight";
import Heat from "../../Heat";
import useToggle from "../../../hooks/toggle";

const styles = StyleSheet.create({
    bar: {
        alignItems: 'center',
    },
    heat: {
        flexDirection: 'row', 
        position: 'absolute', 
        top: '28%', 
        width: '100%', 
        justifyContent: 'space-evenly'
    },
    settings: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        paddingBottom: 10
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    temperature: {
        fontSize: 35,
        color: 'white',
        marginLeft: 15,
        marginRight: 15
    },
    information: {
        color: '#8A8B8B', 
        fontWeight: 'bold',
        fontSize: 12,
    }
});

// Set settings in local storage.
export default function Climate() {
    const {temperature, decreaseTemperature, increaseTemperature} = useClimate();
    const {isOn, toggle} = useToggle();
    const {isOn: isAircoOn, toggle: toggleFans} = useToggle();

    return (
        <>
            <Topbar title="Climate" />

            <View style={styles.heat}>
                <Heat />
                <Heat />
            </View>

            <View style={styles.bar}>
                <Text style={styles.information}>Interior 20°C - Exterior 3°C</Text>

                <View style={styles.settings}>
                    <Pressable onPress={toggle}>
                        <PowerIcon height={25} width={25} fill={isOn ? 'white' : '#8A8B8B'} />
                    </Pressable>

                    <View style={styles.container}>
                        <Pressable hitSlop={10} onPress={decreaseTemperature}>
                            <CheveronLeftIcon height={20} width={20} fill="#8A8B8B" />
                        </Pressable>

                        <Text style={styles.temperature}>{temperature.toFixed(1)}°</Text>

                        <Pressable hitSlop={10} onPress={increaseTemperature}>
                            <CheveronRightIcon height={20} width={20} fill="#8A8B8B" />
                        </Pressable>
                    </View>
                    
                    <Pressable onPress={toggleFans}>
                        <FanIcon height={25} width={25} fill={isAircoOn ? 'white' : '#8A8B8B'} />
                    </Pressable>
                </View>
            </View>
        </>
    );
}