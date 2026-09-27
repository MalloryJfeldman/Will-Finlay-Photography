document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  function closeAllDropdowns(except) {
    document.querySelectorAll(".nav-item.has-children.open").forEach(function (item) {
      if (item !== except) item.classList.remove("open");
    });
  }

  document.querySelectorAll(".nav-item.has-children").forEach(function (item) {
    var link = item.querySelector(":scope > a");

    item.addEventListener("mouseenter", function () {
      if (window.innerWidth > 640) {
        closeAllDropdowns(item);
        item.classList.add("open");
      }
    });

    item.addEventListener("mouseleave", function () {
      if (window.innerWidth > 640) item.classList.remove("open");
    });

    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 640) {
        e.preventDefault();
        var wasOpen = item.classList.contains("open");
        closeAllDropdowns();
        item.classList.toggle("open", !wasOpen);
      }
    });
  });

  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav-item.has-children")) closeAllDropdowns();
  });

  if (window.GLightbox) {
    GLightbox({ selector: ".glightbox", touchNavigation: true, loop: false });
  }
});
