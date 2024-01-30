var scrollToTopBtn = document.getElementById("scrollToTopBtn");

scrollToTopBtn.style.display = "none"; // 初始时隐藏按钮

window.addEventListener("scroll", function() {
  if (window.pageYOffset > 150) {
    // element.style.transition = 'all 0.3s ease-in-out';
    scrollToTopBtn.style.display = "block"; // 显示按钮
  } else {
    scrollToTopBtn.style.display = "none"; // 隐藏按钮
  }
});

scrollToTopBtn.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});