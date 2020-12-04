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
      img: "https://c.disquscdn.com/uploads/users/32702/7671/avatar92.jpg?1546430498",
      name: "El Gato!"
  }
];

document.querySelectorAll(".le-autor").forEach((e) => {
  replacePerson(e);
});

function replacePerson(e){
    let person = joeverso[Math.floor(Math.random() * joeverso.length)];
    e.querySelector("a").textContent = person.name;
    e.querySelector("img").src = person.img;
}