var gltfModel;
var mixer;

//Load Model
function loadModel(name){
const gltfLoader = new THREE.GLTFLoader();
const url = 'http://localhost:3000/public/assets/Animations/'+name+'.glb';
gltfLoader.load(url, function ( gltf ) {

		gltfModel = gltf.scene;
		console.log("Animations: " + gltf.animations);

		gltfModel.scale.set(2, 2, 2);
		var model = gltf.scene; // THREE.Scene
		gltf.scenes; // Array<THREE.Scene>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

		mixer = new THREE.AnimationMixer(model);
		var clip1 = gltf.animations[0];	
		var act = mixer.clipAction(clip1);
		act.play();

		scene.add( gltfModel );
	},
	// called while loading is progressing
	function ( xhr ) {
		console.log( " Model " + name + " " + ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {
		console.log( 'An error happened' );
	}
);
}
