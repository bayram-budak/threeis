import GameController from "./gameController";
import * as THREE from "three";

export default class PlayerController {
  gameController: GameController;
  constructor(gc: GameController) {
    this.gameController = gc;
    this.userInput();
  }

  userInput() {
    addEventListener("keypress", (event) => {
      console.log(event.key);
      if (event.key === "x") {
        this.gameController.rotateZ(Math.PI / 2);
      }
      if (event.key === "y") {
        this.gameController.rotateZ(Math.PI / -2);
      }
    });
    addEventListener("keydown", (event) => {
      console.log(event.key);

      if (event.key === "ArrowRight") {
        this.gameController.move(1);
      }
      if (event.key === "ArrowLeft") {
        this.gameController.move(-1);
      }
    });
  }
}
