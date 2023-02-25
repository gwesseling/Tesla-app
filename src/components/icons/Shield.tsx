/* eslint-disable max-len */
import Svg, {SvgProps, Path} from "react-native-svg";

export default function Shield(props: SvgProps) {
    return (
        <Svg viewBox="0 0 512 512" {...props}>
            <Path d="M240 0c4.6 0 9.2 1 13.4 2.9l188.3 79.9c22 9.3 38.4 31 38.3 57.2-.5 99.2-41.3 280.7-213.6 363.2-16.7 8-36.1 8-52.8 0C41.3 420.7.5 239.2 0 140c-.1-26.2 16.3-47.9 38.3-57.2L226.7 2.9C230.8 1 235.4 0 240 0z" />
        </Svg>
    );
}
