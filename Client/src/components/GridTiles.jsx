import grid from "../data/grid";
import color from "../data/colors.json";

const GridTiles = ({ onTileClick, selectedTiles }) => {
  return (
    <>
      {grid.map((tile) => {
        const isSelectable = selectedTiles?.includes(tile.id);
        // Define cor baseada no tipo
        let tileColor = "gray";
        if (tile.type === "start") {
          tileColor = color.Glauco;
        }
        if (isSelectable && tile.type === "start") {
          tileColor = "green";
        } else if (isSelectable) {
          tileColor = color.Esmeralda;
        }

        return (
          <mesh
            key={tile.id}
            position={tile.position}
            onClick={() => isSelectable && onTileClick(tile)}
            onHover={() =>
              console.log(
                `Tile ${tile.id} - ${isSelectable ? "Selectable" : "Not selectable"}`,
              )
            }
          >
            <boxGeometry args={[1.5, 0.2, 1.5]} />
            <meshStandardMaterial color={tileColor} />
          </mesh>
        );
      })}
    </>
  );
};

export default GridTiles;
