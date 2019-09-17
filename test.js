document.addEventListener(
  "wheel",
  evt => {
    var header = document.getElementsByTagName("header")[0];
    if (window.scrollY > window.innerHeight) {
      header.classList.add("header-is-hidden");
    } else {
      header.classList.remove("header-is-hidden");
    }
  },
  { capture: false, passive: true }
);
