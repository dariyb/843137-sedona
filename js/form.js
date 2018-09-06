// var button = document.querySelector(".search-for-hotel");
// var popform = document.querySelector(".search-form");
// var close = popform.querySelector(".search-form");
// var enterdate = popform.querySelector("[name=date-of-arrival]");
// var departuredate = popform.querySelector("[name=date-of-departure]");
// var adults = popform.querySelector("[name=adults]");
// var kids = popform.querySelector("[name=children]");
// var isStorageSupport = true;
// var storage = "";
// try {
//   storage = localStorage.getItem("adults");
// } catch (err) {
//   isStorageSupport = false;
// }
// try {
//   storage = localStorage.getItem("kids");
// } catch (err) {
//   isStorageSupport = false;
// }
// if (popform) {
//   popform.classList.add("form-close");
// }
// if (button) {
//   button.addEventListener("click", function(evt) {
//     evt.preventDefault();
//     popform.classList.toggle("form-close");
//     popform.classList.toggle("form-show");
//     if (storage) {
//       adults.value = storage;
//       kids.focus();
//     } else {
//       adults.focus();
//       enterdate.focus();
//     }
//   });
// }
// close.addEventListener("click", function(evt) {
//   evt.preventDefault();
//   popform.classList.toggle("search-for-hotel");
//   popform.classList.remove("form-error");
// });
// popform.addEventListener("submit", function(evt) {
//   if (!enterdate.value || !departuredate.value || !adults.value || !kids.value) {
//     evt.preventDefault();
//     popform.classList.remove("form-error");
//     popform.offsetWidth = popform.offsetWidth;
//     popform.classList.add("form-error");
//     console.log("Заполните все поля");
//   } else {
//     if (isStorageSupport) {
//       localStorage.setItem("adults", adults.value);
//       localStorage.setItem("kids", children.value);
//     }
//   }
// });
// window.addEventListener("keydown", function(evt) {
//   if (evt.keyCode === 27) {
//     evt.preventDefault();
//     if (popform.classList.contains("form-show")) {
//       popform.classList.remove("form-show");
//       popform.classList.remove("form-error");
//     }
//   }
// });


var link = document.querySelector(".search-for-hotel");

var popup = document.querySelector(".search-form");
var close = popup.querySelector(".search-form");

var form = popup.querySelector("form");
var enterdate = popup.querySelector("[name=date-of-arrival]");
var departuredate = popup.querySelector("[name=date-of-departure]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("form-show");

  if (storage) {
    enterdate.value = storage;
    departuredate.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("form-show");
  popup.classList.remove("form-error");
});

form.addEventListener("submit", function(evt) {
  if (!enterdate.value || !departuredate.value) {
    evt.preventDefault();
    popup.classList.remove("form-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("form-show")) {
      popup.classList.remove("form-show");
      popup.classList.remove("form-error");
    }
  }
});