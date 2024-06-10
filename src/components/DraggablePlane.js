import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

const DraggablePlane = ({ textureUrl, position, onDragEnd }) => {
  const [isDragging, setIsDragging] = useState(false);
  const meshRef = useRef();
  const texture = useLoader(TextureLoader, textureUrl);

  const handlePointerDown = () => setIsDragging(true);
  const handlePointerUp = () => setIsDragging(false);
  const handlePointerMove = (e) => {
    if (isDragging) {
      meshRef.current.position.x = e.point.x;
      meshRef.current.position.y = e.point.y;
      onDragEnd(meshRef.current.position);
    }
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
    >
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

export default DraggablePlane;
