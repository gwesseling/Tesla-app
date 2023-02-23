import {View, Text, StyleSheet} from "react-native";
import UserIcon from "./icons/User";
import BatteryIcon from "./icons/Battery";

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
    user: {
        height: 35, 
        width: 35, 
        backgroundColor: "#2D2F34", 
        borderRadius: 100, 
        justifyContent: "center", 
        alignItems: "center", 
        overflow: 'hidden'
    },
    userIcon: {
        marginTop: 15
    }
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

                <View style={styles.user}>
                  <UserIcon style={styles.userIcon} height={35} width={35} fill="#888a90" />
                </View>
            </View>
        </>
    );
}