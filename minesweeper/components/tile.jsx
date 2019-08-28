import React from 'react'
import * as Minesweeper from '../minesweeper.js';




class Tile extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    debugger
    this.props.updateGame(this.props.tile, false);
  }

  render() {
    let tile = this.props.tile;
    let bombCount = tile.adjacentBombCount();
    let displayChar = '';
    if (tile.bombed) {
      displayChar = 'B';
    } else if (tile.flagged) {
      displayChar = 'F';
    } else {
      displayChar = 'E';
    }

    return(
      <div className="tile-conatiner" onClick={this.handleClick}>{displayChar}</div>
    )
  }
}

export default Tile