const allPosts = document.querySelector(".the-posts")
// const 
// const userId = document.querySelector(".user-id")

// THE POSTS
const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 2,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
      "userId": 2,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
]

function createLi(theUserId, theID, theTitle) {
    let postEl = document.createElement("tr");
    // создаём span где храним id user`a
    let userIdEl = document.createElement("td");
    userIdEl.className = "user-id"; // ставим класс
    userIdEl.textContent = theUserId;
    postEl.appendChild(userIdEl);
    // создаём span где храним id post`a
    let postIdEl = document.createElement("td");
    postIdEl.className = "post-id" // ставим класс
    postIdEl.textContent = theID;
    postEl.appendChild(postIdEl)
    // создаём span где храним title нашего поста
    let titleEl = document.createElement("td");
    titleEl.className = "title-post"; // ставим класс
    titleEl.textContent = theTitle;
    postEl.appendChild(titleEl)

    // помещяем всё в одном месте
    allPosts.appendChild(postEl);
}

// DISPLAY POSTS FUNCTION
function displayPosts(array) {
    var uId = "";
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        createLi(element.userId, element.id, element.title)
    }
    console.log(uId);
    userId.textContent = uId;
}

displayPosts(posts)