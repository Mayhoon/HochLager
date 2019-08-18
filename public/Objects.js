function createStorageUnit(x,y,z) {
	/* var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	var cube = new THREE.Mesh( geometry, material );
	return cube;
	*/
	
	var texture = new THREE.TextureLoader().load( 'http://localhost:3000/assets/Images/crate0/crate0_diffuse.png' );
	var geometry = new THREE.BoxGeometry( storageUnitSize, storageUnitSize, storageUnitSize );
	var material = new THREE.MeshBasicMaterial( { map: texture } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.set(x,y,z);
	return cube;
}

function createPipe(x,y,z){ 
	/* var texture = new THREE.TextureLoader().load('http://localhost:3000/assets/Images/mam.png' ); 
	var geometry = new THREE.BoxGeometry( 5, 32, 32 ); 
	var material = new THREE.MeshBasicMaterial({ map: texture } );
	var cube = new THREE.Mesh( geometry, material );
	return cube; 
	*/

	var texture = new THREE.TextureLoader().load(localhost+'assets/Images/metallic2.jpg',); 
	var geometry = new THREE.BoxGeometry( 1, 9, 1 );
	var material = new THREE.MeshBasicMaterial( { map:texture } );
	var pipe = new THREE.Mesh( geometry, material );
	pipe.position.set(x,y,z);
	return pipe;
}

function createCrossPipe(x,y,z, rotX, rotY, rotZ){ 
	/* var texture = new THREE.TextureLoader().load('http://localhost:3000/assets/Images/mam.png' ); 
	var geometry = new THREE.BoxGeometry( 5, 32, 32 ); 
	var material = new THREE.MeshBasicMaterial({ map: texture } );
	var cube = new THREE.Mesh( geometry, material );
	return cube; 
	*/

	var texture = new THREE.TextureLoader().load(localhost+'assets/Images/mam.jpg',); 
	var geometry = new THREE.BoxGeometry( 3, 12, 3 );
	var material = new THREE.MeshBasicMaterial( { map:texture } );
	var pipe = new THREE.Mesh( geometry, material );
	pipe.position.set(x,y,z);
	pipe.rotation.set(rotX, rotY, rotZ);
	return pipe;
}