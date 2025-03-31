// Recent post swipe

function swipeArticle() {

    const articles = document.querySelectorAll(".t-r-grid-item");
    for (let i=0; i < articles.length; i++){
        const article = articles[i];  
        if (article.dataset.status === 'shown') {
            article.style.display = 'none';
        } else if (article.dataset.status === 'hidden') {
            article.style.display = 'block';  
        } 
    }
    nextButton.removeEventListener;
    nextButton.style.display = 'none';
    backButton.style.display = 'block'; 
    backButton.addEventListener('click', swipeBack);
}

function swipeBack() {    
    const articles = document.querySelectorAll(".t-r-grid-item");
    
    for (let i=0; i < articles.length; i++){

        const article = articles[i]; 

        if (article.dataset.status === 'hidden') {
            article.style.display = 'none';
        } else if (article.dataset.status === 'shown') {
            article.style.display = 'block';  
        }
    }
    
    backButton.removeEventListener;
    backButton.style.display = 'none';
    nextButton.style.display = 'block'; 
}


const backButton = document.querySelector('[data-order="first"]');
const nextButton = document.querySelector('[data-order="second"]');
nextButton.addEventListener('click', swipeArticle);

// Travel resourses show more: NOT WORKING

function showMoreFunction() {
    console.log('click');

    const resources = document.querySelectorAll("#travel-resourses-container .t-r-grid-container .t-r-grid-item");

    for (let i = 0; i < resources.length; i++) {
        const resource = resources[i]; 
        if (resource.dataset.type === 'mobile-hidden') {
            resource.style.display = 'grid';
        }
    }
    showMoreButton.removeEventListener("click", showMoreFunction);
    showMoreButton.style.display = 'none';
}

const showMoreButton = document.getElementById('show-more');
showMoreButton.addEventListener('click', showMoreFunction);
