//testimonial JS
const testimonialCol = document.querySelector(".testimonial-col");
const testimonialWrapper = document.getElementById("testimonial-wrapper");
const testimonialNext = document.getElementById("testimonial-next");
const testimonialPrev = document.getElementById("testimonial-prev");


testimonialNext.addEventListener("click", () => {
    const slideWidth = testimonialCol.clientWidth;
    testimonialWrapper.scrollLeft += slideWidth;
});

testimonialPrev.addEventListener("click", () => {
    const slideWidth = testimonialCol.clientWidth;
    testimonialWrapper.scrollLeft -= slideWidth;
});
console.log(testimonialCol);