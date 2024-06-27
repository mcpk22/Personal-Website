document.addEventListener("DOMContentLoaded", function() {

    function HeaderChange(){
        const Header = document.getElementById("OGheader");
        const hamburger = document.querySelector(".menu-wrap");
        
        if (window.innerWidth <= 768){
            Header.style.display = "none";
            Header.style.opacity = "0";
        }
        else{
            Header.style.display = "block";
        }
    }
    

    function updateImageSource() {
        const aboutImage = document.getElementById("about-image");
        const landingImage = document.getElementById("landing-image");
        if (window.innerWidth <= 768) {
        aboutImage.src = "about-mobile.jpg";
        landingImage.src = "landing-mobile.jpg";
        } else {
        aboutImage.src = "about.jpg";
        landingImage.src = "landing.jpg";
        }
    }

    function changeImage() {
        const imgElement = document.getElementById("landing-image");
        const newSrc = window.innerWidth <= 768 ? "about-mobile.jpg" : "about.jpg";
        const fadeOutClass = window.innerWidth <= 768 ? "fade-out-up" : "fade-out-right";
        const fadeInClass =  window.innerWidth <= 768 ? "fade-in-up" : "fade-in-left";
        //imgElement.classList.add("fade-out-right");

        imgElement.classList.add(fadeOutClass);

        imgElement.addEventListener('transitionend', function() {
            imgElement.src = newSrc;
            imgElement.classList.remove(fadeOutClass);
            // imgElement.classList.add("fade-in-left");
        }, { once: true });

        const aboutButton = document.getElementById("about-btn");
        const introBox = document.getElementById("intro-box");
        aboutButton.style.display = 'none';
        introBox.style.opacity = "1";
        introBox.style.transition = "opacity 1.8s ease-in-out";
        introBox.style.display = "flex";
    }

    function undoImage() {
        const imgElement = document.getElementById("landing-image");
        const originalSrc = window.innerWidth <= 768 ? "landing-mobile.jpg" : "landing.jpg";
        const fadeOutClass = window.innerWidth <= 768 ? "fade-out-down" : "fade-out-left";
        const fadeInClass =  window.innerWidth <= 768 ? "fade-in-down" : "fade-in-right";
        //imgElement.classList.add("fade-out-left");

        imgElement.classList.add(fadeOutClass);

        imgElement.addEventListener('transitionend', function() {
            imgElement.src = originalSrc;
            imgElement.classList.remove(fadeOutClass);
            // imgElement.classList.add("fade-in-right");
        }, { once: true });

        //const aboutButton = document.getElementById("about-btn");
        const introBox = document.getElementById("intro-box");
        aboutButton.style.opacity = '1';
        aboutButton.style.display = 'flex';
        introBox.style.opacity = "0";
        introBox.style.display = "none";
    }

    HeaderChange();
    const aboutButton = document.getElementById("about-btn");
    aboutButton.addEventListener("click", changeImage);

    const closeButton = document.getElementById("close-button");
    closeButton.addEventListener("click", undoImage);
    const introBox = document.getElementById("intro-box");
    const Checkbox = document.getElementById("checkbox");
    Checkbox.addEventListener("click", function(){
        if (Checkbox.checked){
            aboutButton.style.display = "none";
            introBox.style.opacity = "0";
            introBox.style.display = "none;"
        } else {
            aboutButton.style.display = "flex";
            introBox.style.display = "flex;"
        }
    })
    
    window.addEventListener("resize", updateImageSource);
    updateImageSource(); // Initial call
    
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry);
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
