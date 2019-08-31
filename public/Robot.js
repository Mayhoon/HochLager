class Robot {
	constructor(x,y,z){
		this.orders = [];

		this.pos = new THREE.Vector3(x * storageUnitSize,y * robotWidth,z * storageUnitSize);
		this.texture = new THREE.TextureLoader().load( localhost+'assets/Images/robot.jpg' );
		this.geometry = new THREE.BoxGeometry( robotWidth, robotHeight, robotDepth );
		this.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -storageUnitSize / 2, 0) );	// changes the center 
		this.material = new THREE.MeshBasicMaterial( { map: this.texture } );
		this.cube = new THREE.Mesh( this.geometry, this.material );

		//The cube 
		this.cube.position.set(this.pos.x, this.pos.y , this.pos.y);
	}

	issueOrder(x,y,z){
		console.log("New stock order taken. Order issued for unit located at: " + x,y,z);
		this.orders.push(new Order(x,y,z));
	}

	moveTo(orderLocation){
		var [xReached,yReached,zReached] = [false,false,false];
		console.log("X POS: " + this.cube.position.x);
		console.log("Y POS: " + this.cube.position.y);
		console.log("Z POS: " + this.cube.position.z);
		
		if(this.cube.position.x < orderLocation.x){
			this.cube.position.x += robotSpeedX * dt;

		}else if(this.cube.position.x > orderLocation.x){
			this.cube.position.x -= robotSpeedX * dt;

		}else if(this.cube.position.z != orderLocation.z){
			this.cube.position.z += robotSpeedZ * dt;

		}else if(this.cube.position.y != orderLocation.y){
			this.cube.position.y += robotSpeedY * dt;

		}else if(this.orders.length != 0){
			console.log("Finished first order entry. Proceeding to work on the next");
			this.orders[0] = null;
		}
	}

	work(){
		if(this.orders.length != 0){
			this.moveTo(this.orders[this.orders.length-1].getLocation());
		}
	}
}