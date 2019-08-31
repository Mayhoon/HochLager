var dt;
var robot;
var intersects;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var stats = new Stats();

stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

//scene
generateStorage();
addLight();
addHelperArrows();

//animate
var animate = function () {
	raycaster.setFromCamera( mouse, cam );	
	stats.begin();
	dt = clock.getDelta();
	scene.rotation.y += 0.2 * dt;	

	renderer.render( scene, cam );
	requestAnimationFrame( animate );

	stats.end();
};
animate();

function generateStorage(){
	robot = new Robot(0, -1, 0);
	scene.add(robot.cube);
	//generateStorageGround();
	generateStorageUnits();
	generateStoragePipes();
}

function addHelperArrows(){
	var xArrow = new THREE.ArrowHelper( new THREE.Vector3(1, 0, 0).normalize(), new THREE.Vector3(0, 0, 0), 20.2, 0x00ff00);
	var yArrow = new THREE.ArrowHelper( new THREE.Vector3(0, 1, 0).normalize(), new THREE.Vector3(0, 0, 0), 20.2, 0x00ff00);
	var zArrow = new THREE.ArrowHelper( new THREE.Vector3(0, 0, 1).normalize(), new THREE.Vector3(0, 0, 0), 20.2, 0x00ff00);
	scene.add(xArrow, yArrow, zArrow);
}

function addLight(){
	var light = new THREE.PointLight( 0xff0000, 1, 100 );
	light.position.set( 60, 50, 50 );
	light.castShadow = true;
	scene.add( light );
}

function generateStorageGround () {
	var texture = new THREE.TextureLoader().load(localhost+'assets/Images/metallic3.jpg',); 
	var geometry = new THREE.BoxGeometry( storageWidth * storageUnitSize, 0.3, storageWidth * storageUnitSize );
	var material = new THREE.MeshBasicMaterial( { map: texture } );
	var t = new THREE.Mesh( geometry, material );
	t.position.set(0,-4,0);
	scene.add(t);
}

function generateStorageUnits(){
	for(var width = 0; width < storageWidth ; width++){
		for(var depth = 0; depth < storageDepth ; depth++){
			for(var height = 0; height < storageHeight; height++){
				storage.push(new StorageUnit(width, height, depth));
			}
		}
	}	
	for(let i in storage){
		scene.add(storage[i].cube); 	
	}
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

