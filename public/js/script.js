window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const scrollToTop = document.querySelector("#scroll-to-top");

  if (window.scrollY > fixedNav) {
    header.classList.add("navbar-fixed");
    scrollToTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    scrollToTop.classList.add("hidden");
  }
};

// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// music
document.addEventListener("DOMContentLoaded", function () {
  // Mendapatkan elemen audio
  var audio = document.getElementById("myAudio");

  // Mendapatkan elemen tombol pause
  var pauseButton = document.getElementById("pauseButton");

  // Mendapatkan elemen ikon
  var icon = document.getElementById("icon");

  // Menambahkan event listener untuk tombol pause
  pauseButton.addEventListener("click", function () {
    if (audio.paused) {
      // Jika sedang di-pause, play
      audio.play();
      icon.classList.remove("bi-play-circle");
      icon.classList.add("bi-pause-circle");
    } else {
      // Jika sedang bermain, pause
      audio.pause();
      icon.classList.remove("bi-pause-circle");
      icon.classList.add("bi-play-circle");
    }
  });

  // Menambahkan event listener untuk memutarkan audio saat sudah dapat dimainkan
  audio.addEventListener("canplay", function () {
    audio.play();
  });
});
