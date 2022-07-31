const clientID = 'YOUR_CLIENT_ID'; // Tiene que colocar su id de cliente aquí para que funcione. Recuerde que su ID no debe ser compartida.
const endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

const imageLink = document.getElementsByClassName('link-img');
const imageUnsplash = document.getElementsByClassName('unsplash-img');
const creator = document.getElementsByClassName('image-author');

for (let i = 0; i < imageUnsplash.length; i++) {
	fetch(endpoint)
		.then(res => res.json())
		.then(jsonData => {
			imageUnsplash[i].src = jsonData.urls.regular;
			imageLink[i].setAttribute('href', jsonData.links.html);
			creator[i].innerText = jsonData.user.name;
			creator[i].setAttribute('href', jsonData.user.portfolio_url);
		})
		.catch(err => { console.log('Error: '+ err)});
}