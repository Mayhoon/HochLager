var dt;

var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

//scene
generateStorage();

var light = new THREE.PointLight( 0xff0000, 1, 100 );
light.position.set( 60, 50, 50 );
scene.add( light );

var arrow = new THREE.ArrowHelper(
        // first argument is the direction
        new THREE.Vector3(1, 0, 0).normalize(),
        // second argument is the orgin
        new THREE.Vector3(0, 20, 0),
        // length
        20.2,
        // color
        0x00ff00);
scene.add(arrow)

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
	//ground
	var texture = new THREE.TextureLoader().load(localhost+'assets/Images/metallic2.jpg',); 
	var geometry = new THREE.BoxGeometry( storageWidth * storageUnitSize, 0.1, storageWidth * storageUnitSize );
	var material = new THREE.MeshBasicMaterial( { map:this.texture } );
	var t = new THREE.Mesh( geometry, material );
	t.position.set(0,-10,0);
	scene.add(t);
	
	//Units
	for(var width = 0; width < storageWidth ; width++){
		for(var depth = 0; depth < storageDepth ; depth++){
			for(var height = 0; height < storageHeight; height++){
				//*4 lets gaps inbetween for pipes
				storage.push(new StorageUnit(width*4, height*3, depth*4));
			}
		}
	}

	//Pipes
	for(var width = -0.5; width < storageWidth; width++){
		for(var depth = -0.5; depth < storageDepth; depth++){
			pipes.push(new Pipe(width*4, (storageHeight*storageUnitSize)/2 - storageUnitSize, depth*4));
		}
	}


	for(let i in storage){
		scene.add(storage[i].cube);
	}

	for(let p in pipes){
		scene.add(pipes[p].pipe);
	}

}