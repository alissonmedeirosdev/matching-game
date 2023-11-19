import CardGame from '../../components/CardGame'

export default function BoradGame(amountCard) {
    const $htmlCardGame = CardGame() 
    const $htmlBoradGame = $htmlCardGame.repeat(amountCard)

    return $htmlBoradGame
}