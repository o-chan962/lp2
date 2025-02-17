//カルーセル
$('.voices__slick').slick({
  dots:true,
  arrows: true,
  prevArrow: ".arrow-circle--prev",
  nextArrow: ".arrow-circle--next",
  slidesToShow: 3,// 一度に表示するスライド数
  responsive:[
    {
      breakpoint : 767,
      settings:{
      slidesToShow: 1,
      }
    }
  ]
});



// アコーディオンのタイトルがクリックされたら
$('.qa__accordion-title').on('click', function(e) {

  // .qa__accordion-contentを選択
  var content = $(this).next();

  // .qa__accordion-contentを表示・非表示
  content.slideToggle()

  // .i.bi.bi-caret-down-fillを逆さまに
  $(this).toggleClass('is-open');

});

$(window).on('resize', function () {});


//トップへ戻る
var buttonToTop = $('#button-to-top');
var position = 0;
var speed = 600;

// ページトップへ戻るボタンをクリックしたら
buttonToTop.on('click', function() {
  // console.log('click');
  console.log(position);

  // アニメーションをしながらページトップに移動
  $("html, body").animate({
    scrollTop: position
  }, speed, "swing");
  return false;

});