/*
1. Load in images
2. Create a button to move to move through the images (make sure that works first)
3. Create another 2 buttons, one for each category
4. Make it so that only the images corresponding to the correct category are displayed when the "next" button is clicked 
*/

var animalPics = [
    "animal1", "animal2", "animal3", "animal4", "animal5","animal6", "animal7", "animal8", "animal9"
];

var naturePics = [
    "nature1", "nature2", "nature3", "nature4", "nature5", "nature6", "nature7", "nature8", "nature9"
];

let animalCounter;
let natureCounter;

window.addEventListener('load', function(){

    console.log('Page Loaded');

    animalCounter = 0;
    natureCounter = 0;

    let nextButton = document.getElementById("nextButton");
    let animals = document.getElementById("animals");
    let nature = document.getElementById("nature");

    //Looks for the animal category click
    animals.addEventListener('click', function(){
        animalCounter = 0;

        //Only when the animal button is clicked, do the animal pictures show, otherwise the screen will remain blank

        nextButton.addEventListener('click', function(){

            //goes through the image array initialized above
            document.getElementById("photos").src = 
            "img/" + animalPics[animalCounter] + ".jpg"

            //creates a "boundary" of sorts for the images
            if (animalCounter >= animalPics.length - 1){
                animalCounter = 0;
            } else {
                animalCounter ++;
            }
            console.log("animal counter is:", animalCounter)
        })
    })

    //Looks for the nature category click
    nature.addEventListener('click', function(){
        natureCounter = 0;

        //Only when the animal button is clicked, do the animal pictures show, otherwise the screen will remain blank

        nextButton.addEventListener('click', function(){

            //goes through the image array initialized above
            document.getElementById("photos").src = 
            "img/" + naturePics[natureCounter] + ".jpg"

            //creates a "boundary" of sorts for the images
            if (natureCounter >= naturePics.length - 1){
                natureCounter = 0;
            } else {
                natureCounter ++;
            }
            console.log("nature counter is", natureCounter)
        })
    })
})
