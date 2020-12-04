// 1 - Change IMG on header
try {
  document.querySelector("footer .le-negaozao").src =
    "https://i.imgur.com/7uoux59.png";
  document.querySelector(".le-logo-ahnegao img").src =
    "https://i.imgur.com/64YZDkW.png";
  document.querySelector(".le-negao img").src =
    "https://i.imgur.com/7uoux59.png";
} catch (error) {}
try {
  document.querySelector("#logo-ahnegao-header > a > img:nth-child(2)").src =
    "https://i.imgur.com/1mct3RP.png";
} catch (error) {}

// 2 - Change the Name and IMG on post footer by a random one

const joeverso = [
  {
    img:
      "https://c.disquscdn.com/uploads/users/33634/3645/avatar92.jpg?1607011910",
    name: "E-sabella Leão",
  },
  //   {
  //     img:
  //       "https://c.disquscdn.com/uploads/users/33195/2765/avatar92.jpg?1606786367",
  //     name: "Andre Santiago",
  //   },
  //   {
  //     img:
  //       "https://c.disquscdn.com/uploads/users/22562/3793/avatar92.jpg?1606883207",
  //     name: "Nath Caetano",
  //   },
  {
    img:
      "https://c.disquscdn.com/uploads/users/32702/7671/avatar92.jpg?1546430498",
    name: "El Gato!",
  },
];

document.querySelectorAll(".le-autor").forEach((e) => {
  replacePerson(e);
});

function replacePerson(e) {
  let person = joeverso[Math.floor(Math.random() * joeverso.length)];
  e.querySelector("a").textContent = person.name;
  e.querySelector("img").src = person.img;
}
