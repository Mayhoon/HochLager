class StorageUnit{
	constructor(x,y,z){	
		this.pos = new THREE.Vector3(x * pipeXPosInterval,y * storageUnitSize,z * pipeXPosInterval);
		this.texture = new THREE.TextureLoader().load( localhost+'assets/Images/crate0/crate0_diffuse.png' );
		this.geometry = new THREE.BoxGeometry( storageUnitSize, storageUnitSize, storageUnitSize );
		this.material = new THREE.MeshBasicMaterial( { map: this.texture } );
		this.cube = new THREE.Mesh( this.geometry, this.material );

		//when being clicked
		this.cube.callback = (() => {
			console.log(this.pos.x); 		
			console.log(this.pos.y);
			console.log(this.pos.z); 
			robot.issueOrder(this.pos.x, this.pos.y, this.pos.z);
		}); 	
	
		this.cube.position.set(this.pos.x, this.pos.y, this.pos.z);
	}
}