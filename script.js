document.addEventListener("DOMContentLoaded", function() {

    function createCarousel(media, carouselInner) {
        media.forEach((item, index) => {
            let carouselItem = document.createElement("div");
            carouselItem.classList.add("carousel-item");
            if (index == 0) {
            carouselItem.classList.add("active");
            }
            let img = document.createElement("img");
            img.src = item;
            carouselItem.append(img);
            carouselInner.append(carouselItem);
        });
    }

    // UPPER media array
    let UPmedia = ["image1.jpg", "image2.jpg", "image3.jpg"];
    let UPcarouselInner = document.querySelector('.UPcarousel-inner');
    createCarousel(UPmedia, UPcarouselInner);

    // SHIRTS media array
    let SHIRTSmedia = ["image1.jpg", "image2.jpg", "image3.jpg"];
    let SHIRTScarouselInner = document.querySelector('.SHIRTScarousel-inner');
    createCarousel(SHIRTSmedia, SHIRTScarouselInner);

});
