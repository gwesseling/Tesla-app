import {useEffect} from "react";
import {useSpring} from "@react-spring/three";
import {useNavigationState} from "@react-navigation/native";
import ROUTES_CONFIG, {DEFAULT_PLACEMENT} from "_LIBS/placement";

export default function useRenderer() {
    const routeName = useNavigationState((state) => state?.routes[state.index].name);
    const [spring, api] = useSpring(() => DEFAULT_PLACEMENT);

    useEffect(() => {
        api.start(ROUTES_CONFIG[routeName] || DEFAULT_PLACEMENT);
    }, [routeName, api]);

    return spring;
}
