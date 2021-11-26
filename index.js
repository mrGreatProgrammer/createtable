(function() {

    // 1. Создаём новый XMLHttpRequest-объект
    const xhr = new XMLHttpRequest();

    // 2. Настраиваем его: GET-запрос по URL
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    console.log('BEFORE REQUEST');

    xhr.responseType = 'json';

    // 3. Отсылаем запрос
    xhr.send();

    console.log('AFTER REQUEST');
    // Созраняем респонс
    let savedRes = null;

    // 4. Этот код сработает после того, как мы получим ответ сервера
    xhr.onload = function () {
      if (xhr.status != 200) {
        // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
      } else {
        // если всё прошло гладко, выводим результат
        console.log(`Готово, получили ${xhr.response.length} байт`);
         // response -- это ответ сервера
        savedRes = xhr.response
        console.log(savedRes);
        return savedRes;
      }
    };

    xhr.onprogress = function (event) {
      if (event.lengthComputable) {
        alert(`Получено ${event.loaded} из ${event.total} байт`);
      } else {
        console.log(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
      }
    };

    xhr.onerror = function () {
      console.log('Запрос не удался');
    };


    // console.log(savedRes);
})();