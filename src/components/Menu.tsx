import {View, Text, StyleSheet, Pressable} from "react-native";
import {useNavigation} from "@react-navigation/native";
import menu, {MenuItem} from "_LIBS/menu";
import CheveronRight from "_COMPONENTS/icons/CheveronRight";
import Hotbar from "_SHARED/Hotbar";

const styles = StyleSheet.create({
    menu: {
        flexDirection: "column",
        padding: 10,
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
        minHeight: 50,
        width: "100%",
        padding: 10,
        paddingBottom: 15,
        paddingTop: 15,
        borderRadius: 5,
    },
    icon: {
        marginRight: 15,
    },
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    content: {
        flex: 1,
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        color: "white",
        marginBottom: 2,
    },
    description: {
        fontWeight: "bold",
        fontSize: 12,
        color: "#888a90",
    },
});

export default function Menu() {
    const navigation = useNavigation();

    function renderMenu({id, style = {}, title, description, icon: Icon, screen}: MenuItem) {
        function onPress() {
            navigation.navigate(screen as never);
        }

        return (
            <Pressable style={[styles.item, style]} key={id} onPress={onPress} hitSlop={10}>
                <Icon height={20} width={20} fill="#888a90" style={styles.icon} />

                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.title}>{title}</Text>
                        {description ? <Text style={styles.description}>{description}</Text> : null}
                    </View>

                    <CheveronRight height={20} width={20} fill="#56585d" />
                </View>
            </Pressable>
        );
    }

    return (
        <View style={styles.menu}>
            <Hotbar />

            {menu.map(renderMenu)}
        </View>
    );
}
