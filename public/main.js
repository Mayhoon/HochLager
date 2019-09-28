var dt;
var robot;
var stats = new Stats();
var storage = new Storage();

stats.showPanel( 1 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

//scene
init();
//addHelperArrows();

//animate
var animate = function () {
	stats.begin();
	dt = clock.getDelta();

	//raycaster.setFromCamera( mouse, cam );
	controls.update();
	robot.work();	

	renderer.render( scene, cam );
	requestAnimationFrame( animate );

	stats.end();
};
animate();

function init(){
	robot = new Robot(0, 0, 0);	
	scene.add(robot.cube);
}

function addHelperArrows(){
	var xArrow = new THREE.ArrowHelper( new THREE.Vector3(1, 0, 0).normalize(), new THREE.Vector3(0, 0, 0), 20.2, 0x00ff00);
	var yArrow = new THREE.ArrowHelper( new THREE.Vector3(0, 1, 0).normalize(), new THREE.Vector3(0, 0, 0), 20.2, 0x00ff00);
	var zArrow = new THREE.ArrowHelper( new THREE.Vector3(0, 0, 1).normalize(), new THREE.Vector3(0, 0, 0), 20.2, 0x00ff00);
	scene.add(xArrow, yArrow, zArrow);
}

function generateStorageGround () {
	var texture = new THREE.TextureLoader().load(localhost+'assets/Images/metallic5.jpg',); 
	var geometry = new THREE.BoxGeometry( 
		storageWidth * storageUnitSize + ((storageWidth+1) * storagePipeThickness), 
		storageGroundThickness, 
		storageDepth * storageUnitSize + ((storageDepth+1) * storagePipeThickness));
	var material = new THREE.MeshBasicMaterial( { map: texture } );

	geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -storageUnitSize/2, 0) );	

	var t = new THREE.Mesh( geometry, material );
	t.position.set((
		storageWidth * storageUnitSize)/2 - storagePipeThickness/2, 
		storageGroundPositionY, 
		(storageDepth * storageUnitSize)/2 - storagePipeThickness/2);
	scene.add(t);
}

function generateStoragePipes(){
	for(var width = -0.5; width < storageWidth; width++){
		for(var depth = -0.5; depth < storageDepth; depth++){
			pipes.push(new Pipe(width*pipeXPosInterval, pipeYPos, depth*pipeZPosInterval));
		}
	}
	for(let p in pipes){
		scene.add(pipes[p].pipe);
	}
}

