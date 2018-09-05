var button = document.querySelector(".search-for-hotel");
var popform = document.querySelector(".search-form");
var close = popform.querySelector(".search-form");
var enterdate = popform.querySelector("[name=date-of-arrival]");
var departuredate = popform.querySelector("[name=date-of-departure]");
var adults = popform.querySelector("[name=adults]");
var kids = popform.querySelector("[name=children]");
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}
try {
  storage = localStorage.getItem("kids");
} catch (err) {
  isStorageSupport = false;
}
button.addEventListener("click", function(evt) {
  evt.preventDefault();
  popform.classList.toggle("form-show");
  if (storage) {
    adults.value = storage;
    kids.focus();
  } else {
    adults.focus();
  }
  enterdate.focus();
});
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popform.classList.toggle("search-form");
});
popform.addEventListener("submit", function(evt) {
  if (!enterdate.value || !departuredate.value || !adults.value || !kids.value) {
    evt.preventDefault();
    console.log("Заполните все поля");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("kids", children.value);
    }
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popform.classList.contains("form-show")) {
      popform.classList.remove("form-show");
    }
  }
});