import CardGame from "../CardGame";
import './styles.css'

export default function CardFrontBack() {
    return /*html*/`
    <article class="card-front-back">
        <div class="card -front">
            ${CardGame()}
        </div>    

        <div class="card -back">
            ${CardGame('javascript', 'Logo do javascript')}
        </div>
    </article>
    `
}