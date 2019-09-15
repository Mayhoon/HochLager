class Robot {
	constructor(x,y,z){
		this.orders = [];
		this.currentUnit;
		this.intersects;

		this.xReached = false;
		this.yReached = false;
		this.zReached = false;

		this.texture = new THREE.TextureLoader().load( localhost+'assets/Images/robot.jpg' );
		this.geometry = new THREE.BoxGeometry( robotWidth, robotHeight, robotDepth );
		//this.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -storageUnitSize / 2, 0) );	// changes the center 
		this.material = new THREE.MeshBasicMaterial( { map: this.texture } );
		this.cube = new THREE.Mesh( this.geometry, this.material );
		this.cube.position.set(x * storageUnitSize,  y - spaceForRobot - storageUnitSize/2 + robotHeight/2, z * storageUnitSize);
	}

	work(){
		if(this.orders.length != 0){
			this.moveTo(this.orders[this.orders.length-1]);
		}
	}

	issueOrder(x,y,z){
		console.log("New stock order taken. Order issued for unit located at: " + x,y,z);
		this.orders.push(new Order(x,y,z));

		//Stores position of Robot to estimate distance to target
		this.x = this.cube.position.x;
		this.y = this.cube.position.y;
		this.z = this.cube.position.z;
	}

	moveTo(order){		
		if(!this.xReached){
			this.moveToX(order.position.x);

		}else if(!this.zReached && this.xReached){
			this.moveToZ(order.position.z);
		}
		
		else if(this.orders.length != 0){
			this.retrieveUnit(order.position.y);
		}		
	}

	moveToX(orderPosX){
		if(this.x < orderPosX && this.cube.position.x < orderPosX){
			this.cube.position.x += robotSpeedX * dt;
		}else if(this.x > orderPosX && this.cube.position.x > orderPosX){
			this.cube.position.x -= robotSpeedX * dt;
		}else {
			this.xReached = true;
		}
	}

	moveToZ(orderPosZ){
		if(this.z < orderPosZ && this.cube.position.z < orderPosZ){
			this.cube.position.z += robotSpeedZ * dt;
		}else if(this.z > orderPosZ && this.cube.position.z > orderPosZ){
			this.cube.position.z -= robotSpeedZ * dt;
		}else {
			this.zReached = true;
		}
	}

	retrieveUnit(){
		this.cube.position.x = Math.round(this.cube.position.x);
		this.cube.position.z = Math.round(this.cube.position.z);

	//	try{
			if(this.intersects == undefined){
				var direction =  new THREE.Vector3(0, 50, 0); direction.normalize();
				var origin = new THREE.Vector3( this.cube.position.x, this.cube.position.y, this.cube.position.z);
				var ray = new THREE.Raycaster();
				ray.set(origin,direction);
				this.intersects = ray.intersectObjects(scene.children,true);
			}

			if(this.intersects[0].object.callback("robot").moving){
					this.intersects[0].object.callback("robot").moveDownTo(this.cube.position.y + robotHeight);
					this.currentUnit = this.intersects[0].object.callback("robot");
			}else if(! this.intersects[0].object.callback("robot").moving){
				this.finishOrder();
			}
					
	/*	}catch(e){
			console.log("This colummn is empty");
		}*/
	}

	finishOrder(){
		console.log("Finished first order entry. Proceeding to work on the next");
		this.orders = [];
		this.xReached = false;
		this.zReached = false;
		this.intersects = undefined;
		this.currentUnit = undefined;
		console.log();
	}
}