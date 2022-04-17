import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import { TextureLoader } from "three";

export function Earth(props) {
  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 28;
    cloudsRef.current.rotation.y = elapsedTime / 28;
  });

  return (
    <>
      <pointLight color="#f6f3ea" position={[-2, 1.8, 2]} intensity={1.2} />
      <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      />
      <mesh ref={cloudsRef} position={[1.8, -0.28, 3]}>
        <sphereGeometry args={[1.425, 32, 32]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.6}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[1.8, -0.28, 3]}>
        <sphereGeometry args={[1.420, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.10}
          roughness={0.7}
        />
        <OrbitControls
          enableZoom={false}
          enablePan={true}
          enableRotate={false}
          zoomSpeed={0.1}
          panSpeed={0.5}
          rotateSpeed={0.1}
        />
      </mesh>
    </>
  );
}
