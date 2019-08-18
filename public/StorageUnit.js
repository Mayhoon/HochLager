class StorageUnit{
	constructor(x,y,z){
		console.log("New Unit");

		this.texture = new THREE.TextureLoader().load( 'http://localhost:3000/assets/Images/crate0/crate0_diffuse.png' );
		this.geometry = new THREE.BoxGeometry( storageUnitSize, storageUnitSize, storageUnitSize );
		this.material = new THREE.MeshBasicMaterial( { map: this.texture } );
		this.cube = new THREE.Mesh( this.geometry, this.material );
		this.cube.position.set(x,y,z);
	}
}