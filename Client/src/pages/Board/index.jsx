import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Player from "../../components/Player";
import Grid from "../../components/Grid";

const Board = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Canvas camera={{ position: [5, 5, 5] }}>
        <ambientLight />
        <directionalLight position={[5, 10, 5]} />

        <Grid />
        <Player />

        <OrbitControls />
      </Canvas>
    </div>
  );
};
export default Board;
