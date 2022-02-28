import Character from "./Character.js";
import Move from "./Move.js";

class Enemy extends Character {
  constructor(data) {
    super(data)
    
    this.name        = data.name;  
    this.specialMove = data.specialMove;
    this.openingMove = data.openingMove;
  }

  selectRandomMove() {
    console.log(this)
    this.selectedMove =  Move.randomMove(this.moveList);
  }
}

export default Enemy;