import {useTexture} from "@react-three/drei/native";
import materials from "_LIBS/materials";

import carbonFiberNormalMap from "_ASSETS/textures/carbon_fibre_normal.jpeg";
import carbonFiberRoughnessMap from "_ASSETS/textures/carbon_fibre_metallicRoughness.png";
import carbonFiberBaseColor from "_ASSETS/textures/carbon_fibre_baseColor.jpeg";

import girllNormalMap from "_ASSETS/textures/grill_normal.png";
import grillColor from "_ASSETS/textures/grill_baseColor.png";

import sidewallNormalMap from "_ASSETS/textures/Sidewall_normal.png";
import sidewallColor from "_ASSETS/textures/Sidewall_baseColor.png";

import threadNormalMap from "_ASSETS/textures/Thread_normal.png";
import threadColor from "_ASSETS/textures/Thread_baseColor.png";

export function useMaterial() {
    const carbonFiberTexture = useTexture({
        map: carbonFiberBaseColor,
        normalMap: carbonFiberNormalMap,
        roughnessMap: carbonFiberRoughnessMap,
    });

    const grillTexture = useTexture({
        map: grillColor,
        normalMap: girllNormalMap,
    });

    const sidewallTexture = useTexture({
        map: sidewallColor,
        normalMap: sidewallNormalMap,
    });

    const threadTexture = useTexture({
        map: threadColor,
        normalMap: threadNormalMap,
    });

    return {
        carbonFiber: <meshStandardMaterial attach="material" {...materials.carbonFiber} {...carbonFiberTexture} />,
        mainPaint: <meshPhysicalMaterial attach="material" {...materials.mainPaint} />,
        glass: <meshPhysicalMaterial attach="material" {...materials.glass} />,
        glassClear: <meshPhysicalMaterial attach="material" {...materials.glassClear} />,
        glassAmber: <meshStandardMaterial attach="material" {...materials.glassAmber} />,
        calipers: <meshStandardMaterial attach="material" {...materials.calipers} />,
        blackMetal: <meshStandardMaterial attach="material" {...materials.blackMetal} />,
        chrome: <meshStandardMaterial attach="material" {...materials.chrome} />,
        interior: <meshStandardMaterial attach="material" {...materials.interior} />,
        seats: <meshStandardMaterial attach="material" {...materials.seats} />,
        rim: <meshStandardMaterial attach="material" {...materials.rim} />,
        nonLustrousMetal: <meshStandardMaterial attach="material" {...materials.nonLustrousMetal} />,
        diskBrake: <meshStandardMaterial attach="material" {...materials.diskBrake} />,
        glassRearLights: <meshStandardMaterial attach="material" {...materials.glassRearLights} />,
        licencePlate: <meshStandardMaterial attach="material" {...materials.licencePlate} />,
        headlights: <meshStandardMaterial attach="material" {...materials.headlights} />,
        indicator: <meshStandardMaterial attach="material" {...materials.indicator} />,
        grill: <meshStandardMaterial attach="material" {...materials.grill} {...grillTexture} />,
        sidewall: <meshStandardMaterial attach="material" {...materials.sidewall} {...sidewallTexture} />,
        thread: <meshStandardMaterial attach="material" {...materials.thread} {...threadTexture} />,
    };
}
