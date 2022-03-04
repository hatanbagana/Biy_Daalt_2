// const ball = document.querySelector(".ball")
// document.querySelector("main").style


// for (let i = 0; i < 100; i++) {
    
    
// }
let i=0
let j = 0
let counter = 0
let boolean = true
setInterval(() => {
    console.log(counter++);
    if (counter == 84) {
        return boolean = false
    }
    else if(boolean){

        document.getElementById('ball').style.left = `${i += 1}px`
        document.getElementById('ball1').style.top = `${i += 1}px`
        document.getElementById('ball2').style.left = `${i += 1}px`
        document.getElementById('ball2').style.top = `${i += 1}px`
        document.getElementById('ball3').style.right = `${j += 1}px`
        document.getElementById('ball3').style.top = `${j += 1}px`

    }
    else if(boolean == false){

        document.getElementById('ball').style.left = `${i -= 1}px`
        document.getElementById('ball1').style.top = `${i -= 1}px`
        document.getElementById('ball2').style.left = `${i -= 1}px`
        document.getElementById('ball2').style.top = `${i -= 1}px`
        document.getElementById('ball3').style.right = `${j -= 1}px`
        document.getElementById('ball3').style.top = `${j -= 1}px`

        if (i == 0) {
            boolean = true
            counter =0
        }

    }

    
}, 100);

// for (let i = 0; i < 1000; i++) {
//     document.getElementById('ball').style.left = `${i++}px`

    
// }