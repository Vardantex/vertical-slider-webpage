
const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
// Select all div on the right (bg images)
const slidesLength = slideRight.querySelectorAll('div').length 


let activeSlideIndex = 0; 


slideLeft.computedStyleMap.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))


const changeSlide = (direction) => {

    // calculates height
    const sliderHeight = sliderContainer.clientHeight
    console.log(sliderHeight);

    if(direction === 'up') {
        activeSlideIndex++;
        if(activeSlideIndex > slidesLength - 1 ) {
            activeSlideIndex = 0;
        }
    } else if(direction === 'down') {
        activeSlideIndex--;
        if(activeSlideIndex < 0 ) {
            activeSlideIndex = slidesLength -1;
        }
    }

    // transform the images to change when clicking up
slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`

}


