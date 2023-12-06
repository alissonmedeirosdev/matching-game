import './styles.css'

export default function PlayerScore(points = 0){
    return /*html*/`
        <ol class="player-score" data-point="${points}">
            <li class="pointer">Um</li>
            <li class="pointer">Dois</li>
            <li class="pointer">Três</li>
        </ol>
    `
}