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

    const place_marker = (row, col, marker) => {
        // Ensure that x or o are the markers provided.
        if (!is_marker(marker)) {
            console.log("Error: Please only use 'x' or 'o' as markers.")
            return
        }

        // Enforce that a, b are within values 1-3
        if (!(row > 0 && row < 4) || (!(col > 0 && col < 4))) {
            console.log("Error: Please provide values between 1 and 3 for rows and columns.")
            return        
        }
        
        board_value = board[row - 1][col - 1]
        // Exit if the selected board piece is already a marker.
        if (is_marker(board_value)) {
            return
        }

        // Place marker if all checks pass.
        board[row].splice([col],1, marker)
    }
    

    return { board, place_marker }
}
)()