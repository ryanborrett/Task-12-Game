import React from 'react';

function Rules() {
    return (
        <div>
            <h1>Rules</h1>
            <p>Minesweeper rules are very simple. The board is divided into cells, with mines randomly distributed. </p>
            <p>To win, you need to select all the empty cells. The number on a cell shows the number of mines adjacent to it. </p>
            <p>Using this information, you can determine cells that are safe, and cells that contain mines. </p>
            <p>If you select a cell containing a mine, you lose. </p>
            <button><a href='http://localhost:3000/'>Home</a></button>
        </div>
    )
}

export default Rules;