class StorageUnit{
	constructor(x,y,z){		
		this.x = 20;
		this.someText = "Hey"
		this.goods = ["Test"];

		this.texture = new THREE.TextureLoader().load( localhost+'assets/Images/crate0/crate0_diffuse.png' );
		this.geometry = new THREE.BoxGeometry( storageUnitSize, storageUnitSize, storageUnitSize );
		this.material = new THREE.MeshBasicMaterial( { map: this.texture } );
		this.cube = new THREE.Mesh( this.geometry, this.material );

		this.cube.callback = (() => {
			console.log("This does work");
			console.log(this.x); 		// undefined
			console.log(this.someText); // undefined
			console.log(this.goods[0]); // returns nothing
		}); 	//receives clicks
	
	
		this.cube.position.set(x,y,z);
	}
}