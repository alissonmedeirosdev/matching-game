import './style.css'
import CardGame from '../../components/CardGame'

export default function BoradGame(amountCard) {
    const $htmlCardGame = CardGame() 
    const $htmlContent = $htmlCardGame.repeat(amountCard)

    return `
        <section class="board-game">
            ${$htmlContent}
        </section>
    `
}