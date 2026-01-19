"use strict";
import { TSprite } from "libSprite";
import { EGameStatus } from "./FlappyBird.mjs";

export class THero extends TSprite {
    #gravity;
    #speed;
    constructor(aSpcvs, aSPI){
        super(aSpcvs, aSPI, 65, 200);
        this.animationSpeed = 17;
        this.#gravity = 4.81 / 100;
        this.#speed = 0;
    } 

    animate() {
    if (this.y < 400 - this.height){
        this.#speed += this.#gravity; //increase speed due to gravity
        this.y += this.#speed //update position based on speed
        if (this.rotation < 90) { //limit max rotation
        this.rotation = this.#speed*12; //tilt down based on speed
        }
        
    }
    else{
        EGameStatus.state = EGameStatus.gameOver;
        this.animationSpeed = 0;
    }
 }// End of animate
 
 flap() {
    this.#speed = -2; //give an instant upward speed
    this.rotation = 0; //reset rotation
 }
}


