import {StyleProp, ViewStyle} from "react-native";
import {SvgProps} from "react-native-svg";
import {Routes} from "_LIBS/enums";
import LocationIcon from "_COMPONENTS/icons/Location";
import CarIcon from "_COMPONENTS/icons/Car";
import FanIcon from "_COMPONENTS/icons/Fan";
import ShieldIcon from "_COMPONENTS/icons/Shield";
import DownloadIcon from "_COMPONENTS/icons/Download";
import SummonIcon from "_COMPONENTS/icons/Summon";
import ShopIcon from "_COMPONENTS/icons/Shop";
import ServiceIcon from "_COMPONENTS/icons/Service";

export type MenuItem = {
    style?: StyleProp<ViewStyle>;
    id: number;
    title: string;
    description?: string;
    icon: (props: SvgProps) => JSX.Element;
    screen: string;
};

export default [
    {
        id: 999,
        style: {
            backgroundColor: "#2c2d2f",
        },
        title: "Software update",
        description: "Install 2022.69 now (~30 min)",
        icon: DownloadIcon,
        screen: Routes.Home,
    },
    {
        id: 0,
        title: "Controls",
        icon: CarIcon,
        screen: Routes.Controls,
    },
    {
        id: 1,
        title: "Climate",
        description: "Interior 20°C",
        icon: FanIcon,
        screen: Routes.Climate,
    },
    {
        id: 2,
        title: "Location",
        description: "Lincoln Boulevard, near Doyle Drive and Fort Point, San Francisco, CA 94129",
        icon: LocationIcon,
        screen: Routes.Home,
    },
    {
        id: 3,
        title: "Summon",
        icon: SummonIcon,
        screen: Routes.Home,
    },
    {
        id: 4,
        title: "Security",
        description: "Samsung Galaxy S22 - disconnected",
        icon: ShieldIcon,
        screen: Routes.Home,
    },
    {
        id: 5,
        title: "Upgrades",
        icon: ShopIcon,
        screen: Routes.Home,
    },
    {
        id: 6,
        title: "Service",
        icon: ServiceIcon,
        screen: Routes.Home,
    },
];
