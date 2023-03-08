import * as THREE from "three";
import pieces from "./pieces";
import PlayerController from "./playerController";

export default class GameController {
  app: HTMLDivElement;
  scale: number;
  currentPiece: THREE.Group;
  time: number;
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;

  constructor(app: HTMLDivElement) {
    this.app = app;
    this.scale = 0.25;
    this.currentPiece = new THREE.Group();
    this.time = Date.now();
    this.renderer = new THREE.WebGLRenderer();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 500,
      0.1,
      1000
    );
  }

  startGame() {
    console.log("starting Game");
    const playerController = new PlayerController(this);
    this.loadGame();
  }

  loadGame() {
    this.app.appendChild(this.renderer.domElement);

    this.renderer.setSize(
      <number>this.app?.offsetWidth,
      <number>this.app?.offsetHeight
    );

    let nextPice = pieces(this.scale);
    this.currentPiece = nextPice;
    this.scene.add(nextPice);

    this.camera.position.z = 5;

    this.time = Date.now();
    this.animate();
  }

  animate() {
    let speed = 0.005;
    let count = 0;
    const currentTime = Date.now();
    const deltaTime = currentTime - this.time;
    this.time = currentTime;
    count += speed * deltaTime;
    if (count > 2) {
      this.currentPiece.position.y -= this.scale;
      count = 0;
    }

    console.log(this.currentPiece.position);

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate);
  }

  getCurrentPiece(): THREE.Group {
    return this.getCurrentPiece();
  }
  rotateZ(x: number) {
    this.currentPiece.rotateZ(x);
  }
  move(dir: number) {
    this.currentPiece.position.x += this.scale * dir;
  }
}
