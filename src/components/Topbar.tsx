import {View, Text, StyleSheet} from "react-native";
import Menu from "./Menu";
import UserIcon from "./icons/User";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column", 
        paddingTop: 30, 
        padding: 20, 
        paddingBottom: 0, 
        justifyContent: "space-between"
    },
    content: {
        flexDirection: "row", 
        justifyContent: "space-between", 
        marginTop: 20, 
        top: 0
    },
    title: {
        color: "#8A8B8B", 
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

export default function TopBar() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View>
                  <Text style={styles.title}>Tesla</Text>
                  <Text style={styles.subtitle}>Roadster</Text>
                </View>

                <View style={styles.user}>
                  <UserIcon style={styles.userIcon} height={35} width={35} fill="#595959" />
                </View>
            </View>

            <Menu />
        </View>
    );
}