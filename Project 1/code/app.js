let allElements;

//makes sure events happen when the page is laoded
window.addEventListener('load', function(){
    console.log("Page is loaded")

    //load the json file
    fetch("./greekGods.json")
    .then(response => response.json())

    .then((data) => {
        console.log(data);
        allElements = data.greek_gods;
        
        for (let i = 0; i < allElements.length; i++){
            console.log(allElements[i])

            let listItem = document.createElement('li')
            listItem.classList.add("list_item")
            listItem.textContent = allElements[i]

            let list = document.getElementById("list")

            list.appendChild(listItem);

        }
    })

})