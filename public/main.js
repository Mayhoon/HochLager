const clock = new THREE.Clock();
var dt;

//	<script type="js/libs/three.js"></script>
function draw(){
}

//cube
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );

//line
var material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
var geometry = new THREE.Geometry();
geometry.vertices.push(new THREE.Vector3( -5, 0, 0) );
geometry.vertices.push(new THREE.Vector3( 0, 3, 0) );
geometry.vertices.push(new THREE.Vector3( 5, 0, 0) );
geometry.vertices.push(new THREE.Vector3( 5, 0, 0) );
geometry.vertices.push(new THREE.Vector3( 0, -3, 0) );
geometry.vertices.push(new THREE.Vector3( -5, 0, 0) );

var t_line = new THREE.Line( geometry, material );

//scene
scene.add( cube );
scene.add( t_line );

loadModel("tre2");


//animate
var animate = function () {
	requestAnimationFrame( animate );
  	dt = clock.getDelta();

  	cube.rotation.x += 0.001 * dt;
  	cube.rotation.y += 0.001 * dt;

  	gltfModel.rotation.y += 0.001;
  	gltfModel.rotation.x = 0.5;
  	gltfModel.position.y = -3;

		mixer.update(dt);


	renderer.render( scene, cam );
};

animate();