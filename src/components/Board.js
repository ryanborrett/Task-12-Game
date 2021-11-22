import React, { useState, useEffect } from "react";
import CreateBoard from '../utilities/CreateBoard';
import Cell from './Cell'
import { revealed } from '../utilities/Reveal';

function Board() {
    const style = {
        display: 'flex',
        flexDirection: 'row',
    }
    const [grid, setGrid] = useState([]);
    const [nonMinecount, setNonMinecount] = useState(0);
    const [mineLocation, setmineLocation] = useState([]);

    //creates the board
    useEffect(() => {
        const freshBoard = () => {
            const newBoard = CreateBoard(10, 10, 20);
            setNonMinecount(10 * 10 - 20);
            setmineLocation(newBoard.mineLocation);
            setGrid(newBoard.board);
        }
        freshBoard();
    }, []);

    //revealing all cells and the mine location of all mines when clicking on mines
    const revealcell = (x, y) => {
        let newGrid = JSON.parse(JSON.stringify(grid));
        //lose condition
        if (newGrid[x][y].value === "X") {
            alert("You clicked on a mine. Game over.")
            for (let i = 0; i < mineLocation.length; i++) {
                newGrid[mineLocation[i][0]][mineLocation[i][1]].revealed = true;
            }
            setGrid(newGrid);
        }
        else {
            let revealedboard = revealed(newGrid, x, y, nonMinecount);
            setGrid(revealedboard.arr);
            setNonMinecount(revealedboard.newNonMines);
            var win = nonMinecount;
            //win condition
            if (win === 0) {
                alert('You won!');
            }
        }
    }



    return (
        <div className="parent">
            <div>

                {grid.map((singlerow, index1) => {
                    return (
                        <div style={style} key={index1}>
                            {singlerow.map((singlecol, index2) => {
                                return <Cell details={singlecol} key={index2} revealcell={revealcell} />
                            })}
                        </div>
                    )
                })}
            </div>
            <br></br>
            <button><a href='http://localhost:3000/rules'>Rules</a></button>
            <button><a href='http://localhost:3000/'>Play Again</a></button>
        </div>
    )

}
export default Board;