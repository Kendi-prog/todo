// Hero3D.js
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial } from "@react-three/drei";

export default function Hero3D() {
  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef} position={[0, 1, 0]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <MeshWobbleMaterial attach="material" factor={0.6} speed={1} color="lightblue" />
    </mesh>
  );
}
