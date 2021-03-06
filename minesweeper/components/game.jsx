import React from 'react';
import * as Minesweeper from '../minesweeper.js';
import Board from './board.jsx';
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: new Minesweeper.Board(12,14)
    };

    this.updateGame = this.updateGame.bind(this)

  }

  updateGame() {

  }

  render() {
    return (
      <div id="Game">
       <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
    );
  }
}

export default Game;