import PlayerScore from '../../components/PlayerScore'
import VsPalyer from '../../components/VsPlayer'
import PlayerName from './../../components/PlayerName'
import './style.css'

export default function ScoreBoard() {
    return /*html*/`
        <header class="score-board">
            ${PlayerName('Player 1')}
            ${PlayerScore(3)}
            ${VsPalyer()}
            ${PlayerScore(3)}
            ${PlayerName('Player 2')}
        </header>
        
    `
}