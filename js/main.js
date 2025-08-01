import { partnerLogos, productList, partnerLogoBasePath } from "./data.js";
/*----------------------
    Nav
------------------------*/
$(function () {
  //hide show nav
  $(".navbar").hidescroll();

  // mobile dropdown menu
  const toggleBtn = $("#toggle_btn");
  const dropdownMenu = $(".dropdown-menu");

  toggleBtn.click(() => {
    dropdownMenu.toggleClass("open");
  });
});

/*----------------------
    Partner Logos
------------------------*/
$(function () {
  const container = document.getElementById("partner-logo-list");

  partnerLogos.forEach((logo) => {
    const img = document.createElement("img"); /* Tạo thẻ <img> */

    img.src = partnerLogoBasePath + logo.fileName;
    img.alt = logo.alt;
    img.classList.add("logo-ticker-image");
    container.appendChild(img); /* Thêm img vào container */
  });
});

/*----------------------
    Products
------------------------*/
$(function () {
  // Thêm activeTab vào li đầu tiên
  $("li:first").addClass("activeTab");

  // Đổi màu activeTab
  $("li").on("click", function () {
    $("li").removeClass("activeTab");
    $('div[id="products-tabs"] ul .r-tabs-state-active').addClass("activeTab");
  });

  $("#products-tabs").responsiveTabs({
    animation: "slide",
  });
});
