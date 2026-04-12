import { useRef, useState } from "react";
import grid from "../data/grid";
import colors from "../data/colors.json";

const Player2 = ({ currentTile, color, player, playerName }) => {
  const [showPlayerInfo, setShowPlayerInfo] = useState(false);
  if (showPlayerInfo) console.log("Player2: é um mano ");

  const ref = useRef();

  const tile = grid[currentTile];

  return (
    <mesh
      position={[tile.position[0], 0.5, tile.position[2]]}
      onClick={() =>
        document.getElementById(`modalPlayer-${player.id}`).showModal()
      }
    >
      <boxGeometry args={[0.8, 0.7, 0.8]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Player2;
