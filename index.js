//  Consts

const apikey = "3170172d7f0c02101c6987461140683e";
const apiEndpoint = "https://api.themoviedb.org/3/";

const apiPaths = {
    fetchAllCategories: `${apiEndpoint}movie/11?api_key=${apikey}`
}

// Boots up the app 
function init() {
    fetchAndBuildAllSections();
}

function fetchAndBuildAllSections() {
    fetch(apiPaths.fetchAllCategories)
        .then(res => res.json())
        .then(res => {
            const categories = res.genres;
            if (Array.isArray(categories) && categories.length) {
                categories.forEach(category => {
                    fetchAndBuildAllSections(category)
                });
            }
            console.table(movies);
        })
        .catch(err => console.log(err));
}

function buldMovieSection(category) {
    console.log(category);
}

window.addEventListener('load', function () {
    init()
});
