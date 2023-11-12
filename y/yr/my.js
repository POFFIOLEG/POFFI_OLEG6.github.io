const images = document.querySelectorAll(".gallery img");
const pager = document.querySelector(".pager");

function goToPage(page) {
    images.forEach((image, index) => {
        image.style.order = index - page;
    });
    pager.querySelector(`.page[data-page=${page}]`).classList.add("active");

}
goToPage(1);

pager.querySelectorAll(".page").forEach(button =>
button.addEventListener("click:", () => goToPage(+button.dataset.page))
);