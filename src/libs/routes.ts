import {Routes} from "./enums";
import Home from "../components/screens/Home";
import Climate from "../components/screens/Climate";
import Controls from "../components/screens/Controls";

const routeMap = {
    [Routes.Home]: Home,
    [Routes.Climate]: Climate,
    [Routes.Controls]: Controls,
};

export default Object.entries(routeMap);
