// Sticky-Menu & Scroll Up Js
window.addEventListener("scroll", function () {
  let scroll = document.getElementById("bg-nav");
  if (window.pageYOffset >= 80) {
    scroll.classList.add("sticky-scroll");
  }
  if (window.pageYOffset == 0) {
    scroll.classList.remove("sticky-scroll");
  }

  let scrollPositon = document.getElementById("scroll-top");
  if (window.pageYOffset >= 478) {
    scrollPositon.classList.add("scroll-0");
  } else {
    scrollPositon.classList.remove("scroll-0");
  }
});

let menuOpen = document.getElementById("menu-open");
menuOpen.addEventListener("click", function () {
  let navSelect = document.querySelector(".mobile-nav");
  navSelect.classList.toggle("mobile-active");
  menuOpen.classList.toggle("fa-close");
});

window.addEventListener("scroll", function () {
  if (this.window.pageYOffset > 0) {
    let navSelect = document.querySelector(".mobile-nav");
    navSelect.classList.remove("mobile-active");
    menuOpen.classList.remove("fa-close");
  }
});

// Accordion Js
let accordion = document.querySelectorAll(".accordion");
let accBody = document.querySelectorAll(".accordion-body");
for (let x of accordion) {
  x.addEventListener("click", function (e) {
    for (let i of accordion) {
      if (x == i) {
        x.classList.toggle("acc-active");
      } else {
        i.classList.remove("acc-active");
      }
    }
  });
}

// Filter Gallery
let dataBtn = document.getElementsByClassName("portfolio-btn");
let gallery = document.getElementsByClassName("gallery-img");
for (let x of dataBtn) {
  x.addEventListener("click", function () {
    let getBtnAttribute = x.getAttribute("data-btn");
    for (let v of gallery) {
      let getGalleryAttribute = v.getAttribute("data-gallery");
      if (
        getBtnAttribute === getGalleryAttribute ||
        getBtnAttribute === "all"
      ) {
        v.classList.add("gallery-active");
        v.classList.remove("gallery-none");
      } else {
        v.classList.remove("gallery-active");
        v.classList.add("gallery-none");
      }
      for (let y of dataBtn) {
        if (x == y) {
          x.classList.add("active1");
        } else {
          y.classList.remove("active1");
        }
      }
    }

    let i = document.getElementById("img-6");
    if (getBtnAttribute == "app") {
      i.style = "top:0; left:375px;";
    } else {
      i.style = "top:400px; left:0px;";
    }

    let img5 = document.getElementById("img-5");
    if (getBtnAttribute == "card") {
      img5.style = "top:0; left:375px;";
    } else {
      img5.style = "top:270px";
    }

    let img7 = document.getElementById("img-7");
    if (getBtnAttribute == "card") {
      img7.style = "top:0; left:0px;";
    } else {
      img7.style = "top:500px; right:0;";
    }

    let img9 = document.getElementById("img-9");
    if (getBtnAttribute == "card") {
      img9.style = "top:0; right:0px;";
    } else {
      img9.style = "top:830px";
    }

    let img2 = document.getElementById("img-2");
    if (getBtnAttribute == "web") {
      img2.style = "top:0; left:0px;";
    } else {
      img2.style = "top:0;";
    }

    let img4 = document.getElementById("img-4");
    if (getBtnAttribute == "web") {
      img4.style = "top:0; left:375px;";
    } else {
      img4.style = "top:230px; right:0;";
    }

    let img8 = document.getElementById("img-8");
    if (getBtnAttribute == "web") {
      img8.style = "top:0; right:0px;";
    } else {
      img8.style = "top:770px; right:0;";
    }

    let heightChange = document.querySelector(".gallery");
    if (getBtnAttribute == "app" || getBtnAttribute == "card") {
      heightChange.style = "padding:287px 0; height:0";
    } else if (getBtnAttribute == "web") {
      heightChange.style = "padding:130px 0; height:0";
    } else {
      heightChange.style = "padding:548px 0;";
    }
  });
}

let link = document.querySelectorAll("#link");
for (let r of link) {
  r.addEventListener("click", function () {
    for (let e of link) {
      if (r == e) {
        r.classList.add("active");
      } else {
        e.classList.remove("active");
      }
    }
  });
}
