//Server
const localhost = "http://localhost:3000/";

//Time
const clock = new THREE.Clock();

//Storage
const storage = [];
const pipes = [];

const storageWidth = 4;
const storageDepth = 4;
const storageHeight = 2;
const storageCapacityMax = storageWidth + storageHeight + storageDepth;
console.log("Capacity: " + storageCapacityMax);

//must be 3 : 1 ratio
const storageUnitSize = 3;
const storagePipeHeight = storageUnitSize * storageUnitSize;
const storagePipeThickness = storageUnitSize / 3;


