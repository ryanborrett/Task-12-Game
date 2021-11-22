import React from 'react'

//sets up cell
export default function Cell({ details, revealcell }) {
    const style = {
        cellStyle: {
            width: 40, height: 40, backgroundColor: '#bdc3c7', border: '1px solid white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px',
            cursor: 'pointer',
        },
    }

    return (
        <div style={style.cellStyle} onClick={() => { revealcell(details.x, details.y) }}>
            {details.revealed ? details.value : ""}
        </div>
    )
}

