// var typed = new Typed('#element', {
//     strings: ['.Net Developer.', 'Web Designer.','Web Developer.'],
//     typeSpeed: 50,
//   });

import apiKeys from "./apikeys.js";

var nav = $("nav");
var navHeight = nav.outerHeight();

if ($(".text-slider").length == 1) {
  var typed_strings = $(".text-slider-items").text();
  $(".text-slider-items").text("");
  var typed = new Typed(".text-slider", {
    strings: typed_strings.split(","),
    typeSpeed: 80,
    loop: true,
    backDelay: 1100,
    backSpeed: 30,
  });
}

$(".navbar-toggler").on("click", function (e) {
  e.preventDefault();
  $(".popup-mobile-menu").addClass("menu-open");
  $("html").css("overflow", "hidden");
});

$(".navbar-toggler").on("click", function (e) {
  e.preventDefault();
  $(".popup-mobile-menu").addClass("menu-open");
  $("html").css("overflow", "hidden");
});

$(".close-menu-activation, .popup-mobile-menu .primary-menu .nav-item a").on(
  "click",
  function (e) {
    e.preventDefault();
    $(".popup-mobile-menu").removeClass("menu-open");
    $(".popup-mobile-menu > a")
      .removeClass("open")
      .siblings(".submenu")
      .removeClass("active")
      .slideUp("400");

    e.preventDefault();
    var target = $(this).attr("href");

    if (target !== "#") {
      // Smooth scroll to the target section
      $("html, body").animate(
        {
          scrollTop: $(target).offset().top,
        },
        1000
      );

      $(".nav-item a.active").removeClass("active");
      $(this).addClass("active");
    }

    $("html").css("overflow", "");
  }
);

$(".popup-mobile-menu").on("click", function (e) {
  e.target === this && $(".popup-mobile-menu").removeClass("menu-open");
  $("html").css("overflow", "");
});

$(".popup-mobile-menu .has-droupdown > a").on("click", function (e) {
  e.preventDefault();
  $(this).siblings(".submenu").toggleClass("active").slideToggle("400");
  console.log($(this).siblings(".submenu"));
  $(this).toggleClass("open");
  $("html").css("overflow", "");
});

$(".nav-pills .nav-link").on("click", function (e) {
  $(".rn-popup-mobile-menu").removeClass("menu-open");
  $("html").css("overflow", "");
});

document.addEventListener("DOMContentLoaded", function () {
  if ($(this).scrollTop() > 250) {
    $(".header--sticky").addClass("sticky");
  } else {
    $(".header--sticky").removeClass("sticky");
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 250) {
    $(".header--sticky").addClass("sticky");
  } else {
    $(".header--sticky").removeClass("sticky");
  }
});

// Closes responsive menu when a scroll trigger link is clicked
$(".js-scroll").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

// Activate scrollspy to add active class to navbar items on scroll
$("body").scrollspy({
  target: "#mainNav",
  offset: navHeight,
});

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("header-active");
    } else {

      //remove the background property so it comes transparent again (defined in your css)
      $(".header").removeClass("header-active");
    }
  });
});

emailjs.init("pl5BxHKDGU_-HFlNC");

const sendEmail = (e) => {
  e.preventDefault();

  const formData = {
    name: e.target.name.value,
    phone: e.target.phone.value,
    email: e.target.email.value, // If needed
    subject: e.target.subject.value, // If needed
    message: e.target.message.value,
  };

  emailjs
    .send("service_rrtf8mo", apiKeys.TEMPLATE_ID, formData, apiKeys.USER_ID)
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};

const form = document.querySelector("#contact-form");
form.addEventListener("submit", sendEmail);
