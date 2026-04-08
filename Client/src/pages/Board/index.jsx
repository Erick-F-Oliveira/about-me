import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Player from "../../components/Player";
import PathTiles from "../../components/PathTiles";

const Board = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas camera={{ position: [0, 6, 5] }}>
        <ambientLight />
        <directionalLight position={[5, 10, 5]} />

        <PathTiles />
        <Player />

        <OrbitControls makeDefault minDistance={3} maxDistance={15} />
      </Canvas>
    </div>
  );
};
export default Board;
