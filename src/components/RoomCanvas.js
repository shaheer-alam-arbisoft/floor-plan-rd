import React from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, Plane } from '@react-three/drei';
import DraggablePlane from './DraggablePlane';
import { TextureLoader } from 'three';

const RoomCanvas = ({ room,objects, onUpdatePosition }) => {
    const roomTexture = useLoader(TextureLoader, room.textureUrl);

  return (
    <Canvas style={{width:"100vw",height:"100vh"}} orthographic camera={{ zoom: 50, position: [0, 0, 10] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <group>
      <Plane args={[10, 10]} position={[0, 0, -0.1]}>
        <meshBasicMaterial  map={roomTexture} transparent />
      </Plane>
        
      </group>
     
      {objects.map((obj, idx) => (
        <DraggablePlane
          key={idx}
          textureUrl={obj.textureUrl}
          position={obj.position}
          onDragEnd={(newPos) => onUpdatePosition(idx, newPos)}
        />
      ))}
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default RoomCanvas;
