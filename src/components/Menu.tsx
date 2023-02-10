
import {View, Text, StyleSheet, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';
import menu, {MenuItem} from "../libs/menu";
import CheveronRight from "./icons/CheveronRight";

const styles = StyleSheet.create({
    menu: {
        flexDirection: "column",
        padding: 20,
        paddingBottom: 0,
    },
    item: {
        flexDirection: 'row',
        alignItems: "center",
        minHeight: 50,
        width: '100%',
        marginBottom: 10,
    },
    icon: {
        marginRight: 15
    },
    container: {
        flex: 1,
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "space-between"
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
        color: "#8A8B8B"
    }
});

export default function Menu() {
    const navigation = useNavigation();

    function renderMenu({id, title, description, icon: Icon, screen}: MenuItem) {

        function onPress() {
            navigation.navigate(screen);
        }

        return (
            <Pressable style={styles.item} key={id} onPress={onPress} hitSlop={10}>
                <Icon height={20} width={20} fill="#8A8B8B" style={styles.icon} />

                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.description}>{description}</Text>
                    </View>

                    <CheveronRight height={20} width={20} fill="#8A8B8B" />
                </View>
            </Pressable>
        );
    }

    return (
        <View style={styles.menu}>{menu.map(renderMenu)}</View>
    );
}