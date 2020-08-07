// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const myAxios = axios.get('https://lambda-times-api.herokuapp.com/articles');
console.log(myAxios)

function cardMaker(object) {

    // Create Elements 

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

    // Create Classes

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // Content

    headline.textContent = object.headline;
    img.src = object.authorPhoto;
    span.textContent = `By ` + object.authorName;

    // Append

    imgContainer.appendChild(img);
    author.append(imgContainer, span);
    card.append(headline, author);
    
    

    // Event Listener

    card.addEventListener('click', event => {
        console.log(object.headline)
    })

    return card

}

const cardEntries = document.querySelector('.cards-container')

myAxios.then(response => {
    response.data.articles.bootstrap.forEach(article => {
        const articleCreator = cardMaker(article)
        cardEntries.appendChild(articleCreator)
    })
})
.catch(err => {
    console.log('Error!', err)
});

myAxios.then(response => {
    response.data.articles.javascript.forEach(article => {
        const articleCreator = cardMaker(article)
        cardEntries.appendChild(articleCreator)
    })
})
.catch(err => {
    console.log('Error!', err)
});

myAxios.then(response => {
    response.data.articles.jquery.forEach(article => {
        const articleCreator = cardMaker(article)
        cardEntries.appendChild(articleCreator)
    })
})
.catch(err => {
    console.log('Error!', err)
});

myAxios.then(response => {
    response.data.articles.node.forEach(article => {
        const articleCreator = cardMaker(article)
        cardEntries.appendChild(articleCreator)
    })
})
.catch(err => {
    console.log('Error!', err)
});

myAxios.then(response => {
    response.data.articles.technology.forEach(article => {
        const articleCreator = cardMaker(article)
        cardEntries.appendChild(articleCreator)
    })
})
.catch(err => {
    console.log('Error!', err)
});