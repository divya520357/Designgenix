window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.background = "white";
    document.getElementById("navbar").style.color = "#77117b";
    document.getElementById("navbar").style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
    document.getElementById("home").style.color = "#77117b";
    document.getElementById("cart-icon").style.color = "#77117b";
    document.getElementById("profile-icon").style.color = "#77117b";
    document.getElementById("logo").style.display = "block";
    document.getElementById("box").style.display = "none";
  } else {
    document.getElementById("navbar").style.background = "none";
    document.getElementById("navbar").style.color = "white";
    document.getElementById("navbar").style.boxShadow = "none";
    document.getElementById("home").style.color = "white";
    document.getElementById("cart-icon").style.color = "white";
    document.getElementById("profile-icon").style.color = "white";
    document.getElementById("logo").style.display = "none";
    document.getElementById("box").style.display = "block";
    // document.getElementsByClassName("search").style.setProperty('display', 'flex', 'important');
  }
}
