// make sure html is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('are you loaded')
    const tiles = Array.from(document.getElementsByClassName('box'))
    const playerDisplay = document.getElementsByClassName('display-playerX-or-playerO')
    const gameAnnouncer = document.getElementsByClassName('turn-display')
    
    // assign players
    const playerX = 'X'
    const playerO = 'O'
    
    let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-combo')
    
    let currentPlayer = playerX
    let isGameActive = true
    
    /* Board layout
    [t1] [t2] [t3] 0 1 2
    [c1] [c2] [c3] 3 4 5
    [b1] [b2] [b3] 6 7 8
    */
   
   // Winning game conditions
   const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,8],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    
    function playerWins () {
        for (const condition of winningConditions) {
            let [a, b, c] = condition
            
            if (spaces[a] && spaces[b] == spaces [b] && spaces [a] == spaces[c])
            return [a, b, c]
        }
    }
    return false
    
    // Reset the game w/o refreshing the screen
    const resetGame = () => {
        tiles.fill = ''
        currentPlayer = playerX
    const resetButton = document.getElementById('reset')
            resetButton.addEventListener('click', resetGame)
    }
    // game play
    let spaces = Array(9).fill(null)

    const gameStart = () => {
        tiles.forEach(box => box.addEventListener('click', boxClicked, {once: true})) }
    
        function boxClicked(e) {
        const id = e.target.id

        if (!spaces[id]) {
            spaces[id] = currentPlayer
            e.target.innerText = currentPlayer
            
            currentPlayer = currentPlayer === playerX
            ? playerO
            : playerX

            if(playerWins() !== false) {
                playerText = `${currentPlayer} wins!`
            }
            
            if (comparePlayers() !==false){
                let winning_combo = checkWinner()

                winning_combo.map( box => tiles[box].style.backgroundColor = winnerIndicator)
            }
        }
    } 
    // Score keeping & game results

    function compareMatch(playerXWins, playerOWins) {
        const currentMatch = `${playerX} vs ${playero}`;
        if (spaces[id] !== winningConditions) {
          alert(`${currentMatch} is a Tie`);
          return;
        }
    function updateScore() {
            document.getElementById("player X").textContent = pScore;
            document.getElementById("player O").textContent = cScore;
        }

})