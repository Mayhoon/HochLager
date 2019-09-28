class Pipe {
	constructor(x,y,z){		
		this.texture = new THREE.TextureLoader().load(localhost+'public/assets/Images/metallic3.jpg',); 
		this.geometry = new THREE.BoxGeometry( storagePipeThickness, storagePipeHeight, storagePipeThickness );
		// changes the center of the object down by one unit
		this.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -storageUnitSize / 2, 0) );	
		this.material = new THREE.MeshBasicMaterial( { map:this.texture } );
		this.pipe = new THREE.Mesh( this.geometry, this.material );
		this.pipe.position.set(x,y,z);
	}
}