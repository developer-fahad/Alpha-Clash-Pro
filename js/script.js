
function checkButtonKeypress(event){
    const gamerPressed = event.key;

    if(gamerPressed === 'Escape'){
        gameOver();
        
    }
    // console.log(event.key);
    const displayAlphabetText = getElementByIdName('display-alphabet').innerText;
    const showAlphabet = displayAlphabetText.toLowerCase();
    // console.log(gamerpressed, showAlphabet);
    if(gamerPressed === showAlphabet){
        // console.log('You got a point!');
        // const currentScoreElement = getElementByIdName('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // console.log(currentScore);
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score', newScore);
        removeBgColorById(showAlphabet);
        continueGame();
    }
    else{
        // console.log('You lost your life...!');
        // alert('You Pressed wrong key.')
        // const totalLifeElement = getElementByIdName('total-life');
        // const totalLifeText = totalLifeElement.innerText;
        const totalLife = getTextElementValueById('total-life');
        const newLife = totalLife - 1;
        setTextElementValueById('total-life', newLife);
        if(newLife === 0){
            gameOver();
        }
        
    }
}
document.addEventListener('keyup', checkButtonKeypress);

function continueGame(){
    const alphabet = getRandomAlphabet();
    const displayAlphabet = getElementByIdName('display-alphabet');
    displayAlphabet.innerText = alphabet;
    setBgColorById(alphabet);
}

function play(){
    // getElementByIdName('home-screen');
    // homeScreen.classList.add('hidden');
    hideElementByID('home-screen');
    hideElementByID('score')
    showElementById('playground');
    setTextElementValueById('current-score', 0);
    setTextElementValueById('total-life', 5);
    continueGame();
}

function gameOver(){
    hideElementByID("playground");
    showElementById('score');
    const finalScore = getTextElementValueById('current-score');
    setTextElementValueById('final-score', finalScore);

    const currentAlphabet = getElementTextById('display-alphabet');
    removeBgColorById(currentAlphabet);
    
}
