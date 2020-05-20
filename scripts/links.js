// all functions related to fetching, parsing, and displaying links
window.onload = async (event) => {
    const links = await fetchLinks();
    // console.log(`Links: ${JSON.stringify(links)}`);
    const linksElement = document.getElementById('links');
    const categories = links.categories || [];
    // console.log(`Categories: ${JSON.stringify(categories)}`);

    categories.forEach(category => {
        // create a card
        const cardElement = createElement('div', 'card');
        const headerElement = document.createElement('h3');
        headerElement.innerText = category.name;

        cardElement.appendChild(headerElement);

        // for each link in the category...
        category.values.forEach(link => {
            // console.log(`LINK: ${JSON.stringify(link)}`);

            // create the link
            const anchorElement = createAnchor(link.name, link.uri);
            const attr = document.createAttribute("class");
            anchorElement.setAttributeNode(attr);
            anchorElement.classList.add('site-link');

            // if there is an icon
            if (link.icon) {
                // add the icon
                const iconElement = createElement('i', 'icon', 'fa', 'fa-lg', link.icon);
                const ariaAttr = document.createAttribute('aria-hidden');
                ariaAttr.value = "true";
                iconElement.setAttributeNode(ariaAttr);

                anchorElement.appendChild(iconElement);
            } else {
                // otherwise, create a spacer
                const iconSpacerElement = createElement('div', 'icon');
                anchorElement.appendChild(iconSpacerElement);
            }
            const text = document.createTextNode(link.name);
            anchorElement.appendChild(text);
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

function createElement(elementName, ...withClasses) {
    const element = document.createElement(elementName);

    if (withClasses) {
        const attr = document.createAttribute("class");
        element.setAttributeNode(attr);
        withClasses.forEach(classname => {
            element.classList.add(classname);
        });
    }

    return element;
}

function createAnchor(name, uri) {
    const anchorElement = document.createElement("a");
    const href = document.createAttribute("href");
    href.value = uri;
    anchorElement.setAttributeNode(href);

    return anchorElement;
}
