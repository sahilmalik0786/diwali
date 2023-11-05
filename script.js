var menuButton = document.querySelector('.menu-button');
    var openMenu = function () {
      swiper.slidePrev();
    };
    var swiper = new Swiper('.swiper3', {
      slidesPerView: 'auto',
      initialSlide: 1,
      resistanceRatio: 0,
      slideToClickedSlide: true,
      on: {
        slideChangeTransitionStart: function () {
          var slider = this;
          if (slider.activeIndex === 0) {
            menuButton.classList.add('cross');
            // required because of slideToClickedSlide
            menuButton.removeEventListener('click', openMenu, true);
          } else {
            menuButton.classList.remove('cross');
          }
        },
        slideChangeTransitionEnd: function () {
          var slider = this;
          if (slider.activeIndex === 1) {
            menuButton.addEventListener('click', openMenu, true);
          }
        },
      },
    })
    
    gsap.from("#img1", {
      delay:0.6,
      opacity:0,
      duration:3,
      y:70
    })
   