$(document).ready(function() {
    $('.fixed-action-btn').floatingActionButton();
});

function redirectToIndex() {
    location = "/src/HTML/index.html"
}

function redirectToAboutMe() {
    location = "/src/HTML/AboutMe.html"
}
/* Demo purposes only */
var snippet = [].slice.call(document.querySelectorAll('.hover'));
if (snippet.length) {
    snippet.forEach(function(snippet) {
        snippet.addEventListener('mouseout', function(event) {
            if (event.target.parentNode.tagName === 'figure') {
                event.target.parentNode.classList.remove('hover')
            } else {
                event.target.parentNode.classList.remove('hover')
            }
        });
    });
}