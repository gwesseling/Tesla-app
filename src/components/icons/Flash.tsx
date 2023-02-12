import Svg, { SvgProps, Path } from "react-native-svg";

export default function Flash(props: SvgProps) {
    return (
        <Svg viewBox="0 0 384 512" {...props}>
            <Path d="M317.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.5 22.9-8.9 35.4S18.7 288 32 288h111.5L66.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H240.5l76.9-179.5z" />
        </Svg>
    )
}
