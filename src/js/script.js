function slidesPlugin(activSlide = 2) {
    
    let slides = document.querySelectorAll(".slide");

    slides[activSlide].classList.add("active");

    slides.forEach(item => {
        item.addEventListener("click", () => {

            cleareClasses();

            item.classList.add("active");
        });
    });

    const cleareClasses = () => {
        slides.forEach(item => {
            item.classList.remove("active");
        });
    };
}

slidesPlugin();