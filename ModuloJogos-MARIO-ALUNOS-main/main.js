const mario = document.querySelector('.mario');
const clouds = document.querySelector('.clouds');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over');
const restart = document.querySelector('.restart');


const jump = ()=>{
    mario.classList.add('jump');

    setTimeout(()=>{
        mario.classList.remove('jump')
    }, 500)
}
document.addEventListener('keydown', jump)

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = +window.getComputedStyle(clouds).bottom.replace('px', '');

    if(marioPosition < 60 && pipePosition > 0 && pipePosition <= 100){
        pipe.style.animation = 'none'; 
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "/assets/imgs/game-over.png";
        mario.style.width = '70px';
        mario.style.marginleft = '35px';

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        gameOver.style.visibility = 'visible';

        clearInterval(loop);

    }
},10);

const restartFunction = ()=>{
    //Restaurando elementos ao estado original

    gameOver.style.visibility = 'hidden'

    pipe.style.animation = 'pipe-animation 1.5s infinite linear;';
    pipe.style.left = ``

    mario.src = './assets/imgs/mario.gif';
    mario.style.width = '130px';
    mario.style.marginLeft = '';
    mario.style.animation = '';
    mario.style.bottom = '0px';

    clouds.style.left = ``

    const loop = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudsPosition = +window.getComputedStyle(clouds).bottom.replace('px', '');
    
        if(marioPosition < 60 && pipePosition > 0 && pipePosition <= 100){
            pipe.style.animation = 'none'; 
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = "/assets/imgs/game-over.png";
            mario.style.width = '70px';
            mario.style.marginleft = '35px';
    
            clouds.style.animation = 'none';
            clouds.style.left = `${cloudsPosition}px`;
    
            gameOver.style.visibility = 'visible';
    
            clearInterval(loop);
    
        }
    },10);
}

restart.addEventListener("click", restartFunction)