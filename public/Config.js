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
const storageMaxCapacity = storageWidth + storageHeight + storageDepth;

//must be 3 : 1 ratio
const storageUnitSize = 3;
const storagePipeThickness = storageUnitSize / 3;

const storagePipeHeight = storageUnitSize * storageUnitSize;
const pipeXPosInterval = storageUnitSize+1;
const pipeZPosInterval = storageUnitSize+1;
const pipeYPos = (storageHeight * storageUnitSize)/2 - storageUnitSize;

