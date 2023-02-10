import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import CheveronLeft from "../icons/CheveronLeft";
import CheveronRight from "../icons/CheveronRight";
import PowerIcon from "../icons/Power";
import FanIcon from "../icons/Fan";
import Topbar from "../shared/Topbar";

const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 20,
        paddingBottom: 10
    },
    icons: {
        alignItems: 'center'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    temperature: {
        fontSize: 40,
        color: 'white',
        marginLeft: 15,
        marginRight: 15
    },
    information: {
        color: '#8A8B8B', 
        fontWeight: 'bold'
    }
});

export default function Climate() {
    return (
        <>
            <Topbar />

            <LinearGradient style={styles.bar} colors={['transparent', '#161718']} locations={[0, 0.2]}>
                <View style={styles.icons}>
                    <PowerIcon height={25} width={25} fill="white" />
                </View>

                <View>
                    <View style={styles.container}>
                        <CheveronLeft height={20} width={20} fill="#8A8B8B" />

                        <Text style={styles.temperature}>20.0°</Text>

                        <CheveronRight height={20} width={20} fill="#8A8B8B" />
                    </View>

                    <Text style={styles.information}>Interior 20°C - Exterior 3°C</Text>
                </View>
                
                <View style={styles.icons}>
                    <FanIcon height={25} width={25} fill="white" />
                </View>
            </LinearGradient>
        </>
    );
}