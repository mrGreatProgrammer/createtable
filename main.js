const allPosts = document.querySelector(".the-posts");
const userId = document.querySelector(".user-id");
const postIdClass = document.querySelector(".post-id");

const btn = document.getElementById('btn');
const hi = document.getElementById('popupwindow');
const e = document.getElementById('e');
const idInfo = document.getElementById('id-info');
const titleInfo = document.getElementById('title-info');
const bodyInfo = document.getElementById('body-info');


// EXIT FROM POP UP WINDOW
e.onclick = ()=>{
  hi.style.display ="none"
}

let posts = []

function createLi(theUserId, theID, theTitle) {
  let postEl = document.createElement("tr");
  // создаём span где храним id user`a
  let userIdEl = document.createElement("td");
  userIdEl.className = "user-id"; // ставим класс
  userIdEl.textContent = theUserId;
  postEl.appendChild(userIdEl);
  // создаём span где храним id post`a
  let postIdEl = document.createElement("td");
  postIdEl.className = "post-id"; // ставим класс
  // postIdEl.textContent = theID;
  postEl.appendChild(postIdEl);
  let btn = document.createElement("button");
  btn.className = "btn";
  btn.textContent = theID;
  postIdEl.appendChild(btn);
  btn.onclick = showMore;
  // создаём span где храним title нашего поста
  let titleEl = document.createElement("td");
  titleEl.className = "title-post"; // ставим класс
  titleEl.textContent = theTitle;
  postEl.appendChild(titleEl);

  // помещяем всё в одном месте
  allPosts.appendChild(postEl);
}

// function showMore() {
//   console.log(this.textContent);
//   // console.log();
// }

function good() {
  // 1. Создаём новый XMLHttpRequest-объект
  const xhr = new XMLHttpRequest();

  // 2. Настраиваем его: GET-запрос по URL
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

  console.log("BEFORE REQUEST");

  xhr.responseType = "json";

  // 3. Отсылаем запрос
  xhr.send();

  console.log("AFTER REQUEST");

  // 4. Этот код сработает после того, как мы получим ответ сервера
  xhr.onload = function () {
    if (xhr.status != 200) {
      // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
      console.log(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
    } else {
      // если всё прошло гладко, выводим результат
      console.log(`Готово, получили ${xhr.response.length} байт`);
      // response -- это ответ сервера
      savedRes = xhr.response;
      console.log(savedRes);

      // WE CALL DISPLAY POSTS FUNCTION WHEN WE GET THE RESPONSE
      displayPosts(savedRes);
      getInfo(savedRes)
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
    console.log("Запрос не удался");
  };
}

// DISPLAY POSTS FUNCTION
function displayPosts(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    createLi(element.userId, element.id, element.title);
  }
}


function getInfo(array) {
  for (let i = 0; i < array.length; i++) {
    posts.push(array[i])
    // const element = array[i];
    // createLi(element.userId, element.id, element.title);
  }
  return posts
}

function showMore() {
  posts
  for (let i = 0; i < posts.length; i++) {
    const element = posts[i];
    if (this.textContent == element.id) {
      console.log(element.body);
      idInfo.textContent = element.id;
      titleInfo.textContent = element.title;

      bodyInfo.textContent = element.body;
    }
  }
  // console.log(posts);
  console.log(this.textContent);
  hi.style.display="block"
  // console.log();
}

good();

