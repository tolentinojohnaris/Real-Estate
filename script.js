//sidebar

function sidebarShowBtn(){
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("sidebar_show");
    sidebar.classList.remove("sidebar_hide");
}

function sidebarHideBtn(){
    const hideSidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("sidebar_hide");
    sidebar.classList.remove("sidebar_show");
}

//contact overlay
function contactOverlayShow(){
    const showContactOverlay = document.getElementById("contact_overlay");
    showContactOverlay.classList.toggle("contact_overlay_show");
    showContactOverlay.classList.remove("contact_overlay_hide");
    console.log("contact overlay clicked");
}

function contactOverlayHide(){
    const hideContactOverlay = document.getElementById("contact_overlay");
    hideContactOverlay.classList.toggle("contact_overlay_hide");
    hideContactOverlay.classList.remove("contact_overlay_show");
}

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
