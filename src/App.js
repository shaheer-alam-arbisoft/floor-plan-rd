import React, { useState } from 'react';
import RoomCanvas from './components/RoomCanvas';
import Room3DView from './components/Room3DView';

const initialObjects = [
  { id: 1, textureUrl: '/table.png', modelUrl: '/table.glb', position: [0, 0, 0] },
  { id: 2, textureUrl: '/chair.png', modelUrl: '/chair.glb', position: [2, 2, 0] },
];
const rooms=[
  {id:1, textureUrl:'/room.png' , modelUrl:"/room.glb"}
]

const App = () => {
  const [objects, setObjects] = useState(initialObjects);
  const [is3DView, setIs3DView] = useState(false);
  const [selectedRoom, setSelectedRoom] =useState(rooms[0])
  const handleUpdatePosition = (index, newPosition) => {
    const updatedObjects = [...objects];
    updatedObjects[index].position = [newPosition.x, newPosition.y, 0];
    setObjects(updatedObjects);
  };

  return (
    <div>
      <button onClick={() => setIs3DView(!is3DView)}>
        {is3DView ? 'Switch to 2D View' : 'Switch to 3D View'}
      </button>
      {is3DView ? (
        <Room3DView room={selectedRoom} objects={objects} />
      ) : (
        <RoomCanvas room={selectedRoom} objects={objects} onUpdatePosition={handleUpdatePosition} />
      )}
    </div>
  );
};

export default App;
