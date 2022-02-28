let card_1 = document.querySelector(".card_1");
let card_2 = document.querySelector(".card_2");
let card_3 = document.querySelector(".card_3");
document.querySelector("#profile").addEventListener("click", function () {
  card_1.style.display = "block";
  card_2.style.display = "none";
  card_3.style.display = "none";
  document.querySelector("#profile").style.marginBottom = "0";
  document.querySelector("#order-history").style.marginBottom = "1rem";
  document.querySelector("#address").style.marginBottom = "1rem";
  document.querySelector("#profile").style.borderRadius = "12px 12px 0 0";
  document.querySelector("#order-history").style.borderRadius = "12px";
  document.querySelector("#address").style.borderRadius = "12px";
  document.querySelector(".sub-container").style.borderRadius =
    "0 12px 12px 12px";
});
document.querySelector("#new_address").addEventListener("click", function () {
  card_1.style.display = "block";
  card_2.style.display = "none";
  card_3.style.display = "none";
  document.querySelector("#profile").style.marginBottom = "0";
  document.querySelector("#order-history").style.marginBottom = "1rem";
  document.querySelector("#address").style.marginBottom = "1rem";
  document.querySelector("#profile").style.borderRadius = "12px 12px 0 0";
  document.querySelector("#order-history").style.borderRadius = "12px";
  document.querySelector("#address").style.borderRadius = "12px";
  document.querySelector(".sub-container").style.borderRadius =
    "0 12px 12px 12px";
});
document.querySelector("#order-history").addEventListener("click", function () {
  card_1.style.display = "none";
  card_2.style.display = "block";
  card_3.style.display = "none";
  document.querySelector("#profile").style.marginBottom = "1rem";
  document.querySelector("#order-history").style.marginBottom = "0";
  document.querySelector("#address").style.marginBottom = "1rem";
  document.querySelector("#profile").style.borderRadius = "12px";
  document.querySelector("#order-history").style.borderRadius = "12px 12px 0 0";
  document.querySelector("#address").style.borderRadius = "12px";
  document.querySelector(".sub-container").style.borderRadius = "12px";
});
document.querySelector("#address").addEventListener("click", function () {
  card_1.style.display = "none";
  card_2.style.display = "none";
  card_3.style.display = "block";
  document.querySelector("#profile").style.marginBottom = "1rem";
  document.querySelector("#order-history").style.marginBottom = "1rem";
  document.querySelector("#address").style.marginBottom = "0";
  document.querySelector("#profile").style.borderRadius = "12px";
  document.querySelector("#order-history").style.borderRadius = "12px";
  document.querySelector("#address").style.borderRadius = "12px 12px 0 0";
  document.querySelector(".sub-container").style.borderRadius =
    "12px 0px 12px 12px";
});
document.querySelector("#order1").addEventListener("click", function () {
    document.querySelector("#order1").innerHTML = "Added to cart ✔️";
});
document.querySelector("#order2").addEventListener("click", function () {
    document.querySelector("#order2").innerHTML = "Added to cart ✔️";
});
document.querySelector("#order3").addEventListener("click", function () {
    document.querySelector("#order3").innerHTML = "Added to cart ✔️";
});
