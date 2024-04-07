/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json";
let templeList = [];

/* async displayTemples Function */
async function displayTemples(temples) {
    temples.forEach(temple => {
        // Create <article> element
        const article = document.createElement('article');

        // Create <h3> element and set templeName as its text content
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        // Create <img> element, set imageUrl as src and location as alt
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        // Append <h3> and <img> elements to <article>
        article.appendChild(h3);
        article.appendChild(img);

        // Append <article> to templesElement
        document.getElementById('temples').appendChild(article);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch(templesElement);
    templeList = await response.json();
    displayTemples(templeList);
};

/* reset Function */
const reset = () => {
    const articles = document.getElementById('temples').querySelectorAll('article');
    articles.forEach(article => {
        article.parentNode.removeChild(article);
    });
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();
    const filter = document.getElementById('filtered').value;
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            console.log('Invalid filter value');
    }
};

/* Event Listener */
document.getElementById('filtered').addEventListener('change', () => {
    filterTemples(templeList);
});

/* Initial call to get temples */
getTemples();