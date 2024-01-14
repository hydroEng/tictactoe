const gameboard = (function () {
    function new_board () {
        board = [
            ['.', '.', '.'],
            ['.', '.', '.'],
            ['.', '.', '.'],
        ]
        return board
    }
    
    var board = new_board()

    function is_marker (marker) {
        if ((marker == 'x') || (marker == 'o')) {
            return true
        }
        return false
    }

    function diagonals_to_str (direction) {
        // Valid directions: 'LR' (left-to-right), "RL" (right to left).
        if (direction=='LR') {
            str = `${board[0][0]},${board[1][1]},${board[2][2]}`
        }
        else if (direction=='RL') {
            str = `${board[0][2]},${board[1][1]},${board[2][0]}`
        }
        else {
            return
        }
        return str
    }

    const display_board = () => {
        for (i=0;i < board.length; i++) {
            console.log(board[i])
        }
    }

    function check_triple (triple) {
        var game_won
        if (triple == 'x,x,x') {
            console.log("Crosses wins!")
            game_won = true
        }
        else if (triple == 'o,o,o') {
            console.log("Naughts wins!")
            game_won = true
        }
        else {
            game_won = false
        }
        return game_won
    }

    
    const check_win = function () {
        // Check if wins along row.
        for (i=0; i < board.length; i++) {
            var row = board[i].toString();
            game_won = check_triple(row)
        }
        // Check if wins along diagonals.
        ['LR', 'RL'].forEach((direction) => {
            var diagonal = diagonals_to_str(direction)
            game_won = check_triple(diagonal)
            
        })
        // Check if wins along columns.
        for (i=0; i < board.length; i++) {
            var column = `${board[0][i]},${board[1][i]},${board[2][i]}`
            game_won = check_triple(column)
        }

        if (game_won) {
            console.log("Game has concluded due to win.")
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
        game_won = check_win()
        return game_won
    }
    return { board, new_board, place_marker, display_board }
}
)()

// TODO:

// - Create a function that will check if there are any valid moves left. If not, end game.
// - Create a function to end game. 
// - NEW BOARD FUNC DONE.

// - Build simple front-end.