
import {View, Text} from "react-native";
import menu, {MenuItem} from "../libs/menu";
import CheveronRight from "./icons/CheveronRight";

export default function Menu() {

    function renderMenu({id, title, description, icon: Icon}: MenuItem) {
        return (
            <View style={{flexDirection: 'row', alignItems: "center", minHeight: 50, width: '100%', marginBottom: 10}} key={id}>
                <Icon height={20} width={20} fill="#8A8B8B" style={{marginRight: 15}} />

                <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
                    <View style={{flex: 1}}>
                        <Text style={{fontFamily: "normal", fontWeight: '800', fontSize: 18, color: "white", marginBottom: 5}}>{title}</Text>
                        <Text style={{fontFamily: "Roboto", fontWeight: '800', fontSize: 12, color: "#8A8B8B"}}>{description}</Text>
                    </View>

                    <CheveronRight height={20} width={20} fill="#8A8B8B" />
                </View>
            </View>
        );
    }

    return (
        <View style={{flexDirection: "column"}}>{menu.map(renderMenu)}</View>
    );
}