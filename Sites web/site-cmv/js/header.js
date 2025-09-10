let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    header.style.top = "-80px"; // cache
  } else {
    header.style.top = "0"; // réapparait
  }
  lastScrollTop = scrollTop;
});

// réapparition si la souris en haut
document.addEventListener("mousemove", (e) => {
  if (e.clientY < 50) {
    header.style.top = "0";
  }
});
