const grid = [];

const cols = 13;
const rows = 13;
const spacing = 2;

let id = 0;

for (let z = 0; z < rows; z++) {
  for (let x = 0; x < cols; x++) {
    grid.push({
      id: id++,
      pos: [x * spacing, 0, z * spacing],
      gridX: x,
      gridZ: z,
      type: "empty",
    });
  }
}
export default grid;
