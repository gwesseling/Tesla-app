/* eslint-disable max-len */
import Svg, {SvgProps, Path} from "react-native-svg";

export default function Battery(props: SvgProps) {
    return (
        <Svg viewBox="0 0 576 512" {...props}>
            <Path d="M464 160c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h384zM80 96c-44.2 0-80 35.8-80 80v160c0 44.2 35.8 80 80 80h384c44.2 0 80-35.8 80-80v-16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32v-16c0-44.2-35.8-80-80-80H80zm208 96H96v128h192V192z" />
        </Svg>
    );
}
