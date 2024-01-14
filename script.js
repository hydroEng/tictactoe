const gameboard = (function () {
    const new_board = () => [
        ['.', '.', '.'],
        ['.', '.', '.'],
        ['.', '.', '.'],
    ]

    const place_marker = (row, col, marker) => {
        // Ensure that x or o are the markers provided.
        if (!(marker == 'x') || (!(marker == 'o'))) {
            return
        }

        // Enforce that a, b are within values 1-3
        if (!(row > 0 && row < 4) || (!(col > 0 && col < 4))) {
            return
        }
        
        

    }
    return { new_board }
}
)()