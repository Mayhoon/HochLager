class Pipe {
	constructor(x,y,z){
		console.log("New Pipe");
		
		this.texture = new THREE.TextureLoader().load(localhost+'assets/Images/metallic2.jpg',); 
		this.geometry = new THREE.BoxGeometry( storagePipeThickness, storagePipeHeight, storagePipeThickness );
		this.material = new THREE.MeshBasicMaterial( { map:this.texture } );
		this.pipe = new THREE.Mesh( this.geometry, this.material );
		this.pipe.position.set(x,y,z);
	}
}