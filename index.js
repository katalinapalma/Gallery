
function init() {
    initNavigtaion();
}
// function that creates the div wrapper for the 3 links, we also create the 3 links and give them IDs
function initNavigtaion() {
    var navWrapp = document.createElement('DIV');
    navWrapp.setAttribute('id', 'navigationWrapper');
    document.body.appendChild(navWrapp);
    
    for (var i = 0; i < 3; i++) {
        var myNav = document.createElement('a');
        myNav.setAttribute('id', 'link' + i);
        myNav.innerHTML = "Länk";
        myNav.href = "#";
        document.body.appendChild(myNav);
        navWrapp.appendChild(myNav);
    }
    // Get the IDs from the links so we can seperate them when we click
    imgNav = document.getElementById('link0');
    imgNav.addEventListener('click', clickOnLink);
    newImgNav = document.getElementById('link1');
    newImgNav.addEventListener('click', clickOnNewImg);
    galleryNav = document.getElementById('link2');
    galleryNav.addEventListener('click', clickOnGallery);
}

function clickOnLink() {
    alert('Image');
}
function clickOnNewImg() {
    alert('new image')
}
function clickOnGallery() {
    alert('gallery');
}

window.addEventListener('load', function() {
    init();
});