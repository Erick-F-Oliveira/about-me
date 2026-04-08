import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { path } from "../data/path";
import CameraFollow from "./CameraFollow";

const Player = () => {
  const { scene } = useGLTF("/models/itsik.glb");
  const ref = useRef();

  const [keys, setKeys] = useState({});
  const [index, setIndex] = useState(0);
  const [lastTile, setLastTile] = useState(null);
  const handleTileEvent = (tileIndex) => {
    const tile = path[tileIndex];
    const find = Math.random() < 0.5; // 50% de chance de encontrar algo

    switch (tile.type) {
      case "loot":
        if (find === true) {
          console.log("🎁 ganhou um item!");
        } else {
          console.log("nada aconteceu");
        }
        break;

      case "enemy":
        console.log("👾 inimigo apareceu!");
        break;
      case "end":
        console.log("Fim da trilha");
        break;
      case "event":
        console.log("📜 evento especial!");
        break;

      default:
        console.log("...nada aconteceu");
    }
  };
  useEffect(() => {
    if (lastTile !== index) {
      handleTileEvent(index);
      setLastTile(index);
    }
  }, [lastTile, index]);

  useEffect(() => {
    const down = (e) => setKeys((k) => ({ ...k, [e.key]: true }));
    const up = (e) => setKeys((k) => ({ ...k, [e.key]: false }));

    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);

    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, []);

  useEffect(() => {
    if (keys["d"] || (keys["ArrowRight"] && index < path.length - 1)) {
      setIndex((i) => i + 1);
    }
    if (keys["a"] || (keys["ArrowLeft"] && index > 0)) {
      setIndex((i) => i - 1);
    }
  }, [keys]);

  useFrame(() => {
    if (!ref.current) return;

    const [tx, , tz] = path[index].pos;
    const pos = ref.current.position;

    const dx = tx - pos.x;
    const dz = tz - pos.z;

    pos.x += dx * 0.2;
    pos.z += dz * 0.2;

    // rotação
    if (dx > 0.01) ref.current.rotation.y = -Math.PI * 2;
    if (dx < -0.01) ref.current.rotation.y = Math.PI;
  });

  return (
    <group ref={ref}>
      <primitive object={scene} scale={1} position={[0, 0.5, 0]} />

      <CameraFollow target={ref} />
    </group>
  );
};
export default Player;
