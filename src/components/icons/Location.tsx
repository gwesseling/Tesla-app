import Svg, { SvgProps, Path } from "react-native-svg";

export default function Location(props: SvgProps) {
    return (
        <Svg viewBox="0 0 448 512" {...props}>
            <Path d="M413.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144C5.7 200.2-2.3 215.2.6 230.2S16.7 256 32 256h176v176c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
        </Svg>
    );
}