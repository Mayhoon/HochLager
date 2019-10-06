class Storage {
    constructor(){
        this.storage = [];

        this.pipes = [];
        this.generateStorageUnits();
	    this.generateStoragePipes();
	    this.generateStorageGround();
    }

    removeUnit(){
        try{
            var raycaster = new THREE.Raycaster();
            raycaster.setFromCamera( mouse, cam );
            var intersects = raycaster.intersectObjects( scene.children );

            var unit  =  intersects[0].object.callback("robot");
            var pos = unit.cube.position;
            console.log(unit.cube.position);
            console.log("Unit with ID: " + unit.id + " at: " + pos + " removed");

            scene.remove( intersects[0].object.callback("robot").cube );
    
            var obj =  intersects[0].object.callback("robot").id;
            this.storage[ obj-1  ] = null;	
            
        }catch(e){
            
        }
    }

    generateStorageUnits(){
		var id = 1;
		for(var width = 0; width < storageWidth ; width++){
			for(var depth = 0; depth < storageDepth ; depth++){
				for(var height = 0; height < storageHeight; height++){
					this.storage.push(new StorageUnit(width, height, depth, id));
					id++;
				}
			}
		}	
		for(let i in this.storage){
			scene.add(this.storage[i].cube); 	
		}
    }

    
    generateStoragePipes(){
	    var index = 0;

    	//Vertical
	    for(var width = -0.5; width < storageWidth; width++){
	    	for(var depth = -0.5; depth < storageDepth; depth++){
		    	this.pipes.push(new Pipe(
                    width*pipeXPosInterval,
                    pipeYPos, depth*pipeZPosInterval, 
                    "vertical"));
		    	scene.add(this.pipes[index].pipe);
		    	index++;
	    	}
        }	
        
	    //Horizontal    
	    for(var height = -storageUnitSize/2; height < storageHeight*storageUnitSize; height+=storageUnitSize){
            for(var depth = -storageUnitSize/2-pipeThickness/2; depth < (storageDepth)*storageUnitSize + (pipeThickness*storageDepth); depth +=storageUnitSize+pipeThickness){
                this.pipes.push(new Pipe(
                    storageWidthAbsolute/2-storageUnitSize+pipeThickness/2,
                    height, 
                    depth, 
                    "horizontal"));
                scene.add(this.pipes[index].pipe);
                index++;
            }

            for(var width = -storageUnitSize/2-pipeThickness/2; width < (storageWidth)*storageUnitSize + (pipeThickness*storageWidth); width +=storageUnitSize+pipeThickness){
                this.pipes.push(new Pipe(
                    width,
                    height, 
                    storageDepthAbsolute/2-storageUnitSize+pipeThickness/2,
                    "horizontal/rotated"));
                scene.add(this.pipes[index].pipe);
                index++
            }
       }
    }

    generateStorageGround () {
        var texture = new THREE.TextureLoader().load(localhost+'assets/Images/metallic5.jpg',); 
        var geometry = new THREE.BoxGeometry( 
            storageWidthAbsolute, 
            storageGroundThickness, 
            storageDepthAbsolute);
        var material = new THREE.MeshStandardMaterial( { map: texture } );
    
        geometry.applyMatrix( new THREE.Matrix4().makeTranslation(0, -storageUnitSize/2, 0) );	
    
        var t = new THREE.Mesh( geometry, material );
        t.position.set(
            storageWidthAbsolute/2- (storageUnitSize/2+pipeThickness), 
            storageGroundPositionY, 
            storageDepthAbsolute/2 - (storageUnitSize/2+pipeThickness));
        scene.add(t);
    }

    getStorage(){
        return this.storage;
    }

    getUnit(index){
       return  this.storage[index];
    }

    push(obj){
        console.log("stuff pushed");
        this.storage.push(obj);
    }
}