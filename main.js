// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("sliderr");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }



// var slideIndex2 = 1;
// showSlides2(slideIndex2);

// function plusSlides2(n) {
//   showSlides2(slideIndex2 += n);
// }

// function currentSlide2(n) {
//   showSlides2(slideIndex2 = n);
// }

// function showSlides2(n) {
//   var i;
//   var content3ndc = document.getElementsByClassName("content3_ndc");
  
//   if (n > content3ndc.length) {slideIndex2 = 1}    
//   if (n < 1) {slideIndex2 = content3ndc.length}
//   for (i = 0; i < content3ndc.length; i++) {
//       content3ndc[i].style.display = "none";  
//   }
//   for(i=slideIndex2-1;i<content3ndc.length;i++){
//       if(i>=content3ndc.length){
//           i=i-n+1
//       }
      
//       content3ndc[i].style.display = "inline-block"; 
//   }
   
  
// }

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

var modalClose=document.querySelector('.modal-close')
var modalOpen=document.querySelector('.menu-nav')
var modal=document.querySelector('.header_modal')
function mo(){
    modal.style.width="100%"
   document.querySelector('.modal-chinh').style.display='flex';
}
function dong(){
    modal.style.width="0%"
    document.querySelector('.modal-chinh').style.display='none'

}
var swipee=document.querySelectorAll('.swiper')
if(screen.width>=1024){
     swipee[1].classList.add('mySwiper2')
     var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 4,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}
else if(screen.width<=768&&screen.width>375){
  swipee[1].classList.add('mySwiper21')
     var swiper21 = new Swiper(".mySwiper21", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}
else if(screen.width<=375){
  swipee[1].classList.add('mySwiper211')
  var swiper211 = new Swiper(".mySwiper211", {
   slidesPerView: 1,
   spaceBetween: 30,
   slidesPerGroup: 1,
   loop: true,
   loopFillGroupWithBlank: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });

}

// content5
if(screen.width>=1024){
  swipee[2].classList.add('mySwiper3')
  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
else if(screen.width<=768&&screen.width>375){
swipee[2].classList.add('mySwiper31')
var swiper31 = new Swiper(".mySwiper31", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
}
else if(screen.width<=375){
swipee[2].classList.add('mySwiper311')
var swiper311 = new Swiper(".mySwiper311", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
});

}



//content7
if(screen.width>=1024){
  swipee[3].classList.add('mySwiper4')
  var swiper4 = new Swiper(".mySwiper4", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
else if(screen.width<=768&&screen.width>375){
swipee[3].classList.add('mySwiper41')
var swiper41 = new Swiper(".mySwiper41", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
}
else if(screen.width<=375){
swipee[3].classList.add('mySwiper411')
var swiper411 = new Swiper(".mySwiper411", {
  slidesPerView: 1,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
 
});

}





