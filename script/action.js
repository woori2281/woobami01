$(document).ready(function(){
  setTimeout(function(){
    $('.splash_box').fadeOut(500)
    },2500)


  $('.introduce li').addClass('on')
  $('#visual').css({display:'block'})



    
;
    $('.ex_cont').draggable();
    //introduce

    $('nav .introduce li').click(function(){
      
      $('#section .rignt_box').hide()
      $('.right_app_box, .app_nav').fadeOut()
      $('.right_etc_box').hide()
      $(this).addClass('on')
      $('nav .list_box li').removeClass('on')
      $('nav .othersection li').removeClass('on')
      $('#visual').fadeIn();
    })


    // othersection

    $('.othersection li').eq(0).click(function(){
      $('.introduce li').removeClass('on')
      $('nav .list_box li').removeClass('on')
      $('header .app_nav').show()
      $('.right_app_box ').show().css({display:'flex'})
      $('#section .rignt_box').hide()
      $('#visual').hide()
      $('.right_etc_box').hide()
      $(this).addClass('on').siblings().removeClass('on')
      $('.app_nav ul li').removeClass('on')
    })
    $('.othersection li').eq(1).click(function(){

      $('.introduce li').removeClass('on')
      $('nav .list_box li').removeClass('on')
      $('header .app_nav').hide()
      $('.right_app_box ').hide()
      $('#section .rignt_box').hide()
      $('#visual').hide()
      $('.right_etc_box').show()
      $(this).addClass('on').siblings().removeClass('on')
      $('.app_nav ul li').removeClass('on')
      
     
    })

 
   
    


    //list_box
 
     
    $('nav .list_box li').click(function() {
      
      let liIndex = $(this).index();
      

      $.getJSON('webdata/file.json', function(data) {
        
          $.each(data, function(index, item) {
            // console.log(      item.info[liIndex].name       )
            $('.label_box .number_zone h2').text(item.info[liIndex].label_boxtext_h2 )
            $('.label_box h3').text(item.info[liIndex].cont_text_h3 )
            $('.label_box p').text(item.info[liIndex].p )
            $('.main2_img a').attr('href',item.info[liIndex].url )
            $('.main_cont_box .cont_img a').attr('href',item.info[liIndex].url )
            $('.main_cont_box .cont2_img a').attr('href',item.info[liIndex].url )
            $('.cont_text .arrow_icon a').attr('href',item.info[liIndex].url )
            $('.memo_box ul li a.t1').text(item.info[liIndex].memo_boxtext_li1)
            $('.memo_box ul li a.t2').text(item.info[liIndex].memo_boxtext_li2)
            $('.memo_box ul li a.t3').text(item.info[liIndex].memo_boxtext_li3)
            $('.memo_box ul li a.t4').text(item.info[liIndex].memo_boxtext_li4)
            $('.memo_box ul li a.t5').text(item.info[liIndex].memo_boxtext_li5)
             $('.main_cont_box .ex_cont h4').text(item.info[liIndex].ex_cont_h4)
            $('.main_cont_box .ex_cont .cont_p1').text(item.info[liIndex].ex_cont_p1)
            $('.main_cont_box .ex_cont .cont_p2').text(item.info[liIndex].ex_cont_p2)
            $('.main_cont_box .ex_cont .cont_p3').text(item.info[liIndex].ex_cont_p3)
            $('.main_cont_box .ex_cont .cont_p4').text(item.info[liIndex].ex_cont_p4)

            $('.main2_img img').attr('src',item.info[liIndex].main2_img )
            $('.cont_img img').attr('src',item.info[liIndex].main_cont_boximg1 )
            $('.cont2_img img').attr('src',item.info[liIndex].main_cont_boximg2 )
            $('.cont_text h3').text(item.info[liIndex].cont_text_h3 )
            $('.color_chip li').eq(0).css('background',item.info[liIndex].color_chip1 )
            $('.color_chip li').eq(1).css('background',item.info[liIndex].color_chip2 )
            $('.color_chip li').eq(2).css('background',item.info[liIndex].color_chip3 )
            $('.color_chip li').eq(3).css('background',item.info[liIndex].color_chip4 )
            $('.cont_text p.concept').text(item.info[liIndex].cont_text_p2 )
        });
      })


      $(this).addClass('on').siblings().removeClass('on')
      $('.introduce li').removeClass('on')
      $('.othersection li').removeClass('on')
      $('.app_nav ul li').removeClass('on')
      $('.rignt_box').css({width:'100%'}).fadeIn(200)
      $('.rignt_box .main2_img img').animate({marginTop:'-110'})
      $('.main_cont_box').css({width:'100%'}).delay(600).slideDown(500)
      $('.left_box .label_box').delay(400).slideDown(500)
      $('.left_box .memo_box ').delay(400).slideDown(500)
      $('header').animate({left:-300})
      $('#visual').hide()
      $('header .app_nav').hide()
      $('.right_app_box ').hide()
      $('.right_etc_box').hide()
        return false;
  
    

  })




    //left_box 안에 라벨에서 h1 클릭시

    $('#section .left_box h1').click(function(){
      $('header').delay(300).animate({left:40})
      $('.left_box .label_box').slideUp(500)
      $('.left_box .memo_box ').slideUp(500)
      $('.main_cont_box').css({width:'100%'}).slideUp(300)
      $('.rignt_box .main2_img img').animate({marginTop:''})
      $('.app_nav ul li').removeClass('on')
    })



    //app_nav

    $('header .app_nav ul li').click(function() {
      $(this).addClass('on').siblings().removeClass('on')
      let subNavliIndex = $(this).index();
  

    $.getJSON('webdata/file2.json', function(data) {
      
        $.each(data, function(index, item) {
          
          $('.right_app_box .img_box a img').eq(0).attr('src',item.content[subNavliIndex].img_box_img11 )
          $('.right_app_box .img_box a img').eq(1).attr('src',item.content[subNavliIndex].img_box_img22 )
          $('.text_box a').eq(0).attr('src',item.content[subNavliIndex].text_box_img )
          $('.text_box h3').text(item.content[subNavliIndex].text_box_h3)
          $('.text_box .file p').text(item.content[subNavliIndex].file_p)
          $('.text_box .file img').attr('src',item.content[subNavliIndex].file_img)
          $('.right_app_box .text_box a.file').css('background',item.content[subNavliIndex].color1 )
          $('.right_app_box .text_box a.file img').attr('src',item.content[subNavliIndex].file_img )
          $('.right_app_box .text_box a.file span').css('background',item.content[subNavliIndex].color2 )
          $('.color_chip2 li').eq(0).css('background',item.content[subNavliIndex].color_chip2_1 )
          $('.color_chip2 li').eq(1).css('background',item.content[subNavliIndex].color_chip2_2 )
          $('.color_chip2 li').eq(2).css('background',item.content[subNavliIndex].color_chip2_3 )
          $('.color_chip2 li').eq(3).css('background',item.content[subNavliIndex].color_chip2_4 )
          $('.text_box .concept_2').text(item.content[subNavliIndex].p_content)
      });
      
    })
    //만약에 p가 비어있다면 해당하는 파일의 이미지는 숨겨라
    .done(function() {
      if($('a.file p').text() == ""){
        $('a.file img').hide();
      }
    })
    .always(function() {
      if($('a.file p').text() == "첨부파일"){
        $('a.file img').show();
      };
    });

    // .fail(function() {
    //   console.log( "error" );
    // })
    // .always(function() {
    //   console.log( "complete" );
    // });
;




      // $(window).scroll(function(){
      //   let scrT = $(this).scrollTop()
      //   if(scrT){
      //       $('#visual').addClass('on')
      //   } else {
      //       $('#visual').removeClass('on')
      //       $('header').animate({left:40})
      //   }
      // })
})



})



