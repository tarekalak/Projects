let up=document.querySelector('.up');
window.onscroll=function(){
    // console.log(this.scrollY);
    if(this.scrollY>=580){
        up.classList.add('show');
    }
    else{
        up.classList.remove('show');
    }
}

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
function over(){
    document.getElementById('input1').style.backgroundColor='rgba(13, 141, 70, 0.568)';
}
function out(){
    document.getElementById('input1').style.backgroundColor='#f4f4f4';
}

// function click(let message){
//     document.getElementById('btn').alert(message);
// function dblclick(let message){
//     document.getElementById('btn').alert(message);
// }
// Used within the html page to diversify the methods 
//للتنويع في الطرق html استخدمت ضمن صفحة
