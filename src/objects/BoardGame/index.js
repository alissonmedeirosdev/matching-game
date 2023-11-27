import './style.css'
// import CardGame from '../../components/CardGame'
import CardFrontBack from '../../components/CardFrontBack'

export default function BoradGame(amountCard) {
    const $htmlCardFrontBack = CardFrontBack() 
    const $htmlContent = $htmlCardFrontBack.repeat(amountCard)

    return `
        <section class="board-game">
            ${$htmlContent}
        </section>
    `
}