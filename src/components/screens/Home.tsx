import Banner from "../Banner";
import Menu from "../Menu";
import Drawer from "../shared/drawer";

const MENU_HEIGHT = 386.6666564941406;

export default function Home() {
    return (
        <>
            <Banner />

            <Drawer min={MENU_HEIGHT}>
                <Menu />
            </Drawer>
        </>
    );
}