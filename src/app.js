import * as THREE from 'https://cdn.skypack.dev/three@0.131.3';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.131.3/examples/jsm/loaders/GLTFLoader.js';

//Hexadecimal color (recommended)
var keyboard = {};
var player = { height:3.5, speed:0.08, turnSpeed:Math.PI*0.01 };
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const loader2 = new THREE.FontLoader();
let loader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer();
let car;
let geometry100;
let textMesh1;
let video1 = document.getElementById('video');
let texture1 = new THREE.VideoTexture(video1);
texture1.minFilter = THREE.LinearFilter;
texture1.magFilter = THREE.LinearFilter;
texture1.format = THREE.RGBFormat;
texture1.crossOrigin = 'anonymous';
let video2 = document.getElementById('video2');
let texture2 = new THREE.VideoTexture(video2);
texture2.minFilter = THREE.LinearFilter;
texture2.magFilter = THREE.LinearFilter;
texture2.format = THREE.RGBFormat;
texture2.crossOrigin = 'anonymous';
let video3 = document.getElementById('video3');
let texture3 = new THREE.VideoTexture(video3);
texture3.minFilter = THREE.LinearFilter;
texture3.magFilter = THREE.LinearFilter;
texture3.format = THREE.RGBFormat;
texture3.crossOrigin = 'anonymous';
let video4 = document.getElementById('video4');
let texture4 = new THREE.VideoTexture(video4);
texture4.minFilter = THREE.LinearFilter;
texture4.magFilter = THREE.LinearFilter;
texture4.format = THREE.RGBFormat;
texture4.crossOrigin = 'anonymous';
let video5 = document.getElementById('ambiente');
let texture5 = new THREE.VideoTexture(video5);
texture5.minFilter = THREE.LinearFilter;
texture5.magFilter = THREE.LinearFilter;
texture5.format = THREE.RGBFormat;
texture5.crossOrigin = 'anonymous';



window.onresize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight, true);
};

export function main() {
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  document.body.appendChild(renderer.domElement);

	camera.position.set(0, player.height, -5);
	camera.lookAt(new THREE.Vector3(0,player.height,0));


  setupLights();
  
  let piso = drawPlane(35, 50, 30, 30, 0x778899, true);
  piso.rotation.x = Math.PI / 2;
  scene.add(piso);

  let techo = drawPlane(35, 50  , 10, 10, 0x778899, true);
  techo.rotation.x = -Math.PI /2 ;
  techo.position.y = 10;
  scene.add(techo);

  let plane3 = drawPlane(50, 35, 10, 10, 0xFAFAD2, true);
  plane3.rotation.x = Math.PI;
  plane3.rotation.y = Math.PI /2;
  plane3.position.x = 17.5;
  plane3.position.y = 17.5;
  scene.add(plane3);

  let plane4 = drawPlane(50, 35, 10, 10, 0xFAFAD2, true);
  plane4.rotation.x = Math.PI;
  plane4.rotation.y = Math.PI /2;
  plane4.position.x = -17.5;
  plane4.position.y = 17.5;
  scene.add(plane4);

  let plane5 = drawPlane(35, 35, 10, 10, 0xFAFAD2, true);
  plane5.rotation.x = Math.PI;
  plane5.rotation.y = Math.PI;
  plane5.position.z = 25;
  plane5.position.y = 17.5;
  scene.add(plane5);

  let plane6 = drawPlane(35, 36, 10, 10, 0xFAFAD2, true);
  plane6.rotation.x = Math.PI;
  plane6.rotation.y = Math.PI;
  plane6.position.z = -17.5;
  plane6.position.y = 17.5;
  scene.add(plane6);

  let wall1 = drawPlane(17, 36, 10, 10, 0xFAFAD2, true);
  wall1.rotation.x = Math.PI;
  wall1.rotation.y = Math.PI /2;
  wall1.position.x = 7.5;
  wall1.position.z = -9;
  wall1.position.y = 17;
  scene.add(wall1);

  let wall11 = drawPlane(3, 36, 10, 10, 0xFAFAD2, true);
  wall11.rotation.x = Math.PI;
  wall11.rotation.y = Math.PI /2;
  wall11.position.x = 7.5;
  wall11.position.z = 5.5;
  wall11.position.y = 17;
  scene.add(wall11);

  let wall2 = drawPlane(17, 36, 10, 10, 0xFAFAD2, true);
  wall2.rotation.x = Math.PI;
  wall2.rotation.y = Math.PI /2;
  wall2.position.x = -7.5;
  wall2.position.z = -9;
  wall2.position.y = 10;
  scene.add(wall2);

  let wall21 = drawPlane(3, 36, 10, 10, 0xFAFAD2, true);
  wall21.rotation.x = Math.PI;
  wall21.rotation.y = Math.PI /2;
  wall21.position.x = -7.5;
  wall21.position.z = 5.5;
  wall21.position.y = 10;
  scene.add(wall21);

  let wall3 = drawPlane(15, 36, 10, 10, 0xFAFAD2, true);
  wall3.rotation.x = Math.PI;
  wall3.rotation.y = Math.PI;
  wall3.position.z = 7;
  wall3.position.y = 17.5;
  wall3.position.x = 15;
  scene.add(wall3);

  let wall4 = drawPlane(15, 36, 10, 10, 0xFAFAD2, true);
  wall4.rotation.x = Math.PI;
  wall4.rotation.y = Math.PI;
  wall4.position.z = 7;
  wall4.position.y = 17.5;
  wall4.position.x = -15;
  scene.add(wall4);

video1.src = "assets/video1.mp4";
video1.load();
video1.play();
video2.src = "assets/video2.mp4";
video2.load();
video2.play();
video3.src = "assets/video3.mp4";
video3.load();
video3.play();
video4.src = "assets/video4.mp4";
video4.load();
video4.play();
video5.src = "assets/video5.mp4";
video5.load();
video5.play();

  let plane31 = new DrawVideos(8, 6, 10, 10, texture1);
  plane31.rotation.x = Math.PI;
  plane31.rotation.y = -Math.PI /2;
  plane31.rotation.z = Math.PI;
  plane31.position.x = 17.3;
  plane31.position.y = 5.5;
  plane31.position.z = 15.5;
  scene.add(plane31);
  let plane312 = drawPlane(8.5, 6.5, 10, 10, 0x000000, true);
  plane312.rotation.x = Math.PI;
  plane312.rotation.y = Math.PI /2;
  plane312.position.x = 17.4;
  plane312.position.y = 5.5;
  plane312.position.z = 15.5;
  scene.add(plane312);
  let plane41 = DrawVideos(8, 6, 10, 10, texture2);
  plane41.rotation.x = Math.PI;
  plane41.rotation.y = Math.PI /2;
  plane41.rotation.z = Math.PI;
  plane41.position.x = -17.3;
  plane41.position.y = 5.5;
  plane41.position.z = 15.5;
  scene.add(plane41);
  let plane412 = drawPlane(8.5, 6.5, 10, 10, 0x000000, true);
  plane412.rotation.x = Math.PI;
  plane412.rotation.y = Math.PI /2;
  plane412.position.x = -17.4;
  plane412.position.y = 5.5;
  plane412.position.z = 15.5;
  scene.add(plane412);
let plane51 = DrawVideos(8, 6, 10, 10,texture3);
  plane51.rotation.x = Math.PI;
  plane51.rotation.z = -Math.PI;
  plane51.rotation.y = -Math.PI;
  plane51.position.x = 12.5;
  plane51.position.z = -17.3;
  plane51.position.y = 5.5;
  scene.add(plane51);
  let plane512 = drawPlane(8.5, 6.5, 10, 10, 0x000000, true);
  plane512.rotation.x = Math.PI;
  plane512.rotation.y = Math.PI;
  plane512.position.x = 12.5;
  plane512.position.z = -17.4;
  plane512.position.y = 5.5;
  scene.add(plane512);
  let plane52 = DrawVideos(8, 6, 10, 10,texture4);
  plane52.rotation.x = Math.PI;
  plane52.rotation.z = -Math.PI;
  plane52.rotation.y = -Math.PI;
  plane52.position.x = -12.5;
  plane52.position.z = -17.2;
  plane52.position.y = 5.5;
  scene.add(plane52);
  let plane522 = drawPlane(8.5, 6.5, 10, 10, 0x000000, true);
  plane522.rotation.x = Math.PI;
  plane522.rotation.y = Math.PI;
  plane522.position.x = -12.5;
  plane522.position.z = -17.4;
  plane522.position.y = 5.5;
  scene.add(plane522);
  let plane61 = new DrawVideos(10, 10, 10, 10, texture5);
  plane61.rotation.y = -Math.PI/2
  plane61.position.x = 200;
  plane61.position.y = 200;
  scene.add(plane61);


  loadInitialModels(13, 0, -13, Math.PI);
  loadInitialModels(-13, 0, -13, 0);
  loadInitialModels(11, 0, 10, Math.PI/3);
  load3dtext('Steampunk',8, 3, 25, 0, Math.PI, 0.2, 2, 1, 0xFF00FF, 0xFF00FF);
  load3dtext('Progressive',-15.5, 6, -13.5, 0, 0, 0, 0.5, 0.2, 0x7FFF00, 0x7FFF00);
  load3dtext('Undeground',10, 6, -13.5, 0, 0, 0, 0.5, 0.2, 0x00BFFF, 0x00BFFF);

  animate();
}

function load3dtext(string, x, y, z, x1, y1, z1, s1, s2, color1, color2) {
  loader2.load('assets/gameofsquids.json', 
  function (font) {
       geometry100 = new THREE.TextGeometry(string, {
        font: font,
        size: s1,
        height: s2,
    });
    
      textMesh1 = new THREE.Mesh(geometry100, 
      new THREE.MeshPhongMaterial({ color: color1 }), // front
      new THREE.MeshPhongMaterial({ color: color2 }) // side
      );
    textMesh1.castShadow = true
    textMesh1.position.y = y
    textMesh1.position.z = z
    textMesh1.position.x = x
    textMesh1.rotation.y = y1
    textMesh1.rotation.x = x1
    textMesh1.rotation.z = z1
    scene.add(textMesh1)
});
}


function loadInitialModels(x, y, z, rotacion) {
  loader.load(
    'assets/Modelos/scene.gltf',
    function (gltf) {
      car = gltf.scene.children[0];
      car.position.set(x, y, z);
      car.rotation.z = rotacion;
      car.scale.multiplyScalar(15 / 100);
      scene.add(car);
      animate();
    },
  );
}

function drawPlane(w, h, sh, sw, color, ds = false) {
  const geometry = new THREE.PlaneGeometry(w, h, sw, sh);
  const material = new THREE.MeshPhongMaterial({
    color,
    side: ds ? THREE.DoubleSide : undefined,
  });
  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;
  plane.castShadow = true;
  return plane;
}

function DrawVideos(w, h, sh, sw, texture) {
  const geometryv1 = new THREE.PlaneGeometry(w, h, sw, sh);
  const materialv3 = new THREE.MeshBasicMaterial({ map: texture });
  const plane2 = new THREE.Mesh(geometryv1, materialv3);
  return plane2;
}


function setupLights() {
  const light = new THREE.AmbientLight(0x404040, 2);
  scene.add(light);

}


function animate() {
  requestAnimationFrame(animate);
  if(keyboard[87]){ // W key
    camera.position.x -= (Math.sin(camera.rotation.y) * player.speed)*0.3;
    camera.position.z -= (-Math.cos(camera.rotation.y) * player.speed)*0.3;
    }
  if(keyboard[83]){ // S key
    camera.position.x += (Math.sin(camera.rotation.y) * player.speed)*0.3;
    camera.position.z += (-Math.cos(camera.rotation.y) * player.speed)*0.3;
    }
  if(keyboard[65]){ // A key
    camera.position.x += (Math.sin(camera.rotation.y + Math.PI/2) * player.speed)*0.3;
    camera.position.z += (-Math.cos(camera.rotation.y + Math.PI/2) * player.speed)*0.3;
    }
  if(keyboard[68  ]){ // D key
    camera.position.x += (Math.sin(camera.rotation.y - Math.PI/2) * player.speed)*0.3;
    camera.position.z += (-Math.cos(camera.rotation.y - Math.PI/2) * player.speed)*0.3;
    }
  if(keyboard[37]){ // left arrow key
    camera.rotation.y -= player.turnSpeed*0.3;
    }
  if(keyboard[39]){ // right arrow key
    camera.rotation.y += player.turnSpeed*0.3;
    }
    renderer.render(scene, camera);
  

  }
  function keyDown(event){
    keyboard[event.keyCode] = true;
  }
  function keyUp(event){
    keyboard[event.keyCode] = false;
  }
  
  window.addEventListener('keydown', keyDown);
  window.addEventListener('keyup', keyUp);

  