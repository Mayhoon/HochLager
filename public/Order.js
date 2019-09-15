class Order {
    constructor(x,y,z){
        this.position = new THREE.Vector3(x,y,z);
        //console.log(x + " " + y + " " + z);
    }

    getLocation(){
         return this.position;
    }

}