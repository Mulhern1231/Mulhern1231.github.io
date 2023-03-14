
// Переводчик
function toggleLanguage() {
    var enElements = document.getElementsByClassName("en");
    var ruElements = document.getElementsByClassName("ru");
  
    // Проверяем, какой язык отображается сейчас и переключаем его на другой язык
    if (enElements[0].style.display === "none") {
      // Показываем элементы с классом "en" и скрываем элементы с классом "ru"
      for (var i = 0; i < enElements.length; i++) {
        enElements[i].style.display = "block";
      }
      for (var j = 0; j < ruElements.length; j++) {
        ruElements[j].style.display = "none";
      }
    } else {
      // Показываем элементы с классом "ru" и скрываем элементы с классом "en"
      for (var k = 0; k < ruElements.length; k++) {
        ruElements[k].style.display = "block";
      }
      for (var l = 0; l < enElements.length; l++) {
        enElements[l].style.display = "none";
      }
    }
  }

var userLang = navigator.language || navigator.userLanguage;

if (userLang.indexOf("ru") === 0) {
    toggleLanguage()
}


//Скролл
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    const targetPosition = targetElement.offsetTop - 100;
    const startPosition = window.pageYOffset;
    
    const distance = targetPosition - startPosition;
    const duration = 1000; // в миллисекундах

    animateScroll(startPosition, distance, duration);
  });
});

// Функция для анимации прокрутки
function animateScroll(start, distance, duration) {
  const startTime = performance.now();
  
  function step(currentTime) {
    const elapsedTime = currentTime - startTime;
    const position = easeInOut(elapsedTime, start, distance, duration);
    window.scrollTo(0, position);
    if (elapsedTime < duration) {
      requestAnimationFrame(step);
    }
  }
  
  function easeInOut(t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return c / 2 * t * t + b;
    }
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  
  requestAnimationFrame(step);
}
