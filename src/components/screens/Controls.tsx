import { View } from "react-native";
import Topbar from "../shared/Topbar";

import LockIcon from "../icons/Lock";
import FlashIcon from "../icons/Flash";

export default function Controls() {
    return (
        <>
            <Topbar />

            <View style={{position: 'absolute', left: '50%', top: '50%', transform: [{translateX: -15}, {translateY: -35}]}}>
                <LockIcon height={30} width={30} fill="#8A8B8B" />
            </View>

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                padding: 20,
                backgroundColor: '#161718'
            }}>
                <FlashIcon height={25} width={25} fill="#8A8B8B" />
                <FlashIcon height={25} width={25} fill="#8A8B8B" />
                <FlashIcon height={25} width={25} fill="#8A8B8B" />
                <FlashIcon height={25} width={25} fill="#8A8B8B" />
            </View>
        </>
    );
}