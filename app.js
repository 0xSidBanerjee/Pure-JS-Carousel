let currentSlide=0;
const slides=document.getElementsByClassName('carouselItem');
let totalSlides=slides.length;
console.log(slides.length);

document.getElementById('prevBtn').onclick=function(){
    if(currentSlide == 0){
        currentSlide = slides.length-1;
    }
    else
    {
        currentSlide --;
    }
    updateSlide();
}

document.getElementById('nextBtn').onclick=function(){
    if(currentSlide === slides.length-1){
        currentSlide = 0;
    }
    else
    {
        currentSlide ++;
    }
    updateSlide();
}

function updateSlide(){
    for(let slide of slides){
        slide.classList.remove('carouselItemVisible');
        slide.classList.add('carouselItemHidden');
    }
    slides[currentSlide].classList.add("carouselItemVisible");
}
