class Robot {
	constructor(x,y,z){
		this.pos = new THREE.Vector3(x * storageUnitSize,y * robotWidth,z * storageUnitSize);
		this.texture = new THREE.TextureLoader().load( localhost+'assets/Images/robot.jpg' );
		this.geometry = new THREE.BoxGeometry( robotWidth, robotHeight, robotDepth );
		this.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -storageUnitSize / 2, 0) );	// changes the center 
		this.material = new THREE.MeshBasicMaterial( { map: this.texture } );
		this.cube = new THREE.Mesh( this.geometry, this.material );

		//The cube 
		this.cube.position.set(this.pos.x, this.pos.y , this.pos.y);
	}
}