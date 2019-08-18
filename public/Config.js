//Server
const localhost = "http://localhost:3000/";

//Time
const clock = new THREE.Clock();

//Storage
const storage = [];

const storageWidth = 4;
const storageDepth = 4;
const storageHeight = 2;
const storageCapacityMax = storageWidth + storageHeight + storageDepth;
console.log("Cpacity: " + storageCapacityMax);

//must be 3 : 1 ratio
const storageUnitSize = 3;
const storagePipeSize = storageUnitSize / 3;


