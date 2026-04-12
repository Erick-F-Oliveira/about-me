const grid = [];
const startPositions = []; 

const cols = 13;
const rows = 13;
const spacing = 2;

let id = 0;

// Define os cantos
const corners = [
  { x: 0, z: 0, name: "top-left" },
  { x: cols-1, z: 0, name: "top-right" },
  { x: 0, z: rows-1, name: "bottom-left" },
  { x: cols-1, z: rows-1, name: "bottom-right" }
];

for (let z = 0; z < rows; z++) {
  for (let x = 0; x < cols; x++) {
    const isCorner = corners.some(corner => corner.x === x && corner.z === z);
    const type = isCorner ? "start" : "empty";
    
    const tile = {
      id: id++,
      position: [x * spacing, 0, z * spacing],
      gridX: x,
      gridZ: z,
      type: type,
    };
    
    grid.push(tile);
    
    // Adiciona ao array de posições iniciais
    if (isCorner) {
      startPositions.push(tile);
    }
  }
}

export default grid;
export { startPositions }; 