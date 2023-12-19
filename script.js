const dog = document.getElementById('dog');
const spread = document.getElementById('spread');

function shoot(){
    let count = 0;
    clearInterval(quack);
        duck.className="shot";
    setTimeout(()=>{
        new Audio('sounds/fall.mp3').play();
        duck.className="";
         let fall = setInterval(()=>{
             count++;
            duck.style.top = `${duck.offsetTop + 15}px`
            duck.style.backgroundImage = "url('images/fall" + count +".png')";
            count = (count === 4)? 0: count;
        if (duck.offsetTop > 500){
            clearInterval(fall);
            new Audio('sounds/lands.mp3').play();
            dog.style.left = duck.style.left;
            setTimeout(()=>{
                dog.className = "dog-fetch";
                new Audio('sounds/gotDuck.mp3').play();
                },500
            )
        }
         },60)
    },600);
}

let quack = setInterval(()=>{
    new Audio('sounds/quack.mp3').play();

},4000);

function gameOver() {
        duck.style.display = "none";
        clearInterval(quack);
        dog.className = "dog-laugh";
             let count = 0;
            setInterval(()=>{
                count++;
                dog.style.backgroundImage = "url('images/laugh" + count +".png')";
                count = (count === 2)? 0: count;
            },300)
                new Audio('sounds/laugh.mp3').play();
}
dog.addEventListener('click',function (){
    spread.className = 'blood';
})

