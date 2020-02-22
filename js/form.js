var button = document.querySelector(".button-form-open");
var form = document.querySelector(".search-form");
var departureDate = form.querySelector("[name=departure-date]");
var arrivalDate = form.querySelector("[name=arrival-date]");
var adults = form.querySelector("[name=adults]");
var children = form.querySelector("[name=children]");
var sabmitButton = form.querySelector(".button-search");

var isStorageSupport = true;
var storage = "";
var storageChl = "";

try {
  storage = localStorage.getItem("adults");
  storageChl = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

form.classList.add("search-form-close");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("search-form-close");
  if (!form.classList.contains("search-form-close")) {
    if (storage) {
      adults.value = storage;
    }
    if (storageChl) {
      children.value = storageChl;
    }
    if (form.classList.contains("search-form-error")) {
      form.classList.remove("search-form-error");
    }
    departureDate.focus();
  }
});

sabmitButton.addEventListener("click", function(evt) {
  if (!departureDate.value || !arrivalDate.value || !adults.value || !children.value) {
    evt.preventDefault();
    console.log("Заполнены не все поля");
    form.classList.remove("search-form-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("search-form-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
});
