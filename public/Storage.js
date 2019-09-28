class Storage {
    constructor(){
        this.storage = [];

        this.generateStorageUnits();
	    generateStoragePipes();
	    generateStorageGround();
    }

    removeUnit(){
        try{
            var raycaster = new THREE.Raycaster();
            raycaster.setFromCamera( mouse, cam );
            var intersects = raycaster.intersectObjects( scene.children );

            var unit  =  intersects[0].object.callback("robot");
            console.log("Unit with ID: " + unit.id + " at: " +  unit.position+ " removed");

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