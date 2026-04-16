import { useFrame, useThree } from "@react-three/fiber";

const CameraFollow = ({ target }) => {
  const { camera, controls } = useThree();

  useFrame(() => {
    if (!target.current || !controls) return;

    const playerPos = target.current.position;

    const desiredPosition = {
      x: playerPos.x + 0,
      y: playerPos.y + 5,
      z: playerPos.z + 7,
    };

    // move câmera suavemente
    camera.position.lerp(desiredPosition, 0.1);

    controls.target.lerp(playerPos, 0.1);
    controls.update();
  });

  return null;
};

export default CameraFollow;
