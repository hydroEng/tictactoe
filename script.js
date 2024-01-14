const gameboard = (function () {
    const new_board = () => [
        ['.', '.', '.'],
        ['.', '.', '.'],
        ['.', '.', '.'],
    ]

    const place_x = ([a, b]) => {
        // Enforce that x, 
        if (!(a > 0 && a < 4) || (!(b > 0 && b < 4))) {
            return
        }
        
    }
    return { new_board }
}
)()