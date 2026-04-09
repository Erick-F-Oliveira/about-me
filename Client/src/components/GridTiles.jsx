import  grid  from "../data/grid";

const GridTiles = ({ onTileClick, selectedTiles }) => {
  return (
    <>
      {grid.map((tile) => {
        const isSelectable = selectedTiles?.includes(tile.id);

        return (
          <mesh
            key={tile.id}
            position={tile.pos}
            onClick={() => isSelectable && onTileClick(tile)}
          >
            <boxGeometry args={[1.5, 0.2, 1.5]} />
            <meshStandardMaterial
              color={isSelectable ? "green" : "gray"}
            />
          </mesh>
        );
      })}
    </>
  );
};

export default GridTiles;