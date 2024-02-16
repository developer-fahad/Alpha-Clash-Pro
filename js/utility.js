// Get any Element argument with element ID name using this funtion.

function getElementByIdName(elementId){
    const element = document.getElementById(elementId);
    return element;
}

// function hideElementByID(elementID){
//     const element = document.getElementById(elementID);
//     element.classList.add('hidden');
// }

    function showElementById(elementId){
        const element = getElementByIdName('playground');
        element.classList.remove('hidden');
    }

// function showElementById(elementId){
//     const element = getElementByIdName(elementId);
//     const showElement = element.classList.remove('hidden');
//     return showElement;
// }

function hideElementByID(){
    // const element = document.getElementById(elementID);
    const element = getElementByIdName('home-screen');
    element.classList.add('hidden');
}

function setBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-500');
}
function removeBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-500');
}

function getRandomAlphabet(){
    const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
    const alphabests = alphabetStr.split('');
    // console.log(alphabests);

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabests[index];
    console.log(alphabet);
    return alphabet;
}