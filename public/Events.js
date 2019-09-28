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

//Mouse click detecion
function onMouseDown( event ){

	if(event.which == eventLeftMouseButton){
		try{
			var raycaster = new THREE.Raycaster();
			raycaster.setFromCamera( mouse, cam );
			var intersects = raycaster.intersectObjects( scene.children );
			if(intersects == 0){
				console.log("No object selected");
			}console.log(intersects[0].object.position);
		}catch(e){
		
		}
	}

	else if(event.which == eventMiddleMouseButton){
		try{
			var raycaster = new THREE.Raycaster();
			raycaster.setFromCamera( mouse, cam );
			var intersects = raycaster.intersectObjects( scene.children );
			console.log(intersects[0].object.callback("robot").cube.position.x);
			console.log(intersects[0].object.callback("robot").cube.position.y);
			console.log(intersects[0].object.callback("robot").cube.position.z);
			intersects[0].object.callback("order"); //Issue order 

		}catch(e){
			
		}
	}

	else if(event.which == eventRightMouseButton){
		storage.removeUnit();
	}
}

//Issue new order for Unit at given coordinates
document.querySelector('#sendRobotToCoordinates').addEventListener('click', issueOrderManually );
  function issueOrderManually () {
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