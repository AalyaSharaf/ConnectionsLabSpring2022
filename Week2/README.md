# Week 2 Assignment

## Project Idea

For this project, we had to have 2 user interactions. I knew that I wanted to go along the lines of an image carousel, since that is something that I did not have much practice on. I've seen examples of people creating image carousels, but never tried it myself, so I knew that that was the route I wanted to go down.

My website this week is essentailly an "image library". What I mean by that, is there are categories to choose from, and based off of the category that is chosen, certain images will be displayed. To further elaborate, on my website, there are two choices: "Animals" and "Nature". The category that you choose, will determine which images will be displayed on the image carousel...

This way, I was able to work on the image carousel, which adding a second interaction of changing the category of images. Here is an image of the wireframe that I cam up with during my brainstormng process: 

## Process

Like I mentioned, an image carousel is not something that I had attempted to create before, so figuring out the steps was a bit difficult... I knew that I had to create an array, since using a sequence of images is something that I am familiar with, but it is the implementation that I struggled with.

1. I created the skeleton of the website and created the elements I wanted displayed on the screen. That included things like: the title, buttons, images, etc...
2. I gathered the images I knew I wanted to display on the screen and put them all into one folder. I also made sure to name them in a way that would allow them to be effectively used in an array... For example: animal1, animal2, animal3, and so on...
3. Once I had everything HTML and image related ready, I moved onto the javaScript. Based off of class demos, I had a general idea of how to make buttons work, but it was the implementation of the images that I had to figure out. I had a general understanding of how an array could be used with images, so it was just trial and error from there
4. After that, I made sure to style the page in a way that would be appealing to the user!

## Difficulties / Issues

Working on this project was not always smooth sailing, and I had a few bumps along the way. While there were a few minor issue here and there when figuring out the carousel itself, my biggest problem came from the intersection of images within the different categories. To clarify, when the user picks one of the categories, it should be that only the images from the category are displayed. While I was able to make it so the correct images would correspond with the correct categories, sometimes it would glitch and the images would mix together. It makes sense why it is happening, because the way that I've coded it makes it so the images are loaded in regardless of what category is chosen, so I think sometimes it is just a matter of one image loading in before the other, which then causes the mix up... I just have not been able to find a solution for the problem.

The second major problem I ran into, was the image progression. In order for the carousel to work, I am using a counter. The problem lies in the fact that I am using different "categories" in my code. When it is simply just an image carousel, then the code works fine, but when I implemented the second aspect of categories and different image groups, that's when things started getting tricky. Since I had a counter running for each of the categories, the numbers would add up. I feel like taking a look at the code as well as the console would provide a better explanation, but I will do my best to explain here! When the button is pressed for the carousel, then the counter's number increases. The problem is, when switching between categories, instead of the counter working like it is supposed to, going in a specific sequence pattern (1, 2, 3, 4), it begins to skip numbers which then means it skips images (goes something like 1, 3, 5, 7 ,9 ,2...). I have spent countless hours trying to figure it out but have not had any luck. At first, I tried to remedy it by creating a separate counter for each of the categories, and it works when you first open the website, but again, if you start switching subjects, then we run into the same problem.

Another thing I do regret about this project, is that it does not feel very intuitive. I understand that user experience is extremely important in this class, but I feel like I could only focus on so amny things at once, so in this situation, trying to get it to simply work, took precedence. It is definitely something that I want to put more focus on in future projects.

In conclusion, this project is not without flaws! It is not even fully working like I expected it to, but the general ideas are there. As much as I tried to figure it out, I was unable to, so I honestly look forward to taking this as a learning opportunity...

