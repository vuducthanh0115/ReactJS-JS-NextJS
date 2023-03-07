var users = [
  {
    id: 1,
    name: "Thanh Vu",
  },
  {
    id: 2,
    name: "Hai Vu",
  },
  {
    id: 3,
    name: "Nam Tien",
  },
  {
    id: 4,
    name: "Huan Nguyen",
  },
];

var comments = [
  {
    id: 1,
    text: "Hello",
    user_id: 1,
  },
  {
    id: 2,
    text: "Hi, Thanh Vu",
    user_id: 2,
  },
  {
    id: 3,
    text: "Nice to meet you !",
    user_id: 1,
  },
];

var getComments = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(comments);
    }, 1000);
  });
};
var getUsers = (userId) => {
  return new Promise((resolve, reject) => {
    var result = users.filter((user) => userId.includes(user.id));
    resolve(result);
  });
};

getComments()
  .then((comments) => {
    var userIds = comments.map((comment) => comment.user_id);
    console.log(userIds);
    return getUsers(userIds).then((users) => {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then((data) => {
    var commentBlock = document.getElementById("comment-block");
    var html = "";
    data.comments.forEach((comment) => {
      var user = data.users.find((user) => user.id === comment.user_id);
      html += `<li>${user.name} : ${comment.text} </li>`;
    });
    commentBlock.innerHTML = html;
  });
