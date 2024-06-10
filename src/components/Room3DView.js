import React,{ useRef } from 'react';
import { Canvas,useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTF} from '@react-three/drei';
// import { startTransition } from 'react';s

const Object3D = ({ modelUrl, position }) => {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} position={position} />;
};

const Room3DView = ({ objects, room }) => {

    const { scene: roomModel, isLoading } = useGLTF(room.modelUrl);



  return (
    <Canvas style={{width:"100vw",height:"100vh"}} orthographic camera={{ zoom: 50, position: [0, 0, 10] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
     
      <group> 
      <group position={[0,0,0]} scale={[1,1,1]}>
     
      {roomModel && !isLoading && <primitive  object={roomModel} />}
        
      {objects.map((obj, idx) => (
        <Object3D key={idx} modelUrl={obj.modelUrl} position={obj.position} />
      ))}
      </group>
     
      <OrbitControls />
      </group>
    </Canvas>
  );
};

export default Room3DView;
