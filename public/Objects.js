function createCube() {
	/*var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	var cube = new THREE.Mesh( geometry, material );
	return cube;
	*/

	var texture = new THREE.TextureLoader().load( 'http://localhost:3000/assets/Images/crate0/crate0_diffuse.png' );
	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { map: texture } );
	var cube = new THREE.Mesh( geometry, material );
	return cube;

	
}

function createPipe(){

}