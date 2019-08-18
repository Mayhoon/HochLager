var dt;

var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

//scene
var obj = [];
generateStorage();
/*
obj.push(createPipe(5,0,1));
obj.push(createPipe(1,0,5));
obj.push(createPipe(5,0,5));
obj.push(createPipe(1,0,1));

//storage container
obj.push(createStorageUnit(3,0,3));
*/

//animate
var animate = function () {
	stats.begin();
	dt = clock.getDelta();

	scene.rotation.y += 0.2 * dt;	
	renderer.render( scene, cam );

	
	requestAnimationFrame( animate );
	stats.end();
};

animate();


function generateStorage(){
	for(var width = 0; width < storageWidth ; width++){
		for(var depth = 0; depth < storageDepth ; depth++){
			for(var height = 0; height < storageHeight; height++){
				obj.push(new StorageUnit(width*4, height*3, depth*4));
			}
		}
	}

	for(let i in obj){
		scene.add(obj[i].cube);
	}

}