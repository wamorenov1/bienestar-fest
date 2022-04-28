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
  infinite: false,
  speed: 300,
  arrows: false,
  slidesToShow: 8,
  autoplay: true,
  infinite: true,
  slidesToScroll: 1,
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
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});