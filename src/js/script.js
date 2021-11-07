let slides = document.querySelectorAll(".slide");

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