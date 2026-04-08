import { path } from "../data/path";

const PathTiles = () => {
  return path.map((tile) => (
    <>
      <mesh
        onClick={() => onTileClick(i)}
        position={[tile.pos[0], 0, tile.pos[2]]}
      />
      <mesh key={tile.type} position={[tile.pos[0], 0, tile.pos[2]]}>
        <boxGeometry args={[0.9, 0.1, 0.9]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      <mesh position={[tile.pos[0], -0.01, tile.pos[2]]}>
        <boxGeometry args={[1.05, 0.05, 1.05]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </>
  ));
};

export default PathTiles;
