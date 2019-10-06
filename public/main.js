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
	robot.run();	

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

