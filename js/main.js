const clientID = 'YOUR_CLIENT_ID'; // Tiene que colocar su id de cliente aquí para que funcione. Recuerde que su ID no debe ser compartida.
const endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

const imgLink = document.getElementsByClassName('link-img');
const imgUnsplash = document.getElementsByClassName('unsplash-img');
const author = document.getElementsByClassName('image-author');

for (let i = 0; i < imgUnsplash.length; i++) {
    fetch(endpoint)
        .then(res => res.json())
        .then(jsonData => {
            imgUnsplash[i].src = jsonData.urls.regular;
            imgLink[i].setAttribute('href', jsonData.links.html);
            author[i].innerText = jsonData.user.name;
            author[i].setAttribute('href', jsonData.user.portfolio_url);
        })
        .catch(err => {
            console.log('Error: ' + err);
        });
}

for (let x = 0; x < author.length; x++) {
    if (
        author[x].getAttribute('href') === 'null' ||
        author[x].getAttribute('href') === '#'
    ) {
        author[x].setAttribute('href', 'https://unsplash.com/es');
    }
}
