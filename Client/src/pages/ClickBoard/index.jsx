import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import GridTiles from "../../components/GridTiles";
import Player from "../../components/Players";
import grid, { startPositions } from "../../data/grid";
import { OrbitControls } from "@react-three/drei";
import mockPlayers from "../../data/players";

const ClickBoard = () => {
  // 👇 Inicializa os jogadores com as posições dinâmicas
  const [players, setPlayers] = useState(() => {
    return mockPlayers.map((player, index) => ({
      ...player,
      position: startPositions[index]?.id || 0, // 👈 Posição dinâmica!
    }));
  });

  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0); // Índice do jogador atual
  const [hasRolled, setHasRolled] = useState(false);
  const [rolling, setRolling] = useState(false);
  const [currentTile, setCurrentTile] = useState(0);
  const [diceValue, setDiceValue] = useState(null);

  const currentPlayer = players[currentPlayerIndex];

  const rollDice = () => {
    if (rolling || hasRolled) return;
    setRolling(true);
    setTimeout(() => {
      const value = Math.floor(Math.random() * currentPlayer.diceType) + 1;

      setPlayers((prevPlayers) => {
        const updated = [...prevPlayers]; 
        updated[currentPlayerIndex] = {
          ...currentPlayer,
        };
        return updated; 
      });
      setDiceValue(value);
      setRolling(false);
      setHasRolled(true);
    }, 1000);
  };

  // calcula as casas alcançáveis com base na posição atual do jogador e no valor do dado + quaisquer bonos de movimentação
  const getReachableTiles = () => {
    const current = grid[currentPlayer.position];
    const totalMovement = diceValue + currentPlayer.steps;

    //filtra os tiles que estão dentro do alcance do movimento do jogador (distância Manhattan) e retorna seus IDs
    return grid
      .filter((tile) => {
        const dist =
          Math.abs(tile.gridX - current.gridX) +
          Math.abs(tile.gridZ - current.gridZ);

        return dist <= totalMovement;
      })
      .map((t) => t.id);
  };

  const selectableTiles = hasRolled ? getReachableTiles() : [];

  const handleTileClick = (tile) => {
    if (!hasRolled) return;

    const current = grid[currentPlayer.position];
    const dist =
      Math.abs(tile.gridX - current.gridX) +
      Math.abs(tile.gridZ - current.gridZ);
    const totalMovement = diceValue + currentPlayer.steps;

    if (dist <= totalMovement) {
      setPlayers((prevPlayers) => {
        const updated = [...prevPlayers];
        updated[currentPlayerIndex] = {
          ...currentPlayer,
          position: tile.id,
        };
        return updated;
      });

      setCurrentPlayerIndex((prev) => (prev + 1) % players.length);
      setHasRolled(false);
      setDiceValue(null);
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <Canvas camera={{ position: [138, 50, 0] }}>
        <ambientLight />
        <directionalLight position={[5, 10, 5]} />

        <GridTiles
          onTileClick={handleTileClick}
          selectedTiles={selectableTiles}
        />

        {players.map((player) => (
          <Player
            key={player.id}
            currentTile={player.position}
            player={player}
          />
        ))}
        <OrbitControls makeDefault minDistance={4} maxDistance={25} />
      </Canvas>

      {players.map((player) => (
        <dialog
          key={player.id}
          id={`modalPlayer-${player.id}`}
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              {player.charName}({player.name})
            </h3>
            <p className="py-4">
              Classe: {player.class}
              <br />
              PV: {player.pv}
              <br />
              ATQ: {player.atq}
              <br />
              DEF: {player.def}
              <br />
              Equipamentos: {player.equips}
            </p>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      ))}
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
        <span className="font-bold">🎲</span> {currentPlayer.name} rolou d
        {currentPlayer.diceType} →{" "}
        <span className="font-semibold">{diceValue ?? "-"}</span>
      </div>
    </div>
  );
};

export default ClickBoard;
