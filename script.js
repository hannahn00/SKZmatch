document.addEventListener("DOMContentLoaded", function() {

    function createCarousel(media, carouselInner) {
        shuffleArray(media);

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

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // UPPER media array
    let UPmedia = ["image1.jpg", "image2.jpg", "image3.jpg"];
    let UPcarouselInner = document.querySelector('.UPcarousel-inner');
    createCarousel(UPmedia, UPcarouselInner);

    // SHIRTS media array
    let SHIRTSmedia = ["image1.jpg", "image2.jpg", "image3.jpg"];
    let SHIRTScarouselInner = document.querySelector('.SHIRTScarousel-inner');
    createCarousel(SHIRTSmedia, SHIRTScarouselInner);
    
    // PANTS media array
    let PANTSmedia = ["image1.jpg", "image2.jpg", "image3.jpg"];
    let PANTScarouselInner = document.querySelector('.PANTScarousel-inner');
    createCarousel(PANTSmedia, PANTScarouselInner);
    
    // SHOES media array
    let SHOESmedia = ["image1.jpg", "image2.jpg", "image3.jpg"];
    let SHOEScarouselInner = document.querySelector('.SHOEScarousel-inner');
    createCarousel(SHOESmedia, SHOEScarouselInner);
    
    document.getElementById('startCarousel').addEventListener('click', function () {
        $('#UPcarousel').carousel('cycle');
        $('#SHIRTScarousel').carousel('cycle');
        $('#PANTScarousel').carousel('cycle');
        $('#SHOEScarousel').carousel('cycle');
    });

    // Handle button click to stop the carousel
    document.getElementById('stopCarousel').addEventListener('click', function () {
        $('#UPcarousel').carousel('pause');
        $('#SHIRTScarousel').carousel('pause');
        $('#PANTScarousel').carousel('pause');
        $('#SHOEScarousel').carousel('pause');
    });

    

});
