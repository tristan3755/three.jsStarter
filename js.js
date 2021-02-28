
import * as THREE from '../build/three.module.js';

		
			import { GLTFLoader } from './jsm/loaders/GLTFLoader.js';
		

			let camera, scene, renderer;

			init();
			render();

			function init() {
				const container = document.createElement( 'div' );
				document.body.appendChild( container );
				
				
				camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
				camera.position.set(0, 0, 7 );

				scene = new THREE.Scene();
				scene.background=new THREE.Color('whitesmoke')
				

				// lumiere aziz
let hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.61 );
    hemiLight.position.set( 0, 50, 0 );
 
scene.add( hemiLight );



let dirLight = new THREE.DirectionalLight( 0xffffff, 1 );
    dirLight.position.set( -100, 0, 0 );
    dirLight.castShadow = true;
    dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
  
    scene.add( dirLight );

	let dirLight2 = new THREE.DirectionalLight( 0xffffff, 1 );
    dirLight2.position.set( 100, 0, 0 );
    dirLight2.castShadow = true;
    dirLight2.shadow.mapSize = new THREE.Vector2(1024, 1024);
 
    scene.add( dirLight2 );


	let dirLight3 = new THREE.DirectionalLight( 0xffffff, 1 );
    dirLight3.position.set( 0, 100, 0 );
    dirLight3.castShadow = true;
    dirLight3.shadow.mapSize = new THREE.Vector2(1024, 1024);
   
    scene.add( dirLight3 );

	let dirLight4 = new THREE.DirectionalLight( 0xffffff, 1 );
    dirLight4.position.set( 0, 0, 100 );
    dirLight4.castShadow = true;
    dirLight4.shadow.mapSize = new THREE.Vector2(1024, 1024);
  
    scene.add( dirLight4 );

	let dirLight5 = new THREE.DirectionalLight( 0xffffff, 1 );
    dirLight5.position.set( 0, -100, 0);
    dirLight5.castShadow = true;
    dirLight5.shadow.mapSize = new THREE.Vector2(1024, 1024);

    scene.add( dirLight5 );

						const loader = new GLTFLoader().setPath( './' );
						loader.load( './robot2.glb', function ( gltf ) {

							gltf.scene.traverse( function ( child ) {

								if ( child.isMesh ) {

								

								}

							} );

							scene.add( gltf.scene );

						

							render();

						} );

					

				renderer = new THREE.WebGLRenderer( { antialias: true } );
				renderer.physicallyCorrectLights = true;
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth/1.03, window.innerHeight );
				renderer.toneMapping = THREE.ACESFilmicToneMapping;
				renderer.toneMappingExposure = 1;
				renderer.outputEncoding = THREE.sRGBEncoding;
				container.appendChild( renderer.domElement );

				const pmremGenerator = new THREE.PMREMGenerator( renderer );
				pmremGenerator.compileEquirectangularShader();

				window.addEventListener( 'resize', onWindowResize );

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				render();

			}

			function animate() {
				requestAnimationFrame( animate );
				renderer.render( scene, camera );
				scene.rotation.y -= 0.02;
			}
			animate();

			function render() {

				renderer.render( scene, camera );

			}
