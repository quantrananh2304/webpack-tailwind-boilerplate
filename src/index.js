import "./styles.css";
import image1 from "./assets/images/image-1.svg";
import image2 from "./assets/images/image-2.svg";
import image3 from "./assets/images/image-3.svg";
import image4 from "./assets/images/image-4.svg";
import image5 from "./assets/images/image-5.svg";
import image6 from "./assets/images/image-6.svg";
import image7 from "./assets/images/image-7.svg";
import image8 from "./assets/images/image-8.svg";
import image9 from "./assets/images/image-9.svg";
import image10 from "./assets/images/image-10.svg";
import image11 from "./assets/images/image-11.svg";
import image12 from "./assets/images/image-12.svg";
import image13 from "./assets/images/image-13.svg";
import image14 from "./assets/images/image-14.svg";
import image15 from "./assets/images/image-15.svg";
import image16 from "./assets/images/image-16.svg";
import image17 from "./assets/images/image-17.svg";
import image18 from "./assets/images/image-18.svg";
import image19 from "./assets/images/image-19.svg";
import image20 from "./assets/images/image-20.svg";
import image21 from "./assets/images/image-21.svg";
import image22 from "./assets/images/image-22.svg";
import image23 from "./assets/images/image-23.svg";
import image24 from "./assets/images/image-24.svg";
import image25 from "./assets/images/image-25.svg";
import image26 from "./assets/images/image-26.svg";
import image27 from "./assets/images/image-27.svg";
import image28 from "./assets/images/image-28.svg";
import image29 from "./assets/images/image-29.svg";
import image30 from "./assets/images/image-30.svg";
import image31 from "./assets/images/image-31.svg";
import image32 from "./assets/images/image-32.svg";
import image33 from "./assets/images/image-33.svg";
import image34 from "./assets/images/image-34.svg";
import image35 from "./assets/images/image-35.svg";
import icon1 from "./assets/icons/icon-1.svg";
import icon2 from "./assets/icons/icon-2.svg";
import icon3 from "./assets/icons/icon-3.svg";
import background1 from "./assets/images/background-1.png";
import background2 from "./assets/images/background-2.svg";
import banner1 from "./assets/images/Group 4082.svg";
import contact1 from "./assets/images/Group 3980.svg";
import contact2 from "./assets/images/Group 3979.svg";

document.getElementById("image-2").setAttribute("src", image2);
document.getElementById("image-3").setAttribute("src", image3);
document.getElementById("image-4").setAttribute("src", image4);
document.getElementById("image-5").setAttribute("src", image5);
document.getElementById("image-6").setAttribute("src", image6);
document.getElementById("image-7").setAttribute("src", image7);
document.getElementById("image-8").setAttribute("src", image8);
document.getElementById("image-9").setAttribute("src", image9);
document.getElementById("image-10").setAttribute("src", image10);
document.getElementById("image-11").setAttribute("src", image11);
document.getElementById("image-12").setAttribute("src", image12);
document.getElementById("image-13").setAttribute("src", image13);
document.getElementById("image-14").setAttribute("src", image14);
document.getElementById("image-15").setAttribute("src", image15);
document.getElementById("image-16").setAttribute("src", image16);
document.getElementById("image-17").setAttribute("src", image17);
document.getElementById("image-18").setAttribute("src", image18);
document.getElementById("image-19").setAttribute("src", image19);
document.getElementById("image-20").setAttribute("src", image20);
document.getElementById("image-21").setAttribute("src", image21);
document.getElementById("image-22").setAttribute("src", image22);
document.getElementById("image-23").setAttribute("src", image23);
document.getElementById("image-24").setAttribute("src", image24);
document.getElementById("image-25").setAttribute("src", image25);
document.getElementById("image-26").setAttribute("src", image26);
document.getElementById("image-27").setAttribute("src", image27);
document.getElementById("image-28").setAttribute("src", image28);
document.getElementById("image-29").setAttribute("src", image29);
document.getElementById("image-30").setAttribute("src", image16);
document.getElementById("image-31").setAttribute("src", image17);
document.getElementById("image-32").setAttribute("src", image18);
document.getElementById("image-33").setAttribute("src", image19);
document.getElementById("image-34").setAttribute("src", image20);
document.getElementById("image-35").setAttribute("src", image15);
document.getElementById("image-36").setAttribute("src", image30);
document.getElementById("image-37").setAttribute("src", image31);
document.getElementById("image-38").setAttribute("src", image32);
document.getElementById("image-39").setAttribute("src", image33);
document.getElementById("image-40").setAttribute("src", image34);
document.getElementById("image-41").setAttribute("src", image35);
// document.getElementById("icon-1").setAttribute("src", icon1);
// document.getElementById("icon-2").setAttribute("src", icon2);
// document.getElementById("icon-3").setAttribute("src", icon1);
// document.getElementById("icon-4").setAttribute("src", icon2);
document.getElementById("icon-5").setAttribute("src", icon3);
document.getElementById("icon-6").setAttribute("src", icon3);
document.getElementById("icon-7").setAttribute("src", icon3);
document.getElementById("icon-8").setAttribute("src", icon3);
// document.getElementById("icon-9").setAttribute("src", icon1);
// document.getElementById("icon-10").setAttribute("src", icon2);
document.getElementById("icon-11").setAttribute("src", icon2);
document.getElementById("icon-12").setAttribute("src", icon2);
document.getElementById("icon-13").setAttribute("src", icon2);
document.getElementById("icon-14").setAttribute("src", icon2);
document.getElementById("icon-15").setAttribute("src", icon2);
document.getElementById("icon-16").setAttribute("src", icon2);
// document.getElementById("icon-17").setAttribute("src", icon1);
// document.getElementById("icon-18").setAttribute("src", icon2);
document.getElementById("background-2").setAttribute("src", background2);
document.getElementById("banner-1").setAttribute("src", banner1);
document.getElementById("contact-1").setAttribute("src", contact1);
document.getElementById("contact-2").setAttribute("src", contact2);
document.getElementById("contact-3").setAttribute("src", contact1);
document.getElementById("contact-4").setAttribute("src", contact2);
document.getElementById("contact-5").setAttribute("src", contact1);
document.getElementById("contact-6").setAttribute("src", contact2);
document.getElementById("contact-7").setAttribute("src", contact1);
document.getElementById("contact-8").setAttribute("src", contact2);

[$("#contact-2"), $("#contact-4"), $("#contact-6"), $("#contact-8")].forEach(
  function (item) {
    item.on("click", function () {
      $("html, body").animate(
        {
          scrollTop: $(".formWrap").offset().top,
        },
        2000
      );
    });

    item.on("mouseenter", function () {
      $(this).css("cursor", "pointer");
    });
  }
);

$(".headerInner .spMenu").on("click", function () {
  if (!$("body").hasClass("naviOpen")) {
    $("body").addClass("naviOpen");
  } else {
    $("body").removeClass("naviOpen");
    //$('header#fixedHeader').addClass('show notime');
  }
});
