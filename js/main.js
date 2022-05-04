//
// Set the date we're counting down to
var countDownDate = new Date("May 15, 2022 21:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = 
  `
  <div class="countdown__label">
    <span>${days}</span>
    <p>Días</p>
  </div>
  <div class="countdown__label">
    <span>${hours}</span>
    <p>Horas</p>
  </div>
  <div class="countdown__label">
    <span>${minutes}<span>
    <p>Minutos</p>
  </div>
  <div class="countdown__label">
    <span>${seconds}</span>
    <p>Segundos</p>
  </div>
  `;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

$('.carrusel-icons').slick({
  dots: false,
  infinite: true,
  speed: 300,
  arrows: true,
  slidesToShow: 8,
  autoplay: true,
  infinite: true,
  slidesToScroll: 4,
  prevArrow: "<i class='slick-prev' title='Ir izquierda' aria-hidden='true'></i>",
  nextArrow: "<i class='slick-next' title='Ir derecha' aria-hidden='true'></i>",
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
});

$('.pause').on('click', function() {
  $('.carrusel-icons')
      .slick('slickPause')
});

$('.play').on('click', function() {
  $('.carrusel-icons')
      .slick('slickPlay')});

/* remover master */
$(function(){
  $('#auxMenu, .compensarPie, .inner_popUp__header').remove();

  let cleanSpace1 = $("#dest-1 p").html().replace(/&#160;/gi,'').replace(/&nbsp;/gi,'');
  $("#dest-1 p").text(cleanSpace1);

  let cleanSpace2 = $("#dest-2 p").html().replace(/&nbsp;/gi,'').replace(/&nbsp;/gi,'');
  $("#dest-2 p").text(cleanSpace2);    
  
  let cleanSpace3 = $("#dest-3 p").html().replace(/&nbsp;/gi,'').replace(/&nbsp;/gi,'');
  $("#dest-3 p").text(cleanSpace3);  
  
  let cleanSpace4 = $("#dest-4 p").html().replace(/&nbsp;/gi,'').replace(/&nbsp;/gi,'');
  $("#dest-4 p").text(cleanSpace4);  
});
function openNav() {
  document.getElementById("myNav").style.left = "0%";
  $(".btn-boton-vip").hide();
}

function closeNav() {
  document.getElementById("myNav").style.left = "100%";
  $(".btn-boton-vip").show();
}