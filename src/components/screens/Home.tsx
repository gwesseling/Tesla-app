import { ScrollView } from "react-native-gesture-handler";
import Banner from "../Banner";
import Menu from "../Menu";
import Drawer from "../shared/drawer";

// TODO: calculate this in the future
const MENU_OFFSET =  0.55;

export default function Home() {
    return (
        <>
            <Banner />

            <Drawer offset={MENU_OFFSET}>
                <Menu />
            </Drawer>
        </>
    );
}