let btn = $(".main-menu-btn")[0];
btn.addEventListener("click", function () {
  //this.classList.remove('shadow1');
  $(".background-bar-right")[0].classList.toggle("menu-open");
});