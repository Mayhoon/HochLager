const clock = new THREE.Clock();
var dt;


//scene
var cube = createCube();
var pipe = createPipe();
//scene.add( cube );
scene.add( pipe );


//animate
var animate = function () {
	requestAnimationFrame( animate );
  	dt = clock.getDelta();

  	pipe.rotation.x += 0.001;
  	pipe.rotation.y += 0.001;

	renderer.render( scene, cam );
};

animate();