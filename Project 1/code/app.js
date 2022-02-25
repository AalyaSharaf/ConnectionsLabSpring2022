let allElements;
let characterPics = ["aphrodite", "apollo", "ares", "artemis", "athena", "demeter", "dionysus", "hades", "hephaestus", "hera", "heracles", "hermes", "poseidon", "zeus"];


//makes sure events happen when the page is laoded
window.addEventListener('load', function(){
    console.log("Page is loaded")

    //load the json file
    fetch("./greekGods.json")
    .then(response => response.json())

    .then((data) => {
        console.log(data);
        allElements = data.greekGods;

        //Loop through the content in the json file
        for (let i = 0; i < allElements.length; i++){

            //checking if content is loading in the console
            console.log(allElements[i].name);

            //Using Intersection Observer for text scroll animation
            const options = {
                rootMargin: "0px 0px -50px 0px",
            }
        
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting){
                        entry.target.classList.add("show")
                        observer.unobserve(entry.target);
                    } else {
                        return;
                    }
                })
            }, options)

            const paras = document.querySelectorAll('p');
            paras.forEach(p => observer.observe(p))

            const imgs = document.querySelectorAll('img');
            imgs.forEach(img => observer.observe(img))

            const header = document.querySelectorAll('h1');
            header.forEach(h1 => observer.observe(h1))

            const aList = document.querySelectorAll('li');
            aList.forEach(li => observer.observe(li))


            //Creating all the needed html elements
            //Assigning them a class or an id if necessary

            let list = document.createElement('li')

            //creating a div for the elements
            let mainDiv = document.createElement('div')
            mainDiv.classList.add("container_timeline-content")
            mainDiv.setAttribute('id', 'container_timeline-content')

            //Div for the images and header
            let imageDiv = document.createElement('div')
            imageDiv.classList.add("container_timeline-images")
            imageDiv.setAttribute('id', 'container_timeline-images')

            //Div for all the text
            let infoDiv = document.createElement('div')
            infoDiv.classList.add("container_timeline-info")
            infoDiv.setAttribute('id', 'container_timeline-info')

            //All that needs to be embedded within the info div 

            let greekGods = document.createElement('h1')
            greekGods.textContent = allElements[i].name

            let characterImages = document.createElement('img')
            characterImages.setAttribute("src", "img/no-background/" + characterPics[i] + ".png")

            let textDiv = document.createElement('div')
            textDiv.classList.add("container_timeline-content--text")

            let title = document.createElement('p')
            title.textContent = 'Title: ' + allElements[i].title

            let romanName = document.createElement('p')
            romanName.textContent = 'Roman Name: ' + allElements[i].romanName

            //creating a list for character's abilities
            let abilities = document.createElement('ul')

            let infoDivText = document.createElement('p')
            infoDivText.textContent = "Abilities: " 

            //accesses the abilities array and adds each to their own list element
            for (let j = 0; j < allElements[i].abilities.length; j++){
                let abilitiesElements = document.createElement('li')
                let abilitiesElementsText = document.createElement('p')
                abilities.appendChild(abilitiesElements)
                abilitiesElements.appendChild(abilitiesElementsText)

                abilitiesElementsText.textContent += allElements[i].abilities[j]
                abilitiesElementsText.classList.add("abilities_list-text")
            }
            
            let home = document.createElement('p')
            home.textContent = 'Home: ' + allElements[i].home


            //accessing the html files using ID
            let greekGodList = document.getElementById("list");
            let abilitiesList = document.getElementById("list_abilities")

            //putting together the elements for the images on the timeline by appending them
            greekGodList.appendChild(list);
            list.appendChild(mainDiv)
            
            //Allows for the images to alternate left & right
            if (i % 2 == 0){
                mainDiv.appendChild(imageDiv)
                mainDiv.appendChild(infoDiv)
            } else { 
                mainDiv.appendChild(infoDiv)                
                mainDiv.appendChild(imageDiv)
            }

            imageDiv.appendChild(characterImages)
            imageDiv.appendChild(greekGods)
            infoDiv.appendChild(title)
            infoDiv.appendChild(romanName)
            infoDiv.appendChild(home)
            infoDiv.appendChild(infoDivText)
            infoDiv.appendChild(abilities)
        }
    })

})



