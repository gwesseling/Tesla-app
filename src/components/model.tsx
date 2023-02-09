import {useEffect, useRef, useState} from "react";
import { useGLTF } from '@react-three/drei/native'
import teslaModel from '../../assets/test4.glb';

import { useMaterial } from '../hooks/material';
import { useSpring, animated } from '@react-spring/three';

// const mouseXRef = useRef<number>();
  // const [isDragging, setIsDragging] = useState<boolean>(false);

  // useFrame(({pointer}) => {
  //   if (!isDragging) return;

  //   if (ref.current && mouseXRef.current) {
  //     const deltaX = (pointer.x - mouseXRef.current);

  //     ref.current.rotation.y += deltaX;
  //   }

  //   // mouseXRef.current = pointer.x;
  // });

  // function onUp() {
  //   setIsDragging(false);
  // }

  // function onDown({point}) {
  //   mouseXRef.current = point.x;
  //   setIsDragging(true);
  // }

// TODO: make a hook for the geometry
export default function Model() {
  const { nodes } = useGLTF(teslaModel, false);

  const [active, setActive] = useState<boolean>(false);

  const [spring, api] = useSpring(() => ({rotation: [0, 0, 0], position: [0, 0, -1.5] }));

  useEffect(() => {
    if (active) {
        api.start({rotation: [Math.PI / 3, Math.PI, 0], position: [0, 0, 1]});
        return;
    }

    api.start({rotation: [0, -Math.PI / 4, 0], position: [0, 0, -1.5]});
  }, [active]);

  const ref = useRef<any>();
  const materials = useMaterial();

  return (
    <animated.group dispose={null} position={spring.position} rotation={spring.rotation} ref={ref}
      onClick={() => setActive(!active)}
      // onPointerUp={onUp}
      // onPointerDown={onDown}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-83.8, 31.33, 153.42]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <group position={[0.1, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["roadster080_Brake_Disc_0"].geometry}
              >
                {materials.diskBrake}
              </mesh>
            </group>
            <group position={[0.06, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster002_Thread_0.geometry}
              >
                {materials.thread}
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster002_Sidewall_0.geometry}
              >
                {materials.sidewall}
              </mesh>
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelFtR_Rims_0"].geometry}
            >
              {materials.rim}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelFtR_mirror_0"].geometry}
            >
              {materials.chrome}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelFtR_Metal_-_Black_rough_0"].geometry}
            >
              {materials.blackMetal}
            </mesh>
          </group>
          <group
            position={[0, 54.14, -2.14]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <group position={[0, -2.22, -0.36]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster005_grill_0.geometry}
              >
                {materials.grill}
              </mesh>
            </group>
            <group position={[0, -0.68, 0.41]}>
              <group position={[0, 0.68, -0.41]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.roadster082_car_main_paint_0.geometry}
                >
                  {materials.mainPaint}
                </mesh>
              </group>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster007_Glass_mid_tint_0.geometry}
              >
                {materials.glass}
              </mesh>
            </group>
            <group position={[0, -0.05, 0.22]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster008_interior_0.geometry}
              >
                {materials.interior}
              </mesh>
            </group>
            <group position={[0, 0.1, -0.06]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster009_seats_0.geometry}
              >
                {materials.seats}
              </mesh>
            </group>
            <group position={[0, 0.29, 0.4]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster010_seats_0.geometry}
              >
                {materials.seats}
              </mesh>
            </group>
            <group position={[0, -0.18, 0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster011_mirror_0.geometry}
              >
                {materials.chrome}
              </mesh>
            </group>
            <group position={[0, -0.2, 0.5]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["roadster012_Metal_-_Black_rough_0"].geometry}
              >
                {materials.blackMetal}
              </mesh>
            </group>
            <group position={[0, 1.17, 0.37]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["roadster013_Metal_-_Black_rough_0"].geometry}
              >
                {materials.blackMetal}
              </mesh>
            </group>
            <group position={[0.35, -0.46, 0.11]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["roadster014_Metal_-_Black_rough_0"].geometry}
              >
                {materials.blackMetal}
              </mesh>
            </group>
            <group position={[0, -0.47, -0.02]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster015_car_main_paint_0.geometry}
              >
                {materials.mainPaint}
              </mesh>
            </group>
            <group position={[0, 0.77, 0.38]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["roadster016_Metal_-_Black_rough_0"].geometry}
              >
                {materials.blackMetal}
              </mesh>
            </group>
            <group position={[0, 0.33, 0.4]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["roadster017_Metal_-_Black_rough_0"].geometry}
              >
                {materials.blackMetal}
              </mesh>
            </group>
            <group position={[0, -0.68, 0.28]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster018_non_lustrous_metal_0.geometry}
              >
                {materials.nonLustrousMetal}
              </mesh>
            </group>
            <group position={[0, -0.77, 0.24]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster019_Glass_mid_tint_0.geometry}
              >
                {materials.glass}
              </mesh>
            </group>
            <group position={[0, -0.78, 0.25]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["roadster020_Metal_-_Black_rough_0"].geometry}
              >
                {materials.blackMetal}
              </mesh>
            </group>
            <group position={[0, -0.68, 0.41]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["roadster021_Metal_-_Black_rough_0"].geometry}
              >
                {materials.blackMetal}
              </mesh>
            </group>
            <group position={[0, 1.15, 0.37]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster022_non_lustrous_metal_0.geometry}
              >
                {materials.nonLustrousMetal}
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster022_grill_0.geometry}
              >
                {materials.grill}
              </mesh>
            </group>
            <group position={[0, -2.2, -0.43]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster024_carbon_fibre_0.geometry}
              >
                {materials.carbonFiber}
              </mesh>
            </group>
            <group position={[0, -1.93, -0.14]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster025_Glass_Amber_0.geometry}
              >
                {materials.glassAmber}
              </mesh>
            </group>
            <group position={[0, -1.93, -0.14]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["roadster026_Metal_-_Black_rough_0"].geometry}
              >
                {materials.blackMetal}
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster026_indicator_left_0.geometry}
              >
                {materials.indicator}
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster026_indicator_right_0.geometry}
              >
                {materials.indicator}
              </mesh>
            </group>
            <group position={[0, -1.14, 0.05]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster027_chrome_0.geometry}
              >
                {materials.chrome}
              </mesh>
            </group>
            <group position={[0, -1.67, -0.05]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster028_carbon_fibre_0.geometry}
              >
                {materials.carbonFiber}
              </mesh>
            </group>
            <group position={[0, -2.06, -0.04]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster029_Glass_Clear_0.geometry}
              >
                {materials.glassClear}
              </mesh>
            </group>
            <group position={[0, -2.06, -0.04]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster030_carbon_fibre_0.geometry}
              >
                {materials.carbonFiber}
              </mesh>
            </group>
            <group position={[0, -2.07, -0.07]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster031_carbon_fibre_0.geometry}
              >
                {materials.carbonFiber}
              </mesh>
            </group>
            <group position={[0, -2.09, -0.05]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster032_headlights_AHO_0.geometry}
              >
                {materials.headlights}
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster032_carbon_fibre_0.geometry}
              >
                {materials.carbonFiber}
              </mesh>
            </group>
            <group position={[0, -2.02, -0.04]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster033_headlights_AHO_0.geometry}
              >
                {materials.headlights}
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster033_carbon_fibre_0.geometry}
              >
                {materials.carbonFiber}
              </mesh>
            </group>
            <group position={[0, -2.01, -0.04]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster034_carbon_fibre_0.geometry}
              >
                {materials.carbonFiber}
              </mesh>
            </group>
            <group position={[0, -2.02, -0.04]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster035_headlights_main_0.geometry}
              >
                {materials.headlights}
              </mesh>
            </group>
            <group position={[0, -2, -0.04]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster036_carbon_fibre_0.geometry}
              >
                {materials.carbonFiber}
              </mesh>
            </group>
            <group position={[0, -2.03, -0.04]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster037_Glass_Clear_0.geometry}
              >
                {materials.glassClear}
              </mesh>
            </group>
            <group position={[0, -2.21, -0.05]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster038_chrome_0.geometry}
              >
                {materials.chrome}
              </mesh>
            </group>
            <group position={[0, 2.1, 0.23]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster039_chrome_0.geometry}
              >
                {materials.chrome}
              </mesh>
            </group>
            <group position={[0, -2.19, -0.36]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster040_carbon_fibre_0.geometry}
              >
                {materials.carbonFiber}
              </mesh>
            </group>
            <group position={[0, -2.16, -0.31]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["roadster041_Metal_-_Black_rough_0"].geometry}
              >
                {materials.blackMetal}
              </mesh>
            </group>
            <group position={[0, 1.99, -0.27]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster043_carbon_fibre_0.geometry}
              >
                {materials.carbonFiber}
              </mesh>
            </group>
            <group position={[0, 2.11, -0.17]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster044_Glass_Clear_0.geometry}
              >
                {materials.glassClear}
              </mesh>
            </group>
            <group position={[0, 2.11, -0.17]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["roadster045_Metal_-_Black_rough_0"].geometry}
              >
                {materials.blackMetal}
              </mesh>
            </group>
            <group position={[0, 2.14, 0.1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster046_Glass_Tint_max_0.geometry}
              >
                {materials.glass}
              </mesh>
            </group>
            <group position={[0, 2.13, 0.1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster047_non_lustrous_metal_0.geometry}
              >
                {materials.nonLustrousMetal}
              </mesh>
            </group>
            <group position={[0, 2.13, 0.11]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster048_Glass_Clear_0.geometry}
              >
                {materials.glassClear}
              </mesh>
            </group>
            <group position={[0, 2.13, 0.12]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["roadster049_Metal_-_Black_rough_0"].geometry}
              >
                {materials.blackMetal}
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster049_licence_plate_light_0.geometry}
              >
                {materials.licencePlate}
              </mesh>
            </group>
            <group position={[0, 2.11, -0.17]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster050_Glass_rear_lights_main_0.geometry}
              >
                {materials.glassRearLights}
              </mesh>
            </group>
            <group position={[0, 1.78, -0.17]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster051_Glass_Amber_0.geometry}
              >
                {materials.glassAmber}
              </mesh>
            </group>
            <group position={[0, 1.78, -0.18]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["roadster052_Metal_-_Black_rough_0"].geometry}
              >
                {materials.blackMetal}
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster052_indicator_left_0.geometry}
              >
                {materials.indicator}
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster052_indicator_right_0.geometry}
              >
                {materials.indicator}
              </mesh>
            </group>
            <group position={[0, 0.8, 0.39]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster053_Glass_mid_tint_0.geometry}
              >
                {materials.glass}
              </mesh>
            </group>
            <group position={[0, 1.08, 0.48]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster054_Glass_mid_tint_0.geometry}
              >
                {materials.glass}
              </mesh>
            </group>
            <group position={[0, 1.13, 0.47]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["roadster055_Metal_-_Black_rough_0"].geometry}
              >
                {materials.blackMetal}
              </mesh>
            </group>
            <group position={[0, 0.14, 0.59]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster056_Glass_Tint_max_0.geometry}
              >
                {materials.glass}
              </mesh>
            </group>
            <group position={[0, 0.11, 0.56]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster057_Glass_Tint_max_0.geometry}
              >
                {materials.glass}
              </mesh>
            </group>
            <group position={[0, 0.1, 0.55]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster058_car_main_paint_0.geometry}
              >
                {materials.mainPaint}
              </mesh>
            </group>
            <group position={[0, -0.18, 0.35]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster059_Glass_mid_tint_0.geometry}
              >
                {materials.glass}
              </mesh>
            </group>
            <group position={[0, 2.05, 0.28]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster060_car_main_paint_0.geometry}
              >
                {materials.mainPaint}
              </mesh>
            </group>
            <group position={[0, 2.11, 0.27]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster061_ior_1_0.geometry}
              >
                {materials.glassRearLights}
              </mesh>
            </group>
            <group position={[0, 2.08, 0.27]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster062_car_main_paint_0.geometry}
              >
                {materials.mainPaint}
              </mesh>
            </group>
            <group position={[0, 2.11, 0.27]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster063_carbon_fibre_0.geometry}
              >
                {materials.carbonFiber}
              </mesh>
            </group>
            <group position={[0, 2.11, 0.27]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster064_Glass_rear_lights_main_0.geometry}
              >
                {materials.glassRearLights}
              </mesh>
            </group>
            <group position={[0, 1.94, 0.21]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster065_Glass_rear_lights_DHO_0.geometry}
              >
                {materials.glassRearLights}
              </mesh>
            </group>
            <group position={[0, 1.84, 0.23]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster066_Glass_Clear_0.geometry}
              >
                {materials.glassClear}
              </mesh>
            </group>
            <group position={[0, 1.83, 0.23]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster067_carbon_fibre_0.geometry}
              >
                {materials.carbonFiber}
              </mesh>
            </group>
            <group position={[0, 1.91, 0.21]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster068_carbon_fibre_0.geometry}
              >
                {materials.carbonFiber}
              </mesh>
            </group>
            <group position={[0, 1.82, 0.23]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster069_Glass_rear_lights_main_0.geometry}
              >
                {materials.glassRearLights}
              </mesh>
            </group>
            <group position={[0, -0.09, -0.25]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes["roadster070_Metal_-_Black_rough_0"].geometry}
              >
                {materials.blackMetal}
              </mesh>
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-Body_car_main_paint_0"].geometry}
            >
              {materials.mainPaint}
            </mesh>
          </group>
          <group
            position={[-73.07, 31.34, 140.09]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelBrakeFtR_calipers_0"].geometry}
            >
              {materials.calipers}
            </mesh>
          </group>
          <group
            position={[83.8, 31.33, 153.42]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <group position={[-0.1, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster072_Brake_Disc_0.geometry}
              >
                {materials.diskBrake}
              </mesh>
            </group>
            <group position={[-0.06, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster001_Thread_0.geometry}
              >
                {materials.thread}
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster001_Sidewall_0.geometry}
              >
                {materials.sidewall}
              </mesh>
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelFtL_Rims_0"].geometry}
            >
              {materials.rim}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelFtL_mirror_0"].geometry}
            >
              {materials.chrome}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelFtL_Metal_-_Black_rough_0"].geometry}
            >
              {materials.blackMetal}
            </mesh>
          </group>
          <group
            position={[83.8, 31.33, 153.42]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelBrakeFtL_calipers_0"].geometry}
            >
              {materials.calipers}
            </mesh>
          </group>
          <group
            position={[87.43, 34.13, -138.74]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <group position={[-0.12, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster074_Brake_Disc_0.geometry}
              >
                {materials.diskBrake}
              </mesh>
            </group>
            <group position={[-0.07, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster003_Thread_0.geometry}
              >
                {materials.thread}
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster003_Sidewall_0.geometry}
              >
                {materials.sidewall}
              </mesh>
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelBkL_Rims_0"].geometry}
            >
              {materials.rim}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelBkL_mirror_0"].geometry}
            >
              {materials.chrome}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelBkL_Metal_-_Black_rough_0"].geometry}
            >
              {materials.blackMetal}
            </mesh>
          </group>
          <group
            position={[87.43, 34.13, -138.74]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelBrakeBkL_calipers_0"].geometry}
            >
              {materials.calipers}
            </mesh>
          </group>
          <group
            position={[-84.02, 34.11, -138.74]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <group position={[0.12, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster076_Brake_Disc_0.geometry}
              >
                {materials.diskBrake}
              </mesh>
            </group>
            <group position={[0.07, 0, 0]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster004_Thread_0.geometry}
              >
                {materials.thread}
              </mesh>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.roadster004_Sidewall_0.geometry}
              >
                {materials.sidewall}
              </mesh>
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelBkR_Rims_0"].geometry}
            >
              {materials.rim}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelBkR_mirror_0"].geometry}
            >
              {materials.chrome}
            </mesh>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelBkR_Metal_-_Black_rough_0"].geometry}
            >
              {materials.blackMetal}
            </mesh>
          </group>
          <group
            position={[-84.02, 34.11, -138.74]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["TRDEF-WheelBrakeBkR_calipers_0"].geometry}
            >
              {materials.calipers}
            </mesh>
          </group>
        </group>
      </group>
    </animated.group>
  );
}