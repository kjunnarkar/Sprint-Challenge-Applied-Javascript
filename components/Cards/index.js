// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        console.log(response.data.articles);
        const dataArticles = response.data.articles;
        const convertObjects = Object.keys(dataArticles);
        console.log(convertObjects);
        convertObjects.forEach(element => {
            const subjects = dataArticles[element];
            subjects.forEach(newsArticle => {
                const addArticle = createArticle(newsArticle);
                appendCards = document.querySelector('.cards-container');
                appendCards.appendChild(addArticle);
            })
        })    
    })
    .catch(error => {
        console.log('Error: Did not receive data', error);
    })

function createArticle(data) {
    
    //create elements
    const mainCard = document.createElement('div');
    const articleHeadline = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorName = document.createElement('span');

    //create classes
    mainCard.classList.add('card');
    articleHeadline.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    //create text contents
    articleHeadline.textContent = data.headline;
    authorImg.src = data.authorPhoto;
    authorName.textContent = (`By ${data.authorName}`);

    //append contents
    mainCard.appendChild(articleHeadline);
    mainCard.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    authorDiv.appendChild(authorName);

    return mainCard;
}
