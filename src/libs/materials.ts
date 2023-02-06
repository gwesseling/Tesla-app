import { DoubleSide } from "three";

export default {
    carbonFiber: {
        side: DoubleSide,
    },
    mainPaint: {
        clearcoat: 1.0, 
        clearcoatRoughness: 0.12,
        specularIntensity: 0.5,  
        color: 0xe10016, 
        metalness: 0.98, 
        roughness: 0.25,
        reflectivity: 0.5,
        side: DoubleSide,
    },
    glass: {
        reflectivity: 0.5,
        // transmission: 0.94, // Expo-gl does not support transmission.
        transparent: true,
        opacity: 0.35,
        color: 0x000,
        side: DoubleSide,
    },
    glassClear: {
        color: 0xFEFEFE,
        // transmission: 0.94, // Expo-gl does not support transmission.
        reflectivity: 0.5,
        clearcoat: 1.0,
        opacity: 0.25,
        transparent: true,
        side: DoubleSide,
    },
    glassAmber: {
        color: 0xFE7E00,
        roughness: 0.13,
        side: DoubleSide,
    },
    calipers: {
        color: 0xFE7E00,
        reflectivity: 0.5,
        roughness: 0.26,
        metalness: 0.17,
        clearcoat: 1.0,
        clearcoatRoughness: 0.04,
        side: DoubleSide,
    },
    blackMetal: {
        color: 0x1B1B1B,
        roughness: 0.17,
        side: DoubleSide,
    },
    chrome: {
        color: 0xFEFEFE,
        roughness: 0,
        side: DoubleSide,
    },
    interior: {
        color: 0x7F7F7F,
        side: DoubleSide,
    },
    seats: {
        color: 0xFEFEFE,
        side: DoubleSide,
    },
    rim: {
        color: 0x3C3C3C,
        roughness: 0.10,
        side: DoubleSide,
    },
    nonLustrousMetal: {
        color: 0x1C1C25,
        roughness: 0.55,
        side: DoubleSide,
    },
    diskBrake: {
        color: 0x949494,
        metalness: 1,
        side: DoubleSide,
    },
    glassRearLights: {
        color: 0xFE0000,
        roughness: 0.38,
        side: DoubleSide,
    },
    licencePlate: {
        color: 0xFEFEFE,
        emissive: 0xFEFEFE,
        metalness: 1,
        roughness: 1,
        side: DoubleSide,
    },
    headlights: {
        color: 0x606060,
        side: DoubleSide,
    },
    indicator: {
        emissive: 0xFE2100,
        side: DoubleSide,
    },
    grill: {
        metalness: 0.66,
        side: DoubleSide,
    },
    sidewall: {
        roughness: 0.76,
        side: DoubleSide,
    },
    thread: {
        roughness: 0.76,
        side: DoubleSide,
    }
}