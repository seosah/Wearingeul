$(function(){

  /* header start */

  $(window).scroll(function(){
    let scrollBar = $(window).scrollTop()
    //console.log (scrollBar)
    if (scrollBar > 0){
      $('header').css({
        'position' : 'sticky',
        'top' : 0,
        'left' : 0,
        'z-index' : 999,
        'background-color' : '#ffffff70',
      })//css
    }else if (scrollBar === 0){
      $('header').css({
        'position' : '',
        'background-color' : '',
      })
    }//else if
  });//window scroll (header change) end

  $('.gnb li').mouseleave(function(){
    $(this).find('.depth1').removeClass('active');
    $(this).find('.depth2').stop().slideUp();
  })
  $('.gnb li').mouseenter(function(){
    $(this).find('.depth1').addClass('active');
    $(this).find('.depth2').stop().slideDown();
  })

  $('.depth2 li').mouseenter(function(){
    $(this).css({
      'background-color' : '#333',
      'color' : 'white',
    })
  })

  $('.depth2 li').mouseleave(function(){
    $(this).css({
      'background-color' : '',
      'color' : '',
    })
  })

  //nav end
  //util start

  $('.search_box').click(function(){
    $(this).find('#search').show()
    $(this).find('#search').animate({
      'right' : 35,
    }, 300) //,easeOutBack)
  })

  $('.lang_wrap, .lang_btn').click(function(){
    $('.lang_list').slideToggle();
    $('.lang_btn').toggleClass('active');
  })

  $('.lang_list li').click(function(){
    console.log($(this).index());
    $('.lang_list li').removeClass('active');
    $('.lang_list li').eq($(this).index()).addClass('active');
    
    $('.lang_wrap img').removeClass('active');
    $('.lang_wrap img').addClass('active');
  })

  //util end

  /* header end */

  /* main start */

  /* main_visual start */
  var swiper = new Swiper(".banner_wrap", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
    loop : true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed : 8000,
    slidesPerView: "auto",
    spaceBetween: 0,
  });
  /* main_visual end */

  /* category section */

  $('.category .item').mouseenter(function(){
    $(this).find('img').css({
      'transform': 'scale(1.2)',
    })
  })//category mouseenter

  $('.category .item').mouseleave(function(){
    $(this).find('img').css({
      'transform': '',
    })
  })//category mouseleave

  /* category section end */

  /* best section */


  /* best section end */

  /* sale section */

  var swiper = new Swiper(".sale-slide", {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });

  /* sale section end */

  /* ink section */

  var swiper = new Swiper(".ink-slide", {
    slidesPerView: 6,
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });

  /* ink section end */

  /* color section */

  var swiper = new Swiper(".color_slide", {
    /* slidesPerView: 8,
    spaceBetween: 14, */
    scrollbar: {
      dragSize : 100,
      el: ".swiper-scrollbar",
      draggable: "boolean",
    },
    autoHeight: true,

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 14,
      },
      1400: {
        slidesPerView: 8,
        spaceBetween: 14,
      },
    },
  });

/*   var swiper = new Swiper(".playlist_slide", {
    slidesPerView: "auto",
    spaceBetween: 24,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  }); */

  var swiper = new Swiper(".detail-slide", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper2 = new Swiper(".playlist_slide", {
    loop: true,
    spaceBetween: 20 + '%',
    slidesPerView: 2,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});

$('.playlist .item').click(function(){
  //alert ('dd')
  let video = $(this).find('video');

  
})

  /* $('.color .swiper-slide-active'){
    video.play();
  } */

  /* color section end */

  /* insta section */
  
  let instaItem = $('.insta_list .item_wrap .item')

  $(instaItem).mouseenter(function(){
    console.log($(this).index())
    //$(instaItem).eq($(this).index()).addClass('active');
      
  })
  $(instaItem).mouseleave(function(){
    $(instaItem).removeClass('active');
    //src ?
  })


  /* insta section end */
  /* about_us section */

  $('.about_us .item').mouseenter(function(){
    $(this).find('.bg').stop().fadeOut(800);
    $(this).find('img').css({
      'transform': 'scale(1.1)',
    })
    $(this).find('p').css({
      'text-shadow' : '1px 1px 5px #666'
    })
  })//about_us mouseenter

  $('.about_us .item').mouseleave(function(){
    $(this).find('.bg').stop().fadeIn(800);
    $(this).find('img').css({
      'transform': '',
    })
    $(this).find('p').css({
      'text-shadow' : ''
    })
  })//about_us mouseleave

  /* about_us section end */


  /* main_end */


  /* footer start */

  let sideList = $('.category').offset().top;

  $(window).scroll(function (){
    let windowScroll = $(window).scrollTop();
    if (windowScroll >= sideList){
      $('.side').fadeIn();
    } else if (windowScroll === 0){
      $('.side').fadeOut();
    }//if
  })//window scroll

  $('.side')
  $('.top_btn').click(function (){
    window.scrollTo({top:0, left:0, behavior:'smooth'});
  })

  $('.online_mall').click(function (){
    $(this).find('.mall_list').stop().slideToggle(250);
    $(this).find('img').toggleClass('active');
    //slideToggle 에는 toggleClass 로 스타일 변경
  })//click

  if ($('mall_list'))

  $('.mall_list li a').mouseenter(function (){
    $(this).css({
      'background-color' : '#252525',
    })
  })
  $('.mall_list li a').mouseleave(function (){
    $(this).css({
      'background-color' : '',
    })
  })

  /* footer end */

})//script end