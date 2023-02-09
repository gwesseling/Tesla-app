import { SvgProps } from "react-native-svg";
import LocationIcon from "../components/icons/Location";
import CarIcon from "../components/icons/Car";
import FanIcon from "../components/icons/Fan";
import ShieldIcon from "../components/icons/Shield";
import DownloadIcon from "../components/icons/Download";
import SummonIcon from "../components/icons/Summon";

export type MenuItem = {
    id: number;
    title: string;
    description: string;
    icon: (props: SvgProps) => JSX.Element;
    screen: string;
}

export default [
    {
        id: 0,
        title: "Controls",
        description: "Control your Tesla from outside the car",
        icon: CarIcon,
        screen: 'Home',
      },
      {
        id: 1,
        title: "Climate",
        description: "Interior 20°C",
        icon: FanIcon,
        screen: 'Climate',
      },
      {
        id: 2,
        title: "Location",
        description: "Lincoln Boulevard, near Doyle Drive and Fort Point, San Francisco, CA 94129",
        icon: LocationIcon,
        screen: 'Home',
      },
      {
        id: 3,
        title: "Summon",
        description: "Your Tesla will drive itself towards you",
        icon: SummonIcon,
        screen: 'Home',
      },
      {
        id: 4,
        title: "Security",
        description: "Samsung Galaxy S22 - disconnected",
        icon: ShieldIcon,
        screen: 'Home',
      },
      {
        id: 5,
        title: "Upgrades",
        description: "Version 2.01.04.2-beta is ready for installation",
        icon: DownloadIcon,
        screen: 'Home',
      },
]