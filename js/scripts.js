/* Форма */

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

/* Проверка доступности localStorage  */

try {
  storage = localStorage.getItem("adults");
  storageChl = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

/* Закрытие формы при инициализации js  */

form.classList.add("search-form-close");

/* Открытие и закрытие формы  */

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (form.classList.contains("search-form-close")) {
    form.classList.remove("search-form-close");
    form.classList.add("search-form-open");
    if (storage) {
      adults.value = storage;
    }
    if (storageChl) {
      children.value = storageChl;
    }
    departureDate.focus();
  } else {
    form.classList.remove("search-form-open");
    form.classList.add("search-form-close");
    if (form.classList.contains("search-form-error")) {
      form.classList.remove("search-form-error");
    }
  }
});

/* Проверка формы перед отправкой  */

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

/* Карта */

/* Функция ymaps.ready() будет вызвана, когда загрузятся все компоненты API, а также когда будет готово DOM-дерево. */
ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    center: [34.869497, -111.760186],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 9,
    // Тип покрытия карты: "Гибрид".
    type: "yandex#hybrid"
  });
  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [34.869497, -111.760186] // координаты точки
    }
  }, {
    preset: "islands#redDotIcon"
  })
  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myGeoObject);
}
