var mouse = new THREE.Vector2();
window.addEventListener( 'mousedown', onMouseDown, false );
window.addEventListener( 'mousemove', onMouseMove, false );

function onMouseMove( event ) {
	event.preventDefault();
	// calculate mouse position in normalized device coordinates	(-1 to +1) for both components
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
	cam.lookAt(mouse.x * 20, mouse.y * 20, 0);
}

function onMouseDown( event ){
	//Left mouse button
	if(event.which == 1){
		try{
			var raycaster = new THREE.Raycaster();
			raycaster.setFromCamera( mouse, cam );
			var intersects = raycaster.intersectObjects( scene.children );
			if(intersects != 0){
				console.log("Nothing happens");
			}
		}catch(e){
		
		}
	}
	//Middle mouse button
	else if(event.which == 2){
		try{
			var raycaster = new THREE.Raycaster();
			raycaster.setFromCamera( mouse, cam );
			var intersects = raycaster.intersectObjects( scene.children );
			intersects[0].object.callback("clicked").id;
		}catch(e){
		
		}
	}
	//Right mouse button
	else if(event.which == 3){
		try{
			var raycaster = new THREE.Raycaster();
			raycaster.setFromCamera( mouse, cam );
			var intersects = raycaster.intersectObjects( scene.children );
	
			console.log("ID: " + intersects[0].object.callback("robot").id);
			scene.remove( intersects[0].object.callback("robot").cube );

			var obj =  intersects[0].object.callback("robot").id;
			storage[ obj-1  ] = null;	
			
		}catch(e){
		
		}
	}
}

//Issue new order for the robot to take care of
document.querySelector('#sendRobotToCoordinates').addEventListener('click', berechne_BMI );
  function berechne_BMI () {
	var str = (document.getElementById("koordinaten")).value.toString();
	var array = str.split(" ", 3);
	robot.issueOrder(array[0], array[1], array[2]);
}

window.addEventListener( 'resize' , () =>{
	renderer.setSize( window.innerWidth, window.innerHeight );
	cam.aspect = window.innerWidth / window.innerHeight;
	cam.updateProjectionMatrix();
})

window.addEventListener( 'keydown' , () =>{
	console.log("Key" + event.key);
	var key = event.key;
	switch(event.key){
		//Rotation 	
		case " ":	
			if(controls.autoRotate == true){
				controls.autoRotate = false
			}else {
			controls.autoRotate = true;	
			}
		break;
	}
});