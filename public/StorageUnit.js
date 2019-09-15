class StorageUnit{
	constructor( x,y,z,id ){	
		this.id = id;
		this.moving = true;

		this.texture = new THREE.TextureLoader().load( localhost+'assets/Images/crate0/crate0_diffuse.png' );
		this.geometry = new THREE.BoxGeometry( storageUnitSize, storageUnitSize, storageUnitSize );
		this.material = new THREE.MeshBasicMaterial( { map: this.texture } );

		this.cube = new THREE.Mesh( this.geometry, this.material );
		this.cube.position.set(x * pipeXPosInterval, y * storageUnitSize, z * pipeXPosInterval);
		
		//Shader?
		this.material.castShadow = true;
		this.material.receiveShadow  = true;

		//when being clicked
		this.cube.callback = (( event ) => {
			switch(event){
				case 'order': 
					robot.issueOrder(this.cube.position.x, this.cube.position.y, this.cube.position.z);
				break;

				case 'robot':
					return this;
				break;
			}
		}); 
	}

	moveDownTo(y){
		if(this.cube.position.y >= y + storageUnitSize/2){
			this.cube.position.y += y * dt * 2; 
			this.moving = true;
		}else {
			this.moving = false;
		}
	}
}