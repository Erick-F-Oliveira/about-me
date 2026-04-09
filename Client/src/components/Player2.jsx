import { useRef, useState } from "react";
import grid  from "../data/grid";

const Player2 = ({ currentTile }) => {
  
  const ref = useRef();

  const tile = grid[currentTile];

  return (
  
    <mesh position={[tile.pos[0], 0.5, tile.pos[2]]}>
      <boxGeometry args={[0.8, 0.7, 0.8]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

export default Player2;