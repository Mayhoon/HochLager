class StorageUnit{
	constructor( x,y,z ){	
		this.test = 10;
		this.pos = new THREE.Vector3(x * pipeXPosInterval,y * storageUnitSize,z * pipeXPosInterval);
		this.texture = new THREE.TextureLoader().load( localhost+'assets/Images/crate0/crate0_diffuse.png' );
		this.geometry = new THREE.BoxGeometry( storageUnitSize, storageUnitSize, storageUnitSize );
		this.material = new THREE.MeshBasicMaterial( { map: this.texture } );
		this.cube = new THREE.Mesh( this.geometry, this.material );
		
		//Shader?
		this.material.castShadow = true;
		this.material.receiveShadow  = true;

		//when being clicked
		this.cube.callback = (( event ) => {
			switch(event){
				case 'clicked': 
				robot.issueOrder(this.pos.x, this.pos.y, this.pos.z);
				break;

				case 'robot':
				return this;
				break;
			}
		}); 

		this.cube.position.set(this.pos.x, this.pos.y, this.pos.z);
	}
}