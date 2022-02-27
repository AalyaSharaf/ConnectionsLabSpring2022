# Project 1 Documentation

Link to Project: [https://aalyasharaf.github.io/ConnectionsLabSpring2022/Project%201/code/](https://aalyasharaf.github.io/ConnectionsLabSpring2022/Project%201/code/)

# Project Brief

Greek mythology has always been something that has intrigued me. As a kid, reading books was not something that I did often, in fact, I found it quite difficult to finish reading a few chapters, let alone an entire book. Despite all that, I still vividly remember one of the first book series , that consisted of not one, but 5 books, I ever completed and it was the "Percy Jackson and the Olympians" series. That is why, whe I saw a file that consisted of all the different greek gods, I immideately gravitated to it because it brought me back to all those memories. As a kid, I used to visualize a lot, especially when reading, so when all these differnt greek gods were being mentioned in this series, I could not help but wonder what they would look like, what their personality traits are, etc... That is why, I feel like creating a website that displays such information could be extremely beneficial to any future little dreamers who want to have a space to see a manifestation of their dream world.

# Brainstorming Process

I went through many different phases and ideas of what I wanted my project to look like:

1. I began with wanting to have icons all over the screen, and once you hover over them, then the information is displayed
    1. I moved from that idea because I felt that everything would be too crammed, and the art and visuals was something I wanted to highlights, and I did not think it would be possible with this version
2. The next idea I came up with, the one that I decided to proceed with, is the idea of a timeline. I felt like this would take the previous idea and transform it into something that more suitably fit my vision
    1. This way, the information would easily be available to users, while providing them with an aesthetic and appealing visuals that draw them into reading the content.

Here are a few of the wireframes I had draw up:

![brainstorm1.jpeg](Project%201%20%20e6ac7/brainstorm1.jpeg)

![brainstorm2.jpeg](Project%201%20%20e6ac7/brainstorm2.jpeg)

# Project Process

## Creating my JSON File

When initially looking for JSON files and APIs, I found one, but all it did was merely mention a list of Greek gods and goddesses, and I realized that it was not sufficient enough... I spent a lot of time trying to look for something I could use, but came up short. That is why, I decided to create my own JSON file. This way, not only was I able to choose what I wanted in the file, but I could make it as extensive as I wanted it to be. 

I got the majority of my info from a [wikipidea page](https://riordan.fandom.com/wiki/Riordan_Wiki) that is dedicated to Rick Riordan books (the author of the Percy Jackson books I mentioned earlier)... Because of that, I am not quite sure how historically accurate this information is, but in terms of the book fandom, it was the most accurate source I could find. 

## Creating the Visuals

In addition to that, I found some images online, by the artist **Rudal30** ([here](https://stock.adobe.com/gr_en/contributor/201564435/rudall30?load_type=author&prev_url=detail) is a link to his profile on adobe stock), that only further motivated me to choose the topic of Greek Mythology.  Here are just a few of them: 

For my website, I was initially going to have small icons/symbols that represent the characters (Ex: Using a trident to represent Poseidon - the Greek God of the Sea) → Once you click on them, they take you to a new page that displays these images.

- Decided it would be nicer if I took these same images, and cropped a large portion of the background out if it → this way, the images themselves could be the icons
    - Spent a few hours on photoshop to crop out some parts of the background of these images. Here is an example of how the images turned out:

![athena.jpg](Project%201%20%20e6ac7/athena.jpg)

![athena.png](Project%201%20%20e6ac7/athena.png)

## Coding Process

### Creating the Home Page

For the home page, I decided to create a simple design that contained just the title. This was actually one of the first things I started working on with the project’s code. It was something that I found to be quite straightforward, and I felt it would be a great place to get started. The HTML code was quite simple, with somesimple divs and an h1 tag... 

```html
<div class="container_home">
		<h1 class="container_home-title">Delve into the World of Greek Mythology...</h1>
</div>
```

```css
.container_home{
    width: 100%;
    height: 100vh;
    padding-top: 22%;
    background-image: url("./img/red_background.jpg");
    background-size: cover;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.container_home-title{
    width: 80%;
    font-size: 50px;
    font-weight: 700;
    display: flex;
}
```

### Creating the Images Timeline

While creating the homepage was rather straightforward to me, the timeline was a bit more tricky. To be able to later incorporate the JSON files into my HTML elements, I decided to create them through javascript. I decided to start with just the images, and began by simply running them through the loop to generate the images. 

- At first, I was a bit confused about how to have an image array and how to have it correctly correspond to the right heading. I quickly realized that the number of images is the same as the number of headings, so that same for loop used to generate the elements on the screen could be used to loop through the images... the [i] variable would be the same for both the image and heading.

```jsx
//Created an img tag, and used the same i variable that was used to access the data in my JSON file

let characterImages = document.createElement('img')
characterImages.setAttribute("src", "img/no-background/" + characterPics[i] + ".png")
```

Next, I was able to have the images alternate through CSS → having the odd elements on the left and the even ones on the right. 

- This later caused problems when I tried to add my text to the timeline and I had to use JS to alterante the content→ More on that in the section below about [Problems & Issues](https://www.notion.so/Project-1-Documentation-768eb8ab52664fd28b178f010bbee904).

![Screen Shot 2022-02-19 at 12.45.20 AM.png](Project%201%20%20e6ac7/Screen_Shot_2022-02-19_at_12.45.20_AM.png)

### Adding Scroll Animations

I would say that the final part was the most challenging for me. I personally have not had a lot of prior javascript experience, and this is the first time I am ever doing some aspects of this project. I searched a lot and found various different ways to add a scrolling animation, but I felt that “Intersection Observer” was the most straightforward approach, at least in terms of my understanding of the concept. 

- After a lot of google searches, youtube videos, and many trials and errors, I was able to figure it out. The reason I wanted to use this interaction was because the elements on the show would not load in unless there was avtion from the user.
    - If you take a closer look trhough the inspect tool, you would see that as the user scrolls, the class “show” would be assigned to the html elements, causing them to appear. Without the user’s input, the elements would remain invisible.

Here is what the final code for the scrolling interaction looked like: 

```jsx
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
```

I was debating using other forms of interaction. For example, having the user click on the icon, and then a pop-up appears and displays the information that corresponds to the character that was pressed.

- After thinking about it some more, and having some discussion with my classmates, I realized that it may not be the best approach. Looking at it as an experience, the website very strongly relies on scrolling, so it only made sense that the experience is completed as such.
    - Made the final decision of having the text appear with a scroll.

# Problems and Issues

1. My first issue, and the one that I feel caused my the most problems, was the timeline, or rather the way in which I had it generated. To preface, I do not have much experinece with JavaScript, so I am extremely proud of the way this project has turned at. With that being said, it did lead me into making a somewhat silly mistake that took me a couple of days to figure out. The way that I have the HTML elements generated into my page now is by creating elements in JS and using “appendChild” to add them into each other. 
    1. Since I had already started on the timeline by generating images, and since it had worked in that specific way, I devided to use the same method to add the text onto the screen. This meant creating a whole new set of divs and a whole new set of elements. In any other circumstance, this would have worked just as fine, but because I had wanted the text to appear next to the images, it did not work out so great. It took me longer than I would like to admit to realize that the reason the text kept appearing under the images rather than next to it was because of the way that I had structured my code... 
        1. After I was able to understand the logic behind it, fixing the mistake was easy. Here I split my work into divs within divs. First I generated my main content div, and within that I emebedded both my image div and my info div which alowed the images to appear side by side → This then lead to my next issue of alternating the images... 

Below are some images of the problem I was discussing:

![These omages would appear above this text → ](Project%201%20%20e6ac7/Screen_Shot_2022-02-19_at_12.45.20_AM%201.png)

These omages would appear above this text → 

![Screen Shot 2022-02-19 at 12.41.32 AM.png](Project%201%20%20e6ac7/Screen_Shot_2022-02-19_at_12.41.32_AM.png)

1. Once I had figured out the placement and made a few tweaks to my CSS, I ran into another issue, which was that my images and text were no longer alternating like I wanted them to. Again, this came back down to my JavaScript... When it was just images on the screen, the way I had alternated it was through CSS. Meaning I accessed the odd/even number of these elements → made it so the odd went to the rights & the even went to the right.
    1. This caused an issue because now that the text was appended as well, it was no longer possible. At first I was confused and tried to fix the same issue with the CSS, but  it did not work. Again, this took me a bit of time to figure out, but I realized that the reason this is happening was because of the way that the html elements have been pushed in through JS. I made it so it always appeared in the order of: image first & text next.
        1. The solution was rather simple: all I had to do was create a for loop to make it so that the image and text appear at a different order for odd vs even numbers... I am not quite sure if this makes much sense, but here is the final code of how I got the images to alternate: 
        
        ```jsx
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
        ```
        

# Next Steps

Overall, this project has been a great learning experience for me, and I am quite content with the results of my work. If I ever do plan to improve on this project in the future, there are 3 main things that come to mind when thinking of next steps: 

1. I want to be able to create a story-telling experience. This is a big one for me. The whole point of creating this website was to provide readers with an experience that is intriguing and attention grabbing. Right now, that seems to only be through the timeline, but I want it to expand way beyond that. I want to have an experience catered to each of these characters → have it so when you click on their icons, you are greeted by more animations and videos and all sorts of things that allow you to delve more and more into this fantasy world!
    1. Example: For Poseidon (God of the Sea), you could be greeted on the page with a ship wreck, but you can see that the crewmates are being carried by water into safety. It is unclear what the reason is, but if you pan over, you see a character in the far distance (Poseidon) being the one responsible. Something along the lines of a 5 - 10 second video that introduces the user into the page that has been catered to that character → After this, you are able to scroll onto the page to gain more information... (something along those lines).
2. Another thing I want to work on is definitions. This is less about the visual experience, and more the knowledge gained from the website, but there are many words that users would be unfamiliar with if running into for the first time. To keep it simple, all I want to do is have a text-box appear as you hover so that the user is able to take in the visuals as well as understand the content at the same time → I do not want the user to leave the website more confused than they came in!
3. Finally, this is also a small change that I feel would add to the experience → I want to add a search bar... At the moment, I do not have that many characters on my screen, but as I expand more, I imagine that scrolling to find your characters would be extremely tedious. I feel that adding a simple search bar at the top of the screen would easily remedy that issue. It is something small, but I feel it would make a huge difference in the long run.