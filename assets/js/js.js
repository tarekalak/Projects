$( function() {
    $( "#inputCheckIn" ).datepicker();
    $( "#inputCheckOut" ).datepicker();
  } );

  $('.level-slider').slick({
//   dots: true,
//   slidesToShow: 2,
//   slidesToScroll:1,
//   arrows: true   //Arrows to move slides

    // Another effect
dots: true,
slidesToShow: 1,
slidesToScroll:1,
fade:true
});
function videoToggle(){
    video = $('.level-video').get(0);

    if(video.paused){
        video.play();
        $('.video-control-play').hide();
        $('.video-control-pause').show();
    }
    else{
    video.pause();
    $('.video-control-pause').hide();
    $('.video-control-play').show();
        }
 }

$('.video-control-play').click(function(){
    videoToggle();
})
$('.video-control-pause').click(function(){
    videoToggle();
})