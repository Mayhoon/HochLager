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
	try{
		intersects = raycaster.intersectObjects( scene.children );
		intersects[0].object.callback();
	}catch(e){
		
	}
}

window.addEventListener('resize' , () =>{
	renderer.setSize( window.innerWidth, window.innerHeight );
	cam.aspect = window.innerWidth / window.innerHeight;
	cam.updateProjectionMatrix();
})