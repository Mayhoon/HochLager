class Order {
    constructor(x,y,z){
        this.location = new THREE.Vector3(x,y,z);
    }

    getLocation(){
         return this.location;
    }

}