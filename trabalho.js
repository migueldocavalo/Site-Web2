let slideIndex = 0;

function showSlides() {
    const slides = document.querySelectorAll(".carousel-images img");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex >= slides.length) {slideIndex = 0}    
    slides[slideIndex].style.display = "block";  
    setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}

function moveSlide(n) {
    const slides = document.querySelectorAll(".carousel-images img");
    slideIndex += n;
    if (slideIndex >= slides.length) {slideIndex = 0}
    if (slideIndex < 0) {slideIndex = slides.length - 1}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}

// Inicia o carrossel
showSlides();
