import {View, StyleSheet} from "react-native";
import UserIcon from "./icons/User";

const styles = StyleSheet.create({
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

export default function Profile() {
    return (
        <View style={styles.user}>
            <UserIcon style={styles.userIcon} height={35} width={35} fill="#888a90" />
        </View>
    );
}