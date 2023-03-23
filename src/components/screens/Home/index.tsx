import Banner from "_COMPONENTS/Banner";
import Menu from "_COMPONENTS/Menu";
import Drawer from "_SHARED/drawer";

const MENU_OFFSET = 0.55;

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
