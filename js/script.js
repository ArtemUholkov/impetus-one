const burger = document.querySelector('#burger');
const popup = document.querySelector('#popup');
const popupSlide = document.querySelector('#popupSlide');
const sliderItem = document.querySelectorAll('.our_requirements_content_item');
const sliderPhoto = document.querySelector('.our_requirements_img');
const body = document.body;

burger.addEventListener('click', burgerHandler);
popup.addEventListener('click', (e) => {
  burgerHandler(e);
});

sliderItem.forEach((e) => {
  e.addEventListener('click', () => {
    setImage(e, sliderItem);
  });
});

function burgerHandler(e) {
  if (popup.classList.contains('open')) {
    popup.classList.add('close');
    body.classList.remove('noscroll');
    popupSlide.classList.add('slideout');

    setTimeout(() => {
      popup.classList.remove('close');
      popup.classList.remove('open');
      popupSlide.classList.remove('slideout');
      popupSlide.classList.remove('slidein');
    }, 300);
  } else {
    body.classList.add('noscroll');
    popup.classList.add('open');
    popupSlide.classList.add('slidein');
  }
  burger.classList.toggle('active');
}
var className = 'inverted';
var scrollTrigger = 50;

window.onscroll = function () {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByClassName('header_wrapper')[0].classList.add(className);
  } else {
    document.getElementsByClassName('header_wrapper')[0].classList.remove(className);
  }
};

let activeFaqId = null;

function toggleAnswer(faqId) {
  const currentFaq = document.getElementById(faqId);
  const currentAnswerWrapper = currentFaq.querySelector('.answer-wrapper');
  const currentQuestionWrapper = currentFaq.querySelector('.question-wrapper');
  const currentSeparator = currentFaq.querySelector('.separator');

  if (activeFaqId && activeFaqId !== faqId) {
    // Collapse previously active FAQ
    const previousFaq = document.getElementById(activeFaqId);
    const previousAnswerWrapper = previousFaq.querySelector('.answer-wrapper');
    const previousQuestionWrapper = previousFaq.querySelector('.question-wrapper');
    const previousSeparator = previousFaq.querySelector('.separator');

    previousAnswerWrapper.style.maxHeight = null;
    previousAnswerWrapper.style.opacity = 0;
    previousSeparator.style.opacity = 0;
    previousQuestionWrapper.classList.remove('active');
  }

  if (activeFaqId === faqId) {
    // Collapse current if it's the same one clicked
    currentAnswerWrapper.style.maxHeight = null;
    currentAnswerWrapper.style.opacity = 0;
    currentSeparator.style.opacity = 0;
    currentQuestionWrapper.classList.remove('active');
    activeFaqId = null; // Reset activeFaqId
  } else {
    // Expand current FAQ
    currentAnswerWrapper.style.maxHeight = currentAnswerWrapper.scrollHeight + 'px';
    currentAnswerWrapper.style.opacity = 1;
    currentSeparator.style.opacity = 1;
    currentQuestionWrapper.classList.add('active');
    activeFaqId = faqId; // Set the new active FAQ
  }
}
document.querySelector('#faq-click').click();
