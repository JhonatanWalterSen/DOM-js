const d = document;

export default function draw(btn, selector) {
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
        ramdon = Math.floor(Math.random() * $players.length),
        winner = $players[ramdon]
        console.log($players, ramdon, winner);
        return `El ganador es: ${winner.textContent}`
    }

    d.addEventListener('click', e =>{
        if(e.target.matches(btn)){
            let result = getWinner(selector)
            alert(result)
            console.log(result);
        }
    })
}