import {View, Text, StyleSheet} from "react-native";
import BatteryIcon from "./icons/Battery";
import Profile from "./Profile";

const styles = StyleSheet.create({
    content: {
        flexDirection: "row", 
        justifyContent: "space-between",
        padding: 20,
    },
    title: {
        color: "#888a90", 
        fontWeight: "bold", 
        fontSize: 25
    },
    subtitle: {
        color: "white", 
        fontWeight: "bold", 
        fontSize: 40
    },
});

export default function Banner() {
    return (
        <>
            <View style={styles.content}>
                <View>
                  <Text style={styles.title}>Tesla</Text>
                  <Text style={styles.subtitle}>Roadster</Text>

                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <BatteryIcon height={25} width={25} fill="#888a90" />
                    <Text style={{marginLeft: 10, color: "#888a90", fontWeight: 'bold'}}>510km</Text>
                  </View>
                </View>

                <Profile />
            </View>
        </>
    );
}