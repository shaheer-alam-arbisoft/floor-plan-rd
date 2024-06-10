import React from 'react';
import { useGLTF } from '@react-three/drei';

const Object3D = ({ modelUrl, position }) => {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} position={position} />;
};

export default Object3D;
