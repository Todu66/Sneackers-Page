// Header
const headerEl = document.querySelector(".header");

// Shoe IMAGES
const firstImage = document.getElementById("firstimage");
const secondImage = document.getElementById("secondimage");
const thirdImage = document.getElementById("thirdimage");
const fourthImage = document.getElementById("fourthimage");

// Plus And Minus
const Minus = document.getElementById("minus");
const Number = document.getElementById("number");
const changeNumberCart = document.getElementById("changer");
const Plus = document.getElementById("plus");
const checkOutCta = document.getElementById("checkout-cta");

// Cart image
const navCart = document.getElementById("cart_cta");
const checkOut = document.getElementById("checkout_cta");

// Exit
const Exit = document.getElementById("exit");

// Start of Functions
change_cta;
function imageChange() {
  firstImage.addEventListener("click", function () {
    document.getElementById("change").src = "image/images/image-product-1.jpg";
    document.getElementById("change_cta").src =
      "image/images/image-product-1.jpg";
    firstImage.style.border = "3px solid orange";
    secondImage.style.border = "none";
    thirdImage.style.border = "none";
    fourthImage.style.border = "none";
  });

  secondImage.addEventListener("click", function () {
    document.getElementById("change").src = "image/images/image-product-2.jpg";
    document.getElementById("change_cta").src =
      "image/images/image-product-2.jpg";
    firstImage.style.border = "none";
    secondImage.style.border = "3px solid orange";
    thirdImage.style.border = "none";
  });

  thirdImage.addEventListener("click", function () {
    document.getElementById("change").src = "image/images/image-product-3.jpg";
    document.getElementById("change_cta").src =
      "image/images/image-product-3.jpg";
    firstImage.style.border = "none";
    secondImage.style.border = "none";
    thirdImage.style.border = "3px solid orange";
    fourthImage.style.border = "none";
  });

  fourthImage.addEventListener("click", function () {
    document.getElementById("change").src = "image/images/image-product-4.jpg";
    document.getElementById("change_cta").src =
      "image/images/image-product-4.jpg";
    firstImage.style.border = "none";
    secondImage.style.border = "none";
    thirdImage.style.border = "none";
    fourthImage.style.border = "3px solid orange";
  });

  document.getElementById("change_cta").style.display = "none";
  document.getElementById("autumn").style.display = "none";
  document.getElementById("dollar").style.display = "none";
  document.getElementById("trash").style.display = "none";
}

// --------------------------------------------
// Minus And Plus
let cuantity = 0;
let cuantityCta = 0;
let cuantityCtaCta = 0;
function add() {
  Minus.addEventListener("click", function () {
    if (Number.innerText > 0) {
      Number.innerText = cuantity = cuantity - 1;
      // document.getElementById('number_cta').innerText = cuantity = cuantity - 1;
      document.getElementById('number-change').innerText = cuantityCtaCta = cuantityCtaCta - 1;
    }

    
  });

  Plus.addEventListener("click", function () {
    Number.innerText = cuantity = cuantity + 1;
    // document.getElementById('number_cta').innerText = cuantity = cuantity + 1;
    document.getElementById("changer").innerText = cuantityCta =
      cuantityCta + 1;
    // ------------------------------
    checkOutCta.addEventListener("click", function () {
      document.getElementById("addToCart").innerText =
        "$" + 125.0 * cuantityCta;
      document.getElementById("lastPrice").innerText =
        "$" + 125.0 * cuantityCta;
    });
    document.getElementById('number-change').innerText = cuantityCtaCta = cuantityCtaCta + 1;

  });
  //
  
}

function checkoutClick() {
  checkOutCta.addEventListener("click", function () {
    document.getElementById("addToCart").style.display = "none";
    document.getElementById("change_cta").style.display = "inline-block";
    document.getElementById("autumn").style.display = "inline-block";
    document.getElementById("dollar").style.display = "inline-block";
    document.getElementById("trash").style.display = "inline-block";
    document.getElementsByClassName("product")[0].style.padding = "0 1rem";
  });
}

// ------------------------------------------------

function cartDisplay() {
  navCart.addEventListener("click", function () {
    checkOut.style.display = 'inline';
  });

  Exit.addEventListener("click", function () {
    checkOut.style.display = 'none';
  });
}

function clearAll() {
  document.getElementById("trash").addEventListener("click", function () {
    document.getElementsByClassName("product")[0].style.display = "none";
  });
}
imageChange();
add();
checkoutClick();
cartDisplay();
clearAll();

// ----------------------------------------------------------
// Mobile Navigation

const btnNavEl = document.querySelector(".btn-mobile-nav");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  document.querySelector('.checkout_show').style.opacity = '0';
});
