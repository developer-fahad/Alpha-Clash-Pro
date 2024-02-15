
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
