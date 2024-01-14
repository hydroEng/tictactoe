const gameboard = (function () {
    var board = [
        ['.', '.', '.'],
        ['.', '.', '.'],
        ['.', '.', '.'],
    ]

    function is_marker (marker) {
        if ((marker == 'x') || (marker == 'o')) {
            return true
        }
        return false
    }

    const display_board = () => {
        for (i=0;i < board.length; i++) {
            console.log(board[i])
        }
    }

    const place_marker = (row, col, marker) => {
        var invalid_move = false
        // Ensure that x or o are the markers provided.
        if (!is_marker(marker)) {
            console.log("Error: Please only use 'x' or 'o' as markers.")
            invalid_move = true
        }

        // Enforce that a, b are within values 1-3
        if (!(row > 0 && row < 4) || (!(col > 0 && col < 4))) {
            console.log("Error: Please provide values between 1 and 3 for rows and columns.")
            invalid_move = true        
        }
        
        board_value = board[row - 1][col - 1]
        console.log(`Board value there is ${board_value}.`)
        // Exit if the selected board piece is already a marker.
        invalid_move = is_marker(board_value)

        if (invalid_move) {
            console.log("Board not changed.")
            display_board()
            return
        }
        // Place marker if all checks pass.
        board[row - 1].splice([col - 1],1, marker)
        display_board()
    }

    
    return { board, place_marker, display_board }
}
)()