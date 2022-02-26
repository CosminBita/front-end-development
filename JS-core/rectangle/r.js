
var rect = document.querySelector('#rectangle')
rect.addEventListener('click', minimize);
async function minimize() {
    for(let i = 10; i >= 0; i--) {
        //asteptam 20 milisecunde:
        await new Promise(r => setTimeout(r, 20))
        rect.style.height = i + 'em'
    }
}
    
