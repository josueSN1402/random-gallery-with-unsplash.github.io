let clientID = 'YOUR_CLIENT_ID'; // Tiene que colocar su id de cliente aquí para que funcione. Recuerde que su ID no debe ser compartida.
let endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

const imgLink = document.getElementsByClassName('link-img');
const imgUnsplash = document.getElementsByClassName('unsplash-img');
const author = document.getElementsByClassName('image-author');

const defaultImage = (index) => {
    imgUnsplash[index].src = 'https://images.unsplash.com/photo-1659183712702-51419775bfe1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80';
    imgLink[index].setAttribute('href', 'https://unsplash.com/es/fotos/NNLoFLp-2Do');
    author[index].innerText = 'Julien Riedel';
    author[index].setAttribute('href', 'https://unsplash.com/es/@djulien');
}

const hrefHashtagOrNull = (index) => {
    if (author[index].getAttribute('href') === 'null') {
        author[index].setAttribute('href', 'https://unsplash.com/es');
    }
}

for (let x = 0; x < imgUnsplash.length; x++) {
    fetch(endpoint)
        .then(res => res.json())
        .then(jsonData => {
            imgUnsplash[x].src = jsonData.urls.regular;
            imgLink[x].setAttribute('href', jsonData.links.html);
            author[x].innerText = jsonData.user.name;
            author[x].setAttribute('href', jsonData.user.portfolio_url);
            hrefHashtagOrNull(x);
        })
        .catch(err => {
            defaultImage(x);
            console.clear();
        });
}
