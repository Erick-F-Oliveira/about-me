import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import GridTiles from "../../components/GridTiles";
import Player from "../../components/Player2";
import grid from "../../data/grid";
import { OrbitControls } from "@react-three/drei";

const ClickBoard = () => {
  const [player, setPlayer] = useState({
    id: "p1",
    name: "Player 1",
    position: 0,
    diceType: 6, // tipo do dado (d6)
    steps: 0, // resultado do dado (quantas casas anda)
  });

  const [showPlayerInfo, setShowPlayerInfo] = useState(false);
  const [hasRolled, setHasRolled] = useState(false);
  const [rolling, setRolling] = useState(false);
  const [currentTile, setCurrentTile] = useState(0);
  const [diceValue, setDiceValue] = useState(null);
  if (showPlayerInfo) {
    console.log("Player2: 100 de pv ");
  }
  const rollDice = () => {
    if (rolling || hasRolled) return;

    setRolling(true);

    setTimeout(() => {
      const value = Math.floor(Math.random() * player.diceType) + 1;

      setPlayer((p) => ({
        ...p,
        steps: value,
      }));
      setDiceValue(value);

      setRolling(false);
      setHasRolled(true);
    }, 1000);
  };

  // calcula tiles possíveis (distância simples)
  const getReachableTiles = () => {
    const current = grid[player.position];

    return grid
      .filter((tile) => {
        const dist =
          Math.abs(tile.gridX - current.gridX) +
          Math.abs(tile.gridZ - current.gridZ);

        return dist <= player.steps;
      })
      .map((t) => t.id);
  };

  const selectableTiles = hasRolled ? getReachableTiles() : [];

  const handleTileClick = (tile) => {
    if (!hasRolled) return;

    setPlayer((p) => ({
      ...p,
      position: tile.id,
      steps: 0,
    }));

    setHasRolled(false);
  };

  return (
    <div style={{ height: "100vh" }}>
      <Canvas camera={{ position: [0, 10, 3] }}>
        <ambientLight />
        <directionalLight position={[5, 10, 5]} />

        <GridTiles
          onTileClick={handleTileClick}
          selectedTiles={selectableTiles}
        />

        <Player
          currentTile={player.position}
          onHover={() => setShowPlayerInfo(true)}
          onUnhover={() => setShowPlayerInfo(false)}
        />
        <OrbitControls makeDefault minDistance={5} maxDistance={25} />
      </Canvas>
      {/* UI HTML FORA do Canvas! */}
      {showPlayerInfo && (
        <div
          className="stats shadow"
          style={{
            position: "absolute",
            bottom: 100,
            left: 20,
          }}
        >
          <div className="stat">
            <div className="stat-title">{player.name}</div>
            <div className="stat-value">🎲 {diceValue ?? "-"}</div>
            <div className="stat-desc">📍 Tile {player.position}</div>
          </div>
        </div>
      )}
      <button
        className={`btn btn-circle btn-lg ${
          rolling ? "btn-disabled" : hasRolled ? "btn-neutral" : "btn-success"
        }`}
        onClick={rollDice}
        disabled={rolling || hasRolled}
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
        }}
      >
        {rolling ? "..." : "🎲"}
      </button>
      <div
        className="bg-base-200 text-base-content shadow-lg rounded-box px-4 py-2"
        style={{
          position: "absolute",
          bottom: 100,
          right: 20,
        }}
      >
        <span className="font-bold">🎲</span> {player.name} rolou d
        {player.diceType} →{" "}
        <span className="font-semibold">{diceValue ?? "-"}</span>
      </div>
    </div>
  );
};

export default ClickBoard;
