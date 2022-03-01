document.getElementById("next1").addEventListener("click", function () {
  document.querySelector(".card_1").style.display = "block";
  document.querySelector(".card_2").style.display = "none";
  document.querySelector(".card_3").style.display = "none";
});
document.getElementById("button2").addEventListener("click", function () {
  document.querySelector(".card_1").style.display = "block";
  document.querySelector(".card_2").style.display = "none";
  document.querySelector(".card_3").style.display = "none";
  document.querySelector(".card-3").style.display = "block";
  document.getElementById("button1").style.background = "none";
  document.getElementById("button1").style.color = "white";
  document.getElementById("button2").style.background = "white";
  document.getElementById("button2").style.color = "#77117b";
  document.getElementById("button3").style.background = "none";
  document.getElementById("button3").style.color = "white"
});
document.getElementById("button1").addEventListener("click", function () {
  document.querySelector(".card_1").style.display = "none";
  document.querySelector(".card_2").style.display = "block";
  document.querySelector(".card_3").style.display = "none";
  document.getElementById("button1").style.background = "white";
  document.getElementById("button1").style.color = "#77117b";
  document.getElementById("button2").style.background = "none";
  document.getElementById("button2").style.color = "white";
  document.getElementById("button3").style.background = "none";
  document.getElementById("button3").style.color = "white";
});
document.getElementById("next2").addEventListener("click", function () {
  document.querySelector(".card_1").style.display = "none";
  document.querySelector(".card_2").style.display = "none";
  document.querySelector(".payemnt-mode").style.display = "block ";
  document.querySelectorAll(".payemnt-mode").forEach(function (b) {
    b.style.display = "flex";
  });
  document.querySelector(".card-3").style.display = "block";
});
document.getElementById("button3").addEventListener("click", function () {
  document.querySelector(".card_1").style.display = "none";
  document.querySelector(".card_2").style.display = "none";
  document.querySelector(".payemnt-mode").style.display = "block ";
  document.querySelectorAll(".payemnt-mode").forEach(function (b) {
    b.style.display = "flex";
  });
  document.querySelector(".card-3").style.display = "block";
  document.getElementById("button1").style.background = "none";
  document.getElementById("button1").style.color = "white";
  document.getElementById("button2").style.background = "none";
  document.getElementById("button2").style.color = "white";
  document.getElementById("button3").style.background = "white";
  document.getElementById("button3").style.color = "#77117b";
});

document.getElementById("pay-card").addEventListener("click", function () {
  document.querySelector(".payment-details").style.display = "block";
});

// console.log(document.querySelector("#item_no1"));

var i = 1;

document.getElementById("minus1").addEventListener("click", function () {
  i = i - 1;
  document.getElementById("item_no1").innerHTML = i;
  document.getElementById("burger").innerHTML = i*60;
  document.getElementById("sub-total").innerHTML = i*60 + j*60 + k*60;
  document.getElementById("total").innerHTML = (i*60 + j*60 + k*60) + 40;
});

document.getElementById("plus1").addEventListener("click", function () {
  i = i + 1;
  document.getElementById("item_no1").innerHTML = i;
  document.getElementById("burger").innerHTML = i*60;
  document.getElementById("sub-total").innerHTML = i*60 + j*60 + k*60;
  document.getElementById("total").innerHTML = (i*60 + j*60 + k*60) + 40;
});
document.getElementById("item_no1").innerHTML = i;
var j = 0;
document.getElementById("minus2").addEventListener("click", function () {
  j = j - 1;
  document.getElementById("item_no2").innerHTML = j;
  document.getElementById("pizza").innerHTML = j*60;
  document.getElementById("sub-total").innerHTML = i*60 + j*60 + k*60;
  document.getElementById("total").innerHTML = (i*60 + j*60 + k*60) + 40;
});

document.getElementById("plus2").addEventListener("click", function () {
  j = j + 1;
  document.getElementById("item_no2").innerHTML = j;
  document.getElementById("pizza").innerHTML = j*60;
  document.getElementById("sub-total").innerHTML = i*60 + j*60 + k*60;
  document.getElementById("total").innerHTML = (i*60 + j*60 + k*60) + 40;
});
document.getElementById("item_no2").innerHTML = j;
var k = 0;
document.getElementById("minus3").addEventListener("click", function () {
  k = k - 1;
  document.getElementById("item_no3").innerHTML = k;
  document.getElementById("biryani").innerHTML = k*60;
  document.getElementById("sub-total").innerHTML = i*60 + j*60 + k*60;
  document.getElementById("total").innerHTML = (i*60 + j*60 + k*60) + 40;
});

document.getElementById("plus3").addEventListener("click", function () {
  k = k + 1;
  document.getElementById("item_no3").innerHTML = k;
  document.getElementById("biryani").innerHTML = k*60;
  document.getElementById("sub-total").innerHTML = i*60 + j*60 + k*60;
  document.getElementById("total").innerHTML = (i*60 + j*60 + k*60) + 40;
});
document.getElementById("place-order").addEventListener("click", function () {
  document.getElementById("place-order").innerHTML = 'Order placed 🤤';
  document.getElementById("place-order").style.width = 'auto';
  document.getElementById("place-order").style.background = '#c9256b';
});
document.getElementById("item_no3").innerHTML = k;
document.getElementById("burger").innerHTML = 60;
document.getElementById("pizza").innerHTML = j;
document.getElementById("biryani").innerHTML = k;

document.getElementById("pay-card-2").addEventListener("click", function () {
  document.querySelector(".payment-details").style.display = "block";
});