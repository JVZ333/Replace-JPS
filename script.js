document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".carousel-slide");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide) => {
        slide.style.display = "none";
      });
      slides[index].style.display = "block";
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    setInterval(nextSlide, 3000);
  
    // Mostrar o primeiro slide ao carregar a página
    showSlide(currentSlide);
  });
  