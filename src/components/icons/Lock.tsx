/* eslint-disable max-len */
import Svg, {SvgProps, Path} from "react-native-svg";

export default function Lock(props: SvgProps) {
    return (
        <Svg viewBox="0 0 448 512" {...props}>
            <Path d="M144 144v48h160v-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm-64 48v-48C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h16z" />
        </Svg>
    );
}
