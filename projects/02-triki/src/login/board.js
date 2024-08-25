import { WINNER_COMBOS } from '../constants.js'


export const checkWinnerFrom = (boardTocheck) => {
    // revisamos todas las combinaciones ganadoras
    // para ver si X u O ganó
    for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
            boardTocheck[a] &&
            boardTocheck[a] === boardTocheck[b] &&
            boardTocheck[a] === boardTocheck[c]
        ) {
            return boardTocheck[a]
        }
    }
    // si no hay ganador
    return null
}

export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}