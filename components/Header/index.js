// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

//create elements
const mainHeader = document.createElement('div');
const dateSpan = document.createElement('span');
const titleH1 = document.createElement('h1');
const tempSpan = document.createElement('span');

//create classes
mainHeader.classList.add('header');
dateSpan.classList.add('date');
tempSpan.classList.add('temp');

//create text content
dateSpan.textContent = 'March 28, 2019';
titleH1.textContent = 'Lambda Times';
tempSpan.textContent = '98°';

//append content
mainHeader.appendChild(dateSpan);
mainHeader.appendChild(titleH1);
mainHeader.appendChild(tempSpan);

const appendParent = document.querySelector('.header-container');
appendParent.appendChild(mainHeader);

return mainHeader;

}

Header()
