import {View, Text} from "react-native";
import Menu from "./Menu";
import UserIcon from "./icons/User";

export default function TopBar() {
    return (
        <View style={{flex: 1, flexDirection: "column", paddingTop: 30, padding: 20, paddingBottom: 0, justifyContent: "space-between"}}>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginTop: 20, top: 0}}>
                <View>
                  <Text style={{fontFamily: "Roboto", color: "#8A8B8B", fontWeight: "bold", fontSize: 25}}>Tesla</Text>
                  <Text style={{fontFamily: "Roboto", color: "white", fontWeight: "bold", fontSize: 40}}>Roadster</Text>
                </View>

                <View style={{height: 40, width: 40, backgroundColor: "#2D2F34", borderRadius: 100, justifyContent: "center", alignItems: "center", overflow: 'hidden'}}>
                  <UserIcon style={{marginTop: 15}} height={35} width={35} fill="#595959" />
                </View>
            </View>

            <Menu />
        </View>
    );
}