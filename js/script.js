
function checkButtonKeypress(event){
    const gamerPressed = event.key;
    // console.log(event.key);
    const displayAlphabetText = getElementByIdName('display-alphabet').innerText;
    const showAlphabet = displayAlphabetText.toLowerCase();
    // console.log(gamerpressed, showAlphabet);
    if(gamerPressed === showAlphabet){
        console.log('You got a point!');
        removeBgColorById(showAlphabet);
        continueGame();
    }
    else{
        console.log('You lost your life...!');
        // alert('You Pressed wrong key.')
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
    // getElementByIdName('score');
    // console.log(getElementByIdName);


    // getElementByIdName('playground');
    // playgroundScreen.classList.remove('hidden');
    showElementById('playground');

    continueGame();

}

// function play(){
//     hideElementByID('home-screen');
// }
