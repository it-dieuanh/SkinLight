// app/page.jsx
'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

function SpinningBox(props) {
  const ref = useRef();
  // Rotate the box every frame
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.6;
    ref.current.rotation.y += delta * 0.4;
  });
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#c67e2d" />
    </mesh>
  );
}

export default function Page() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas camera={{ position: [2, 2, 5], fov: 60 }}>
        {/* Lights */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />

        {/* Our rotating cube */}
        <SpinningBox position={[0, 0, 0]} />

        {/* Mouse/touch controls */}
        <OrbitControls enablePan={false} />
      </Canvas>
    </div>
  );
}
