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

    animals.addEventListener('click', function(){
        animalCounter = 0;
        nextButton.addEventListener('click', function(){
            document.getElementById("photos").src = 
            "img/" + animalPics[animalCounter] + ".jpg"
        
            if (animalCounter >= animalPics.length - 1){
                animalCounter = 0;
            } else {
                animalCounter ++;
            }
            console.log("animal counter is:", animalCounter)
        })
    })

    nature.addEventListener('click', function(){
        natureCounter = 0;
        nextButton.addEventListener('click', function(){
            document.getElementById("photos").src = 
            "img/" + naturePics[natureCounter] + ".jpg"
        
            if (natureCounter >= naturePics.length - 1){
                natureCounter = 0;
            } else {
                natureCounter ++;
            }
            console.log("nature counter is", natureCounter)
        })
    })
})
