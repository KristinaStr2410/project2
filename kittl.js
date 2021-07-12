var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    slideIndex = n;
    showSlides(slideIndex);
}

function showSlides(n) {
    var slides = document.getElementsByClassName('item');
    var dots = document.getElementsByClassName('slider-dots_item');

    if(n>slides.length){
        slideIndex = 1;
    }

    if(n<1){
        slideIndex = slides.length;
    }

    for(var i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }

    for(var i=0; i<dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }

    slides[slideIndex -1].style.display = 'block';

    dots [slideIndex -1].className += ' active'
}



function showSecondForm() {
    var form1 = document.getElementById('first_form');
    form1.style.display = 'none';
    var form2 = document.getElementById('second_form');
    form2.style.display = 'block';

}

function showFirstForm() {
    var form1 = document.getElementById('first_form');
    form1.style.display = 'block';
    var form2 = document.getElementById('second_form');
    form2.style.display = 'none';

}

