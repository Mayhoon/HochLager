//Server
const localhost = "http://localhost:3000/";

//Time
const clock = new THREE.Clock();

//Storage
const storage = [];
const pipes = [];

const storageWidth = 4;
const storageDepth = 4;
const storageHeight = 3;
const storageMaxCapacity = storageWidth + storageHeight + storageDepth;

//must be 3 : 1 ratio
const storageUnitSize = 3;
const storagePipeThickness = storageUnitSize / 3;

const robotSpeedX = 1;
const robotSpeedY = 1;
const robotSpeedZ = 1;

const robotWidth = 3 + 0.2;
const robotHeight = 0.2;
const robotDepth = 3 + 0.2;

const spaceForRobot = 1 * storageUnitSize;
const storagePipeHeight = (storageUnitSize * storageHeight) + spaceForRobot;
const pipeXPosInterval = storageUnitSize+1;
const pipeZPosInterval = storageUnitSize+1;
const pipeYPos = storagePipeHeight / 2 - spaceForRobot;
