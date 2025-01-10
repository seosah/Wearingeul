$(function(){
  AOS.init();
  $('header').load('../common/header.html');
  $('footer').load('../common/footer.html');


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

    /* brand start */

  var swiper = new Swiper(".brand-slide", {
    slidesPerView: 5,
    spaceBetween: 24,
    loop : true,
  });

  var swiper = new Swiper(".collabo-slide", {
    slidesPerView: 3,
    spaceBetween: 24,
    loop : true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed : 500,
  });

  /* brand end */

  $('.etc_item').mouseenter(function(){
    $(this).find('.img').addClass('active');
    $(this).find('.txt').stop().fadeOut();
  })
  $('.etc_item').mouseleave(function(){
    $(this).find('.img').removeClass('active');
    $(this).find('.txt').stop().fadeIn()
  })

  var swiper = new Swiper(".etc-slide", {
    slidesPerView: 6,
    spaceBetween: 24,
    loop : true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /* history start */

  var swiper = new Swiper(".img-slide", {
    loop : true,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



})//script end