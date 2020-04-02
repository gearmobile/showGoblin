export default class Game {
  constructor() {
    this.gameFieldSize = 16;
    this.prevCellIdx = 0;
    this.currentCellIdx = 0;
  }

  start() {
    const gameField = document.querySelector('.game-field');
    for (let i = 0; i < this.gameFieldSize; i += 1) {
      const newCell = `<div class='cell' id=cell${i}></div>`;
      gameField.insertAdjacentHTML('beforeend', newCell);
    }
    this.showGoblin();
  }

  showGoblin() {
    setInterval(() => {
      this.setRandomIdx();
      const prevCell = document.getElementById(`cell${this.prevCellIdx}`);
      const currentCell = document.getElementById(`cell${this.currentCellIdx}`);
      prevCell.innerHTML = '';
      currentCell.innerHTML = '<img src = "./goblin.png">';
      this.prevCellIdx = this.currentCellIdx;
    }, 1000);
  }

  setRandomIdx() {
    do {
      this.currentCellIdx = Math.floor(Math.random() * this.gameFieldSize);
    } while (this.currentCellIdx === this.prevCellIdx);
  }
}
