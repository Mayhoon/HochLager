//Server
const localhost = document.location.href;

//Time
const clock = new THREE.Clock();

//Storage
const pipes = [];

const eventRightMouseButton = 3;
const eventMiddleMouseButton = 2;
const eventLeftMouseButton = 1;

const storageWidth = 3;
const storageDepth = 3;
const storageHeight = 3;
const storageMaxCapacity = storageWidth + storageHeight + storageDepth;

//must be 3 : 1 ratio
const storageUnitSize = 3;
const storageUnitSides = 2; 

const robotWidth = 3 ;
const robotHeight = 0.2;
const robotDepth = 3;

const robotSpeedX = 1;
const robotSpeedY = 1;
const robotSpeedZ = 1;
const spaceForRobot = 1 * storageUnitSize + robotHeight;

const storageGroundThickness = 0.3;
const storageGroundPositionY = -spaceForRobot - storageGroundThickness/2;

const storagePipeThickness = storageUnitSize / 3;
const storagePipeHeight = (storageUnitSize * storageHeight) + spaceForRobot;
const pipeXPosInterval = storageUnitSize+1;
const pipeZPosInterval = storageUnitSize+1;
const pipeYPos = storagePipeHeight / 2 - spaceForRobot;
