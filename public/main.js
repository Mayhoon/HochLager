const clock = new THREE.Clock();
var dt;


//scene
var cube = createCube();
scene.add( cube );


//animate
var animate = function () {
	requestAnimationFrame( animate );
  	dt = clock.getDelta();

  	cube.rotation.x += 0.001;
  	cube.rotation.y += 0.001;

	renderer.render( scene, cam );
};

animate();