import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";

const Player = () => {
  const { scene } = useGLTF("/models/itsik.glb");
  const ref = useRef();
  const TILE_SIZE = 1;

  const [keys, setKeys] = useState({});
  const [target, setTarget] = useState([0, 0, 0]);
  const [moving, setMoving] = useState(false); 

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

  useFrame(() => {
    if (!ref.current) return;

    const speed = 0.1;

    const [tx, ty, tz] = target;
    const pos = ref.current.position;

    // Movimento suave até o target
    const dx = tx - pos.x;
    const dz = tz - pos.z;

    if (Math.abs(dx) > 0.01 || Math.abs(dz) > 0.01) {
      pos.x += dx * 0.2;
      pos.z += dz * 0.2;
    } else {
      setMoving(false);
    }

    // Só aceita input se não estiver andando
    if (!moving) {
      const roundToGrid = (value) => Math.round(value / TILE_SIZE) * TILE_SIZE;
      if (keys["w"]) {
        setTarget([pos.x, 0, roundToGrid(pos.z - TILE_SIZE)]);
        ref.current.rotation.y = Math.PI; // frente
        setMoving(true);
      }
      if (keys["s"]) {
        setTarget([pos.x, 0, roundToGrid(pos.z + TILE_SIZE)]);
        ref.current.rotation.y = 0;
        setMoving(true);
      }
      if (keys["a"]) {
        setTarget([roundToGrid(pos.x - TILE_SIZE), 0, pos.z]);
        ref.current.rotation.y = Math.PI / 2;
        setMoving(true);
      }
      if (keys["d"]) {
        setTarget([roundToGrid(pos.x + TILE_SIZE), 0, pos.z]);
        ref.current.rotation.y = -Math.PI / 2;
        setMoving(true);
      }
    }
  });

 return (
  <group ref={ref} position={[0.5, 0.5, 1]}>
    <primitive object={scene} scale={1} />
  </group>
);
}

export default Player;