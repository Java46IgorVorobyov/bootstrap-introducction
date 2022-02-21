console.log('Hey bro')

let chess = [
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
]


function draw() {
    let out = ''
    let m = 0

    for(i = 0; i < chess.length; i++) {
        let arr = chess[i]
        for(let k = 0; k < arr.length; k++) {
            if(m % 2 == 0) {
                out += `<div class="chess-block"></div>`
            }else {
                out += `<div class="chess-block bg-black"></div>`
            }
            m++
        }
        m++
    }
    document.querySelector('#field').innerHTML = out
}

draw()

