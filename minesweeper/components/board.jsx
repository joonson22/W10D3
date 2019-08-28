import React from 'react';
import * as Minesweeper from '../minesweeper.js';
import Tile from './tile.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    

  }
  
  render() {
    return (
      <div id="Board">
        {this.props.board.grid.map((row,idx) => {
          return (
            <div key={idx} id={idx}>
              {row.map((tile,idx2) => {
                return (
                  <div className="tile" key={[idx, idx2]} id={[idx, idx2]}>
                    <Tile updateGame={this.props.updateGame} 
                    key={[idx, idx2]} board={this.props.board}
                    pos={[idx, idx2]} tile={tile} />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}
export default Board