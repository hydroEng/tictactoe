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
    var turns = 0

    function is_marker (marker) {
        if ((marker == 'x') || (marker == 'o')) {
            return true
        }
        return false
    }

    function diagonals_to_str (direction) {
        // Helper function to convert diagonal direction markers to a string separated by commas.
        // This will allow checks for wins.
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
        // Function to check if win condition has been met. Input is a comma-seperated string of 3 markers.
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

    const check_valid_moves = function () {
        // Helper function to check if any valid moves remain. Alternatively, can just end
        // game at 9 turns. 
        for (i=0; i < board.length; i++) {
            var row = board[i]
            for (j=0; j < row.length; j++) {
                marker = row[j]
                if (marker == '.') {
                    return(true)
                }
            }
        }
        return(false)
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
            return(true)
        }
    }


    const place_marker = (row, col, marker) => {
        var invalid_move = false
        turns += 1
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
        var game_won = check_win()
        if(game_won) {
            console.log("Game has ended due to win")
        }
        else if(turns === 9){
            console.log("Game has ended as there are no more valid moves!")
        }
        return game_won
    }
    return { board, turns, new_board, place_marker, display_board }
}
)()

// Let user place markers on board.

const board = document.getElementById("board")
const rows = board.children

for (i=0; i<rows.length; i++) {
    var row = rows[i]
    var cells = row.children
    for (j=0; j<row.length; j++) {
        var cell = cells[j]
        console.log(cell)
        cell.addEventListener(
            'click',
            (e) => {
                e.target.innerText = 'x' }
            )
        }
    }


// TODO:

// - Create a function that will check if there are any valid moves left. If not, end game.
// - Create a function to end game. 
// - NEW BOARD FUNC DONE.

// - Build simple front-end.