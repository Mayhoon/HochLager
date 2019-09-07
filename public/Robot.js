class Robot {
	constructor(x,y,z){
		this.orders = [];

		this.xReached = false;
		this.yReached = false;
		this.zReached = false;

		this.pos = new THREE.Vector3(x * storageUnitSize,y * storageUnitSize + robotHeight / 2,z * storageUnitSize);
		this.texture = new THREE.TextureLoader().load( localhost+'assets/Images/robot.jpg' );
		this.geometry = new THREE.BoxGeometry( robotWidth, robotHeight, robotDepth );
		this.geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -storageUnitSize / 2, 0) );	// changes the center 
		this.material = new THREE.MeshBasicMaterial( { map: this.texture } );
		this.cube = new THREE.Mesh( this.geometry, this.material );
		this.cube.position.set(this.pos.x, this.pos.y , this.pos.y);
	}

	issueOrder(x,y,z){
		console.log("New stock order taken. Order issued for unit located at: " + x,y,z);
		this.orders.push(new Order(x,y,z));

		//Stores position of Robot to estimate distance to target
		this.x = this.cube.position.x;
		this.y = this.cube.position.y;
		this.z = this.cube.position.z;
	}

	moveTo(orderLocation){
		/*
		console.log("X POS: " + this.cube.position.x);
		console.log("Y POS: " + this.cube.position.y);
		console.log("Z POS: " + this.cube.position.z);
		*/
		var targetX = orderLocation.x;
		var targetY = orderLocation.y;
		var targetZ = orderLocation.z;

		if(!this.xReached){
			if(this.x < targetX && this.cube.position.x < targetX){
				this.cube.position.x += robotSpeedX * dt;
			}else if(this.x > targetX && this.cube.position.x > targetX){
				this.cube.position.x -= robotSpeedX * dt;
			}else {
				this.xReached = true;
			}

		}else if(!this.zReached){
			if(this.z < targetZ && this.cube.position.z < targetZ){
				this.cube.position.z += robotSpeedZ * dt;
			}else if(this.z > targetZ && this.cube.position.z > targetZ){
				this.cube.position.z -= robotSpeedZ * dt;
			}else {
				this.zReached = true;
			}
		}/*else if(!this.yReached){
			if(this.y < targetY && this.cube.position.y < targetY){
				this.cube.position.y += robotSpeedY * dt;
			}else if(this.y > targetY && this.cube.position.y > targetY){
				this.cube.position.y -= robotSpeedY * dt;
			}else {
				this.yReached = true;
			}
		}*/
		else if(this.orders.length != 0){
			this.cube.position.x = Math.round(this.cube.position.x);
			this.cube.position.y = Math.round(this.cube.position.y)+robotHeight/2;
			this.cube.position.z = Math.round(this.cube.position.z);

			this.xReached = false;
			this.yReached = false;
			this.zReached = false;

			try{
				console.log("SCENE " + scene.children[0]);
				var direction =  new THREE.Vector3(0, 50, 0); direction.normalize();
				var origin = new THREE.Vector3( this.cube.position.x, this.cube.position.y, this.cube.position.z);
				var ray = new THREE.Raycaster();
				ray.set(origin,direction);
				var intersects = ray.intersectObjects(scene.children,true);
				console.log("moin" + intersects[0].object.callback("robot").test);
					
			}catch(e){
				console.log("This colummn is empty");
				console.log(e);
			}
		
			console.log("Finished first order entry. Proceeding to work on the next");
			this.orders.length = 0;
		}		
	}

	work(){
		if(this.orders.length != 0){
			this.moveTo(this.orders[this.orders.length-1].getLocation());
		}
	}
}