/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function createCarousel() {

//create elements
const mainDiv = document.createElement('div');
const ltButtonDiv = document.createElement('div');
const mtnImg = document.createElement('img');
const computerImg = document.createElement('img');
const treesImg = document.createElement('img');
const tableImg = document.createElement('img');
const rtButtonDiv = document.createElement('div');

//create classes
mainDiv.classList.add('carousel');
ltButtonDiv.classList.add('left-button');
rtButtonDiv.classList.add('right-button');

//add text content
mtnImg.src = './assets/carousel/mountains.jpeg';


return mainDiv;
}
