class Pipe {
	constructor(x,y,z, pointing){		

		if(pointing == "vertical"){
			this.texture = new THREE.TextureLoader().load(localhost+'public/assets/Images/metallic3.jpg',); 
			this.geometry = new THREE.BoxGeometry( pipeThickness, pipeHeight, pipeThickness );
			// changes the center of the object down by one unit
			this.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -storageUnitSize / 2, 0) );	
			this.material = new THREE.MeshBasicMaterial( { map:this.texture } );
			this.pipe = new THREE.Mesh( this.geometry, this.material );
			this.pipe.position.set(x,y,z);

		}else if (pointing == "horizontal"){
			this.texture = new THREE.TextureLoader().load(localhost+'public/assets/Images/metallic3.jpg',); 
			this.geometry = new THREE.BoxGeometry( storageWidthAbsolute, pipeThickness-0.01, pipeThickness-0.01); //0.01 offset to avoid clipping
			this.material = new THREE.MeshBasicMaterial( { map:this.texture } );
			this.pipe = new THREE.Mesh( this.geometry, this.material );
			this.pipe.position.set(x, y, z);

			//this.pipe.position.set(4, -storageUnitSize/2, -2);
		}

		else if (pointing == "horizontal/rotated"){
			
			console.log("e");
			this.texture = new THREE.TextureLoader().load(localhost+'public/assets/Images/metallic3.jpg',); 
			this.geometry = new THREE.BoxGeometry( pipeThickness-0.01, pipeThickness-0.01, storageDepthAbsolute); //0.01 offset to avoid clipping
			this.material = new THREE.MeshBasicMaterial( { map:this.texture } );
			this.pipe = new THREE.Mesh( this.geometry, this.material );
			this.pipe.position.set(x, y, z);

			//this.pipe.position.set(4, -storageUnitSize/2, -2);
		}
	}
}