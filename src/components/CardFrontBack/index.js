import CardGame from "../CardGame";
import './styles.css'


// NAME SPACES 

export default function CardFrontBack() {  
    
    window.cardFrontBack = {}

    window.cardFrontBack.handleClick = event => {
        const $origin = event.target
        const $cardFrontBack = $origin.closest('.card-front-back')
        
        // if($cardFrontBack.classList.contains('-active')){
        //     $cardFrontBack.classList.remove('-active')
        // } else {
        //     $cardFrontBack.classList.add('-active')
        // }


        $cardFrontBack.classList.toggle('-active')

    }
    

    return /*html*/`
    <article class="card-front-back" onClick="cardFrontBack.handleClick(event)">
        <div class="card -front">
            ${CardGame()}
        </div>    

        <div class="card -back">
            ${CardGame('javascript', 'Logo do javascript')}
        </div>
    </article>
    `
}