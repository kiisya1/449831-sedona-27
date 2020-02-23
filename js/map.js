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
