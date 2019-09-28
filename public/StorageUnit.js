class StorageUnit{
	constructor( x,y,z,id ){	
		this.id = id;
		this.moving = true;

		const textureLoader = new THREE.TextureLoader();

		this.texture = textureLoader.load(localhost+'assets/Images/crate0/crate0_diffuse.png');
		this.texture.encoding = THREE.sRGBEncoding;
		this.texture.anisotropy = 16;
		this.material = new THREE.MeshStandardMaterial ( {map: this.texture, flatShading: true} );
		this.material.castShadow = true;
		this.material.receiveShadow = true;
	
		this.geometry = new THREE.BoxGeometry( storageUnitSize, storageUnitSize, storageUnitSize );
		//this.geometry = new THREE.SphereGeometry( 2, 6, 6 );
		this.cube = new THREE.Mesh( this.geometry, this.material );
		this.cube.position.set(x * pipeXPosInterval, y * storageUnitSize, z * pipeXPosInterval);

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