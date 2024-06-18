new Glide('.glide', config).mount();

const config = {
    type: "carousel",
    perView: 3,
    breakpoints: {
        380: {
            perView: 1,
        }
    },
    arrows: {
        prev: 'glide__arrow glide__arrow--left',
        next: 'glide__arrow glide__arrow--right',
    }
};

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "block";
    } else {
        x.style.display = "block";
    }
}