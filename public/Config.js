//Server
const localhost = document.location.href;

var dt;
var robot;

//Time
const clock = new THREE.Clock();

const eventRightMouseButton = 3;
const eventMiddleMouseButton = 2;
const eventLeftMouseButton = 1;

const storageWidth = 10;
const storageDepth = 17;
const storageHeight = 5;
const storageMaxCapacity = storageWidth + storageHeight + storageDepth;

//must be 3 : 1 ratio
const storageUnitSize = 3;
const storageUnitSides = 2; 

const robotWidth = storageUnitSize;
const robotHeight = 0.2;
const robotDepth = storageUnitSize;
const robotSpeedX = 1;
const robotSpeedY = 1;
const robotSpeedZ = 1;

const pipeThickness = storageUnitSize / 3;
const pipeAmountWidth = storageWidth + 1;
const pipeAmountAbsoluteWidth = pipeAmountWidth * pipeThickness;

const pipeAmountDepth = storageDepth + 1;
const pipeAmountAbsoluteDepth = pipeAmountDepth * pipeThickness;

const spaceForRobot = 1 * storageUnitSize + robotHeight + pipeThickness;
const storageGroundThickness = 0.7;
const storageGroundPositionY = -spaceForRobot - storageGroundThickness/2;

const pipeHeight = (storageUnitSize * storageHeight) + spaceForRobot;   //For vertical pipes only
const pipeXPosInterval = storageUnitSize+1;
const pipeZPosInterval = storageUnitSize+1;
const pipeYPos = pipeHeight / 2 - spaceForRobot;

const storageWidthAbsolute = storageWidth * storageUnitSize + pipeAmountAbsoluteWidth;
const storageHeightAbsolute = storageHeight * storageUnitSize;
const storageDepthAbsolute = storageDepth * storageUnitSize + pipeAmountAbsoluteDepth;

