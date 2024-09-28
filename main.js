const adv = document.getElementById("Advantage")
// const date = document.getElementById("date")

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".adv", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".adv h5", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".adv p", {
  ...scrollRevealOption,
  delay: 1000,
});


ScrollReveal().reveal(".header__image__card", {
  duration: 1000,
  interval: 500,
  delay: 2500,
})



var blink_speed = 2000; // every 1000 == 1 second, adjust to suit
var t = setInterval(function () {
    var ele = document.getElementById('date');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');

}, blink_speed);