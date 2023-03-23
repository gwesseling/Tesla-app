import {DoubleSide} from "three";

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
        opacity: 0.5,
        color: 0x000,
        side: DoubleSide,
    },
    glassClear: {
        color: 0xfefefe,
        // transmission: 0.94, // Expo-gl does not support transmission.
        reflectivity: 0.5,
        clearcoat: 1.0,
        opacity: 0.25,
        transparent: true,
        side: DoubleSide,
    },
    glassAmber: {
        color: 0xfe7e00,
        roughness: 0.13,
        side: DoubleSide,
    },
    calipers: {
        color: 0xfe7e00,
        reflectivity: 0.5,
        roughness: 0.26,
        metalness: 0.17,
        clearcoat: 1.0,
        clearcoatRoughness: 0.04,
        side: DoubleSide,
    },
    blackMetal: {
        color: 0x1b1b1b,
        roughness: 0.17,
        side: DoubleSide,
    },
    chrome: {
        color: 0xfefefe,
        roughness: 0,
        side: DoubleSide,
    },
    interior: {
        color: 0x7f7f7f,
        side: DoubleSide,
    },
    seats: {
        color: 0xfefefe,
        side: DoubleSide,
    },
    rim: {
        color: 0x3c3c3c,
        roughness: 0.1,
        side: DoubleSide,
    },
    nonLustrousMetal: {
        color: 0x1c1c25,
        roughness: 0.55,
        side: DoubleSide,
    },
    diskBrake: {
        color: 0x949494,
        metalness: 1,
        side: DoubleSide,
    },
    glassRearLights: {
        color: 0xfe0000,
        roughness: 0.38,
        side: DoubleSide,
    },
    licencePlate: {
        color: 0xfefefe,
        emissive: 0xfefefe,
        metalness: 1,
        roughness: 1,
        side: DoubleSide,
    },
    headlights: {
        color: 0x606060,
        side: DoubleSide,
    },
    indicator: {
        emissive: 0xfe2100,
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
    },
};
