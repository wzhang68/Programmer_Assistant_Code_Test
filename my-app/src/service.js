import fetch from "node-fetch";

let user = {};

function searchUser(username) {
  const myURL = `http://localhost:9000/search/user/${username}`;

  fetch(myURL)
    .then(async (response) => {
      if (response.status === 200) {
        return await response.json();
      } else {
        throw new Error(response.status);
      }
    })
    .then((res) => {
      console.log(res.data);
      console.log(typeof res);
      user.id = res.data.id;
      user.name = res.data.name;
      user.username = res.data.username;
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
}
searchUser("zzwww995");
