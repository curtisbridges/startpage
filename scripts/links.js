// all functions related to fetching, parsing, and displaying links
window.onload = async (event) => {
    const links = await fetchLinks();
    // console.log(`Links: ${JSON.stringify(links)}`);
    const linksElement = document.getElementById('links');
    const categories = links.categories || [];
    // console.log(`Categories: ${JSON.stringify(categories)}`);

    categories.forEach(category => {
        // create a card
        const cardElement = createDiv('card');
        const headerElement = document.createElement('h3');
        headerElement.innerText = category.name;

        cardElement.appendChild(headerElement);

        // for each link in the category...
        category.values.forEach(link => {
            // ... create a link in the html
            const anchorElement = createAnchor(link.name, link.uri);
            cardElement.appendChild(anchorElement);
        });

        linksElement.appendChild(cardElement);
    });
}

async function fetchLinks() {
    const response = await fetch('./config/links.json');
    // console.log(response);
    const json = await response.json();
    // console.log(json);
    return json;
}

function createDiv(withClass) {
    const divElement = document.createElement('div');

    if (withClass) {
        const attr = document.createAttribute("class");
        divElement.setAttributeNode(attr);
        divElement.classList.add(withClass);
    }

    return divElement;
}

function createAnchor(name, uri) {
    const anchorElement = document.createElement("a");
    const href = document.createAttribute("href");
    href.value = uri;
    anchorElement.setAttributeNode(href);
    anchorElement.innerText = name;

    return anchorElement;
}
