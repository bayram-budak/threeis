import * as THREE from 'three';

export default class cameraController{
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / 500, 0.1, 1000 );
}