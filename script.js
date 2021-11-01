

// Side Nav Script

function closeNav() {
    document.getElementById('sidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('icon-side').style.display = "none";
    document.getElementById('icon-extend').style.display = "block";
}

function openNav() {
    document.getElementById('sidenav').style.width = '180px';
    document.getElementById('main').style.marginLeft = '180px';
    document.getElementById('icon-side').style.display = "block";
    document.getElementById('icon-extend').style.display = "none";
}

// Dark Mode

function darkMode() {
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('body').style.color = "#edf0f1";
    document.getElementById('sidenav').style.backgroundColor = '#222';
    document.getElementById('sidenav').style.color = '#edf0f1';
    document.getElementById('icon-dark').style.display = "none";
    document.getElementById('icon-bright').style.display = "block";
}

function brightMode() {
    document.querySelector('body').style.backgroundColor = "#edf0f1";
    document.querySelector('body').style.color = "#222";
    document.getElementById('sidenav').style.backgroundColor = '#edf0f1';
    document.getElementById('sidenav').style.color = '#222';
    document.getElementById('icon-dark').style.display = "block";
    document.getElementById('icon-bright').style.display = "none";
}

function openPhoto() {
    document.getElementById('mobile').style.display = "block";
    document.getElementById('signup').style.display = "none";
    document.getElementById('slides').style.display = "none";
    document.getElementById('dtp').style.display = "none";
    document.getElementById('home-page').style.display = "none";
    document.getElementById('login').style.display = "none";
    document.getElementById('sidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('icon-side').style.display = "none";
    document.getElementById('icon-extend').style.display = "block";
}

function openVideo() {
    document.getElementById('dtp').style.display = "block";
    document.getElementById('signup').style.display = "none";
    document.getElementById('mobile').style.display = "none";
    document.getElementById('home-page').style.display = "none";
    document.getElementById('slides').style.display = "none";
    document.getElementById('login').style.display = "none";
    document.getElementById('sidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('icon-side').style.display = "none";
    document.getElementById('icon-extend').style.display = "block";
}

function home() {
    document.getElementById('home-page').style.display = "block";
    document.getElementById('signup').style.display = "none";
    document.getElementById('dtp').style.display = "none";
    document.getElementById('mobile').style.display = "none";
    document.getElementById('login').style.display = "none";
    document.getElementById('slides').style.display = "none";
    document.getElementById('sidenav').style.width = '0';
    document.getElementById('main').style.marginLeft = '0';
    document.getElementById('icon-side').style.display = "none";
    document.getElementById('icon-extend').style.display = "block";
}

function login() {
    document.getElementById('login').style.display = "flex";
    document.getElementById('home-page').style.display = "none";
    document.getElementById('signup').style.display = "none";
    document.getElementById('dtp').style.display = "none";
    document.getElementById('slides').style.display = "none";
    document.getElementById('mobile').style.display = "none";
}

function signup() {
    document.getElementById('signup').style.display = "flex";
    document.getElementById('login').style.display = "none";
    document.getElementById('slides').style.display = "none";
    document.getElementById('home-page').style.display = "none";
    document.getElementById('dtp').style.display = "none";
    document.getElementById('mobile').style.display = "none";
}

// Slide Show

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
}