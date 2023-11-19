import PlayerName from './../../components/PlayerName'

export default function ScoreBoard() {
    return /*html*/`
        <header>
            ${PlayerName('Player 1')}
            ${PlayerName('Player 2')}
        </header>
        
    `
}